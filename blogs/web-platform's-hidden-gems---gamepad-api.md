---
title: "Web platform's hidden gems - Gamepad API"
url: "web-platform's-hidden-gems---gamepad-api"
date: 'Sun Jun 14 2020'
metaDescription: "A few weeks back I started the Web Platform’s hidden gems blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web. Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer! This is the first blog post of the series and in this post, I'll be talking about the Gamepad API."
metaKeywords: 'gamepad, gaming, joypad, gamepad api, game development, gamer, game design, unity 3d, unreal engine, javascript, playstation, xbox, ps4'
metaImage: "https://arunmichaeldsouza.com/img/blogs/web-platform's-hidden-gems---gamepad-api/1.png"
---

![](/img/blogs/web-platform's-hidden-gems---gamepad-api/1.png)

A few weeks back I started the [Web platform's hidden gems](<https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems-(series)>) blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web.

Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer!

This is the first blog post of the series and in this post, I'll be talking about the [Gamepad API](https://w3c.github.io/gamepad/).

Just a disclaimer though, this API is in very early stages and may undergo major changes in terms of implementation and usage.

## Connecting a gamepad to the browser

> The Gamepad specification defines a low-level interface that represents gamepad devices.

This means that using this API, developers would be able to connect gamepads and similar input devices to the browser and be able to use them in their gaming applications. There would be no need to design any complex mouse/keyboard based interfaces for game controls that can be tricky to operate and can take some time to get used to. Game developers would be able to provide more natural controls to their users like joystick driven character movements.

The **gamepadconnected** event is emitted whenever a new gamepad is connected to the page. If the gamepad is already connected when the page loads and gains focus then the event is emitted when a button is pressed or an axis is moved on the gamepad.

![](/img/blogs/web-platform's-hidden-gems---gamepad-api/2.png)

The **window.navigator.getGamepads()** method returns an array of Gamepad objects, one for each gamepad connected to the device. The Gamepad API supports up to 4 simultaneous connections at the moment.

If you log out the 0th index (the first connected gamepad) you can see the gamepad info -

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/3.png)

The Gamepad interface stores information about the connected gamepad

The **gamepaddisconnected** event is emitted whenever a gamepad (which has previously received data from the page) has been disconnected.

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/4.png)

## Tracking button press and axis movement

Currently, the gamepad API only supports these two events - **gamepadconnected** and **gamepaddisconnected**. There is no standardized way to detect gamepad button presses or axis movements. The [Gamepad interface](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad) does return useful information about the gamepad buttons, axes and their current states (button press and axis movement values) but there is no actual event that is dispatched when these actions are performed by the user.

But there is a way to continuously **poll** for button and axis value changes using **[window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)** \-

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/5.png)

In the context of a video game, a **game loop** is something that continuously checks for user input, updates the game state and renders the scene. **requestAnimationFrame()** seems to be fitting well for this as we can perform all these operations in its callback and it would remain in sync with the repaint tasks in every frame.

Ideally that's how user input should be polled in a gaming application.

I'd highly recommend checking this article - [Anatomy of a video game](https://developer.mozilla.org/en-US/docs/Games/Anatomy) if you want to know more about how a typical game loop workflow can be implemented in JavaScript.

This does give us the user input states as expected but we still need a way to store and discard these values in an efficient way. Ideally in the form of an API that can be exposed and reused in any gaming application.

That is the very reason why I created **[joypad.js](https://github.com/ArunMichaelDsouza/joypad.js)** \- a JavaScript library that lets you connect and use various gaming controllers with browsers that support the Gamepad API. It's less than 5KB in size with zero dependencies and has support for button press, axis movement events and vibration play effect.

Subscribing to events is as simple as specifying an event name and a callback that is fired whenever the specified event is triggered.

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/6.png)

For more details on how to use it or to know how it works under the hood (Spoiler alert: it uses the requestAnimationFrame() polling technique), please feel free to go to its [Github page](https://github.com/ArunMichaelDsouza/joypad.js).

Now coming back to the Gamepad API, the button/axis layout is as follows -

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/7.png)

This is the **Standard Gamepad** button layout which is supported by most controllers in which button locations are laid out in a left cluster of four buttons, a right cluster of four buttons, a center cluster of three buttons (some controllers have four) and a pair of front-facing buttons (shoulder buttons) on the left and right side of the gamepad.

Please note that since the Gamepad API is in very early stages, the standard gamepad button layout may differ from browser to browser. The image shown above describes the default button mappings as on **Chrome**.

## Browser support

As of now the Gamepad specification is a work in progress and was published by the [Web Applications Working Group](https://www.w3.org/2019/webapps/) as a working draft. The specification is intended to become a W3C recommendation.

The API itself is [supported by all modern browsers](https://caniuse.com/#search=gamepad).

![](https://github.com/ArunMichaelDsouza/arunmichaeldsouza.com/raw/master/src/server/public/img/blogs/web-platform's-hidden-gems---gamepad-api/8.png)

I would like to point out again that the Gamepad API is in very early stages so it may undergo major changes in terms of implementation and usage. But that shouldn't stop you from experimenting with it. So go ahead give it a try, add gamepad support to your existing games or maybe develop some new ones!

In the next blog post of the series, I would be covering the [Device Orientation API](https://w3c.github.io/deviceorientation/spec-source-orientation.html). So keep an eye out on this space for more info.

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
