---
title: "Web platform's hidden gems - Device Orientation API"
url: "web-platform's-hidden-gems---device-orientation-api"
date: 'Fri Sep 25 2020'
metaDescription: "A few months back I started the Web platform's hidden gems blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web.   Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer!  This is the third blog post of the series and in this post, I'll be talking about the Device Orientation API."
metaKeywords: 'orientation, gaming, orientation API, gesture recognition, game development, accessibility, device orientation, device motion, accelerometer, gyroscope, compass'
metaImage: "https://arunmichaeldsouza.com/img/blogs/web-platform's-hidden-gems---device-orientation-api/1.png"
---

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/1.png)

A few months back I started the [Web platform's hidden gems](<https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems-(series)>) blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web.

Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer!

In the previous blog post, I explained the [Gamepad API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---gamepad-api), using which developers can connect gamepads and similar input devices to the browser and use them in their gaming applications. Feel free to read through it and try it out if you'd like. 🙂

This is the second blog post of the series and in this post, I'll be talking about the [Device Orientation API](https://w3c.github.io/deviceorientation/spec-source-orientation.html).

Just a disclaimer though, this API is in very early stages and may undergo major changes in terms of implementation and usage.

## Detecting device orientation

> The Device Orientation specification provides several new DOM events for obtaining information about the physical orientation and movement of the hosting device.

The information returned by the events is provided by sources such as gyroscopes, compasses, and accelerometers. Using the data provided by these sources, we can determine information about the orientation as well as the motion of the device.

This can be really useful for a variety of use cases like gaming - for controlling a character or an object and even for gesture recognition in web applications for enhanced accessibility.

> Note : The events are only fired in a **secure browsing context** (https).

The **deviceorientation** event is emitted whenever a significant change in orientation occurs.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/2.png)

## 3-dimensional coordinate system

To use the values returned by the events we need to understand the **3-dimensional coordinate system** used by device orientation -

- The **X-axis** runs from the left side of the device to the right side of the device.
- The **Y-axis** runs from the bottom of the device towards the top of the device.
- The **Z-axis** runs from the screen of the device up to the sky.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/3.png)

Device orientation defines the following rotations along the 3 axes -

- The rotation around the **Z-axis** is called **Alpha**.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/4.png)

- The rotation around the **X-axis** is called **Beta**.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/5.png)

- The rotation around the **Y-axis** is called **Gamma**.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/6.png)

The change in orientation returned by the event is expressed in terms of these values - **Alpha**, **Beta** and **Gamma**.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/7.png)

Using these values we can determine the change in rotation with respect to the 3 axes.

## Simulating device orientation using chrome dev tools

In order to simulate the device orientation event and visualize the change in the values, we can make use of the chrome dev tools in-built device orientation sensor and simulate different types of device orientations such as portrait, landscape, and even custom ones.

To launch the simulator, simply open the dev tools window and press **Command+Shift+P** (Mac) or **Ctrl+Shift+P** (Windows or Linux) to open the command menu. Type "sensors" and select show sensors. From the orientation list select one of the preset or you can select a custom one as well.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/8.gif)

On actual mobile devices, it's rather different. Most mobile browsers don't allow access to sensor data due to security reasons. It can only be made available for use by the web page after the user has granted permission to access the data.

For requesting user permission to access the orientation data, the [Permissions API](https://www.w3.org/TR/permissions/) can be used as follows -

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/9.png)

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/10.gif)

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/11.gif)

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/12.gif)

## Detecting device motion

Similarly, there's the **devicemotion** event that can help us to determine how fast the device is accelerating.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/13.png)

The device motion event uses the same 3-dimensional coordinate system and provides acceleration values with respect to the 3 axes.

The event object returns the following information -

- **accelerationIncludingGravity** and **acceleration** - Acceleration values for the 3 axes (**X**, **Y** and **Z**) with and without the effects of gravity.
- **rotationRate** \- Rotation values for the 3 axes represented as **alpha**, **beta** and **gamma**.
- **interval** - Represents the time interval in milliseconds during which the data is obtained from the device.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/14.png)

For requesting user permission to access the motion data, we can again use the Permissions API as follows -

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/15.png)

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/16.gif)

## Browser support

As of now, the API is a work in progress and is subject to change but the events themselves are supported by all modern browsers.

![](/img/blogs/web-platform's-hidden-gems---device-orientation-api/17.png)

I would like to point out again that this specification is in very early stages so it may undergo major changes in terms of implementation and usage. But that shouldn't stop you from experimenting with it. So go ahead and give it a try!

You might be interested in the previous blog post about the [Gamepad API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---gamepad-api), using which developers can connect gamepads and similar input devices to the browser and use them in their gaming applications. Feel free to read through it and try it out as well if you'd like. 🙂

In the next blog post of the series, I would be covering the [Battery Status API](https://www.w3.org/TR/battery-status/). So keep an eye out on this space for more info.

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
