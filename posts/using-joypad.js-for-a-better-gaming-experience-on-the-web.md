---
title: 'Using joypad.js for a better gaming experience on the web'
url: 'using-joypad.js-for-a-better-gaming-experience-on-the-web'
date: 'Wed Dec 12 2019'
---

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/1.png)

Image and icon source - freepik.com

I still vividly remember playing games on my PC, the times when detailed [polygon models](https://en.wikipedia.org/wiki/Polygonal_modeling) weren't a thing, open worlds were small and well, not that open (to be very honest) and online multiplayer gaming was still underway. For most games, controls mapped to a standard keyboard were fine to play with. But for games with more complex controls, it was just more viable to switch to a standard gamepad.

Desktop games provide this flexibility to gamers majorly because they have native support for connecting external devices like gamepads and joysticks. But on the web it's totally different, you just need a browser and either your mouse or keyboard becomes the controller.

Using a mouse to move around is fun, but it can turn out to be quite a daunting task for gamers that prefer more natural controls like a directional pad or a joystick for character movements.

For long there has been no native support in the browser for connecting gamepads or joysticks. Developers had to design mouse/keyboard based interfaces for game controls that can be tricky to operate and can take some time to get used to.

## Press start to play 🎮

Turns out a few years back the W3C introduced the [Gamepad specification](https://w3c.github.io/gamepad/) which has been under constant development since then and has been implemented by various browser vendors (but is still subject to change). As stated in the spec -

> The Gamepad specification defines a low-level interface that represents gamepad devices.

This means that using this API, developers would be able to connect gamepads and similar input devices to the browser and be able to use them in their gaming applications. Sounds cool right? It's quite the contrary when you go about implementing it.

## Enter boss stage ⚔️

As of now, only 2 events are supported by the gamepad API -

**gamepadconnected** - indicates that a gamepad has been connected.

**gamepaddisconnected** - indicates that a gamepad has been disconnected.

There is no standardized way to detect gamepad button presses or axis movements. The [Gamepad interface](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) does return useful information about the gamepad buttons, axes and their current states (button press and axis movement values) but there is no actual event that is dispatched when these actions are performed by the user.

The **window.navigator.getGamepads()** method returns an array of Gamepad objects, one for each gamepad connected to the device. If you log out the 0th index (the first connected gamepad) you can see the gamepad info -

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/2.png)

The Gamepad interface stores information about the connected gamepad

Notice that there's a mapping of all the buttons present on the gamepad. This mapping stores information about the button states.

Now if you press any of the buttons and log the info out again, you would notice that the state doesn't change -

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/3.png)

Button and axis states in the Gamepad interface

Even though it was pressed, the value remains **false**. That is because once after you release the button, the state of the button is reverted. So you can't really capture the button state (and as mentioned earlier there is no standard event for this) and the state is lost.

What if we wrap this inside a **setInterval()** call -

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/4.png)

Capturing button state changes using setInterval()

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/5.png)

Button state changes

Now we are able to catch the button state as it updates, but is this the best way to do it?

## Bonus round 🌟

Before answering that question, first let's try to understand why **setInterval()** is not the right candidate for this job.

We all know that in JavaScript everything runs on a single thread and the timer functions are no exception. To execute code using **setInterval()** we specify a callback that is executed every **x** milliseconds. The delays provided to these timer functions are some times not honored due to priority execution of resource-intensive tasks (if any in the task queue). This leads to inconsistent delay intervals.

You might have noticed a jank while using **setInterval()** to animate elements on the page. This is caused due to unnecessary and forceful reflows of the page elements even before the user's screen is ready to process and render those updates. This is called [Layout Thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing) and should be avoided at all costs!

Now the next question is what could be the most efficient way to query the Gamepad objects if **setInterval()** is not the right solution?

### requestAnimationFrame() to the rescue!

As stated on MDN -

> The **[window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)** method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

This basically means that the callback provided to **requestAnimationFrame()** is guaranteed to be executed at the start of the frame. The number of times the callback function is requested is around 60 times a second but will match the screen's refresh rate.

In the context of a video game, a **game loop** is something that continuously checks for user input, updates the game state and renders the scene. **requestAnimationFrame()** seems to be fitting well for this as we can perform all these operations in its callback and it would remain in sync with the repaint tasks in every frame.

Ideally that's how user input should be polled in a gaming application.

