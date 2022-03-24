---
title: "Web platform's hidden gems - Battery Status API"
url: "web-platform's-hidden-gems---battery-status-api"
date: 'Thu Jan 28 2021'
metaDescription: "A few months back I started the Web platform's hidden gems blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web. Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer! In the previous blog post, I explained the Device Orientation API, using which developers can develop web applications with device orientation detection capabilities. This can be really useful for a variety of use cases like gaming - for controlling a character or an object and even for gesture recognition in web applications for enhanced accessibility. Feel free to read through it and try it out if you'd like.This is the fourth blog post of the series and in this post, I'll be talking about the Battery Status API."
metaKeywords: 'battery, power, battery API, web platform, power management, resource, energy, web development'
metaImage: "https://arunmichaeldsouza.com/img/blogs/web-platform's-hidden-gems---battery-status-api/1.png"
---

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/1.png)

Image source - icons8.com

A few months back I started the [**Web platform's hidden gems**](<https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems-(series)>) blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web.

Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer!

In the previous blog post, I explained the [Device Orientation API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---device-orientation-api), using which developers can develop web applications with device orientation detection capabilities. This can be really useful for a variety of use cases like gaming - for controlling a character or an object and even for gesture recognition in web applications for enhanced accessibility. Feel free to read through it and try it out if you'd like.🙂

This is the third blog post of the series and in this post, I'll be talking about the [Battery Status API](https://www.w3.org/TR/battery-status/).

> Update: The Battery Status API has been deprecated and is no longer recommended for use. Some  browsers might  still support it, but the standard itself is in the process of  being dropped.

## Fetching the battery status

> The Battery Status API specification defines a means for web developers to programmatically determine the battery status of the hosting device.

This means that using this API, developers would be able to fetch information about the system's battery charge levels and use it in web applications to make adjustments to resource usage.

The Battery Status API exposes the **getBattery()** method on the navigator object that returns a promise which, when resolved, returns the information about the battery's state.

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/2.png)

Logging out battery status information

The returned data shows whether the system is being charged or not, what is the charge level or the percentage of the battery left and also returns some useful event handlers that can be used to detect certain changes in the battery usage.

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/3.png)

Battery status information

## Detecting change in charging level

The **levelchange** event type can be used to detect any changes in the charging level. This event is fired whenever the charging level either increases (while charging) or decreases (while discharging).

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/4.png)

Logging out battery level change information

The returned data shows the charging level which is a value between 0 and 1, multiply that by 100 and you have the battery percentage.

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/5.png)

Battery level change information

## Other event types

**chargingchange** \- This event is fired whenever a change in charging state takes place, that is when the charging unit is connected or disconnected.

**chargingtimechange** - This event is fired whenever the battery charging time gets updated. The **chargingTime** attribute represents the time remaining in seconds until the system's battery is fully charged.

**dischargingtimechange** - This event is fired whenever the battery discharging time gets updated. The **dischargingTime** attribute represents the time remaining in seconds until the system's battery is completely discharged and the system is about to be suspended.

## Browser support

As mentioned above, the standard itself is in the process of being dropped due to privacy concerns. But it's still worth checking out what potentially would've been a nice addition to the web platform.

![](/img/blogs/web-platform's-hidden-gems---battery-status-api/6.png)

Battery status API browser support

You might be interested in the previous blog post about the [Device Orientation API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---device-orientation-api), using which developers can develop web applications with device orientation detection capabilities. Feel free to read through it and try it out as well if you'd like.🙂

In the next blog post of the series, I would be covering the [Shape Detection API](https://wicg.github.io/shape-detection-api/). So keep an eye out on this space for more info.

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