I'd highly recommend checking this article - [https://developer.mozilla.org/en-US/docs/Games/Anatomy](https://developer.mozilla.org/en-US/docs/Games/Anatomy) if you want to know more about how a typical game loop workflow can be implemented in JavaScript.

Now coming back to the Gamepad API, querying the Gamepad objects and accessing the button/axis states can be done effectively using **requestAnimationFrame()** \-

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/6.png)

Capturing button state changes using requestAnimationFrame()

This does give us the user input states as expected but we still need a way to store and discard these values in an efficient way. Ideally in the form of an API that can be exposed and reused in any gaming application.

## Time to power up! 🍄

I'd like to Introduce [**joypad.js**](https://github.com/ArunMichaelDsouza/joypad.js) - a JavaScript library that lets you connect and use various gaming controllers with browsers that support the Gamepad API. It's less than 5KB in size with zero dependencies and has support for button press, axis movement events and vibration play effect.

It's a utility library that I open-sourced a few months back under the [MIT license](https://github.com/ArunMichaelDsouza/joypad.js#license). It exposes an event-based [API](https://github.com/ArunMichaelDsouza/joypad.js#api) that can be used to subscribe to certain events that are detected and dispatched internally by the library.

Subscribing to events is as simple as specifying an event name and a callback that is fired whenever the specified event is triggered.

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/7.png)

Subscribing to an event using joypad.js

The following events are supported by the library -

**connect** - Fired whenever a controller is connected.

**disconnect** \- Fired whenever a controller is disconnected.

**button_press** - Fired whenever a controller's button is pressed.

**axis_move** - Fired whenever a controller's axis (analog stick) is moved.

To know more about the joypad.js events please check out the detailed documentation [here](https://github.com/ArunMichaelDsouza/joypad.js#events).

joypad.js supports the standard gamepad button layout which is supported by most controllers in which button locations are laid out in a left cluster of four buttons, a right cluster of four buttons , a center cluster of three buttons (some controllers have four) and a pair of front-facing buttons (shoulder buttons) on the left and right side of the gamepad.

Please note that since the Gamepad API is in very early stages, the standard gamepad button layout may differ from browser to browser.

The following image describes the default button mappings as on **Chrome** -

![](/img/blogs/using-joypad.js-for-a-better-gaming-experience-on-the-web/8.png)

The standard gamepad button layout can be overridden using the **[customButtonMapping](https://github.com/ArunMichaelDsouza/joypad.js#custombuttonmapping-object)** setting and can be used for better cross-browser button mappings support.

The library also has support for adjusting the threshold for the axis (analog stick) movement which can be done using the **[axisMovementThreshold](https://github.com/ArunMichaelDsouza/joypad.js#axismovementthreshold-number)** setting. To know more about all the settings please check the detailed documentation [here](https://github.com/ArunMichaelDsouza/joypad.js#settings).

### Examples

> Having fun playing with the Gamepad API. First gaming project coming out soon! [#gamepadapi](https://twitter.com/hashtag/gamepadapi?src=hash&ref_src=twsrc%5Etfw) [#joypad](https://twitter.com/hashtag/joypad?src=hash&ref_src=twsrc%5Etfw) [#javascript](https://twitter.com/hashtag/javascript?src=hash&ref_src=twsrc%5Etfw) [#OpenSource](https://twitter.com/hashtag/OpenSource?src=hash&ref_src=twsrc%5Etfw) [#gaming](https://twitter.com/hashtag/gaming?src=hash&ref_src=twsrc%5Etfw) [#GameDev](https://twitter.com/hashtag/GameDev?src=hash&ref_src=twsrc%5Etfw) [#gamedesign](https://twitter.com/hashtag/gamedesign?src=hash&ref_src=twsrc%5Etfw) [#gameengine](https://twitter.com/hashtag/gameengine?src=hash&ref_src=twsrc%5Etfw) [#gamedevelopment](https://twitter.com/hashtag/gamedevelopment?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/P25q4IF8wh](https://t.co/P25q4IF8wh)
>
> — Arun Michael Dsouza (@amdsouza92) [June 3, 2019](https://twitter.com/amdsouza92/status/1135638979850596352?ref_src=twsrc%5Etfw)

> Emulating button press events for the Gamepad API using requestAnimationFrame and CustomEvent and mapping it to a DOM element.[#gamepadapi](https://twitter.com/hashtag/gamepadapi?src=hash&ref_src=twsrc%5Etfw) [#joypad](https://twitter.com/hashtag/joypad?src=hash&ref_src=twsrc%5Etfw) [#javascript](https://twitter.com/hashtag/javascript?src=hash&ref_src=twsrc%5Etfw) [#OpenSource](https://twitter.com/hashtag/OpenSource?src=hash&ref_src=twsrc%5Etfw) [#gaming](https://twitter.com/hashtag/gaming?src=hash&ref_src=twsrc%5Etfw) [#GameDev](https://twitter.com/hashtag/GameDev?src=hash&ref_src=twsrc%5Etfw) [#gamedesign](https://twitter.com/hashtag/gamedesign?src=hash&ref_src=twsrc%5Etfw) [#gameengine](https://twitter.com/hashtag/gameengine?src=hash&ref_src=twsrc%5Etfw) [#gamedevelopment](https://twitter.com/hashtag/gamedevelopment?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/s1HohjzGtK](https://t.co/s1HohjzGtK)
>
> — Arun Michael Dsouza (@amdsouza92) [June 3, 2019](https://twitter.com/amdsouza92/status/1135641830895210496?ref_src=twsrc%5Etfw)

> Emulating axis (analog stick) movement events for the Gamepad API using requestAnimationFrame and CustomEvent and mapping it to a DOM element.[#gamepadapi](https://twitter.com/hashtag/gamepadapi?src=hash&ref_src=twsrc%5Etfw) [#joypad](https://twitter.com/hashtag/joypad?src=hash&ref_src=twsrc%5Etfw) [#javascript](https://twitter.com/hashtag/javascript?src=hash&ref_src=twsrc%5Etfw) [#OpenSource](https://twitter.com/hashtag/OpenSource?src=hash&ref_src=twsrc%5Etfw) [#gaming](https://twitter.com/hashtag/gaming?src=hash&ref_src=twsrc%5Etfw) [#GameDev](https://twitter.com/hashtag/GameDev?src=hash&ref_src=twsrc%5Etfw) [#gamedesign](https://twitter.com/hashtag/gamedesign?src=hash&ref_src=twsrc%5Etfw) [#gameengine](https://twitter.com/hashtag/gameengine?src=hash&ref_src=twsrc%5Etfw) [#gamedevelopment](https://twitter.com/hashtag/gamedevelopment?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/IV0AzwdMtE](https://t.co/IV0AzwdMtE)
>
> — Arun Michael Dsouza (@amdsouza92) [June 3, 2019](https://twitter.com/amdsouza92/status/1135643278076829699?ref_src=twsrc%5Etfw)

> Experimenting with the Gamepad API vibration play effects. [#gamepadapi](https://twitter.com/hashtag/gamepadapi?src=hash&ref_src=twsrc%5Etfw) [#joypad](https://twitter.com/hashtag/joypad?src=hash&ref_src=twsrc%5Etfw) [#javascript](https://twitter.com/hashtag/javascript?src=hash&ref_src=twsrc%5Etfw) [#OpenSource](https://twitter.com/hashtag/OpenSource?src=hash&ref_src=twsrc%5Etfw) [#gaming](https://twitter.com/hashtag/gaming?src=hash&ref_src=twsrc%5Etfw) [#GameDev](https://twitter.com/hashtag/GameDev?src=hash&ref_src=twsrc%5Etfw) [#gamedesign](https://twitter.com/hashtag/gamedesign?src=hash&ref_src=twsrc%5Etfw) [#gameengine](https://twitter.com/hashtag/gameengine?src=hash&ref_src=twsrc%5Etfw) [#gamedevelopment](https://twitter.com/hashtag/gamedevelopment?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/8q9nzc9UG2](https://t.co/8q9nzc9UG2)
>
> — Arun Michael Dsouza (@amdsouza92) [June 3, 2019](https://twitter.com/amdsouza92/status/1135645909092425732?ref_src=twsrc%5Etfw)

joypad.js works on all modern browsers that support the Gamepad API. Please feel free to give it a try and provide your feedback. I would like to point out again that the Gamepad API is in very early stages so it may undergo major API changes. I'll try my best to keep the library up to date with the specification. Nonetheless, pull requests are welcomed for bug fixes and new features :)

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
