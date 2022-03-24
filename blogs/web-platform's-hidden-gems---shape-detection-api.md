---
title: "Web platform's hidden gems - Shape Detection API"
url: "web-platform's-hidden-gems---shape-detection-api"
date: 'Mon Feb 04 2021'
metaDescription: "A few months back I started the Web platform's hidden gems blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web. Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer! In the previous blog post, I explained the Battery Status API, using which developers can fetch information about the system's battery charge levels and use it in web applications to make adjustments to resource usage. Feel free to read through it and try it out if you'd like. This is the fourth blog post of the series and in this post, I'll be talking about the Shape Detection API."
metaKeywords: 'Face detection javascript, text detection javascript, barcode detection javascript, QR code detection javascript, shape detection API, facial tagging, facial recognition javascript, artificial intelligence, machine learning, opencv, web platform, web development'
metaImage: "https://arunmichaeldsouza.com/img/blogs/web-platform's-hidden-gems---shape-detection-api/1.png"
---

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/1.png)

A few months back I started the [**Web platform's hidden gems**](<https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems-(series)>) blog series. The idea behind the series is to cover the native API enhancements to the web platform and shed some light on how these APIs can be used to create some really interesting experiences on the web.

Even though these APIs are in very early stages at the moment, they seem to be really promising and tend to provide an idea on how web development in the coming years would look like. Having said that, I feel that it's important for developers to know about these specifications and understand the possibilities that the native web has to offer!

In the previous blog post, I explained the [Battery Status API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---battery-status-api), using which developers can fetch information about the system's battery charge levels and use it in web applications to make adjustments to resource usage. Feel free to read through it and try it out if you'd like.🙂

This is the fourth blog post of the series and in this post, I'll be talking about the [Shape Detection API](https://wicg.github.io/shape-detection-api/).

Just a disclaimer though, this API is in very early stages and may undergo major changes in terms of implementation and usage.

## Shape detection on the web

> The shape detection API enables developers to detect shapes (faces, text, bar codes etc.) from still images or live image feeds.

Detecting shapes or patterns from images can be a computationally expensive task and may require different kinds of libraries or third party APIs. But the Shape Detection API makes it a readily available feature in the browser that web developers can use. Using the Shape Detection API web developers can detect faces, text, bar codes and even QR codes which can be used for user identification, URL redirection, facial tagging etc.

The Shape Detection API uses the underlying hardware for detection capabilities which provides accelerated operation.

## Face detection API

The Face Detection API is a subset of the Shape Detection API which enables the detection of human faces in images. The **window.FaceDetector** interface can be used to create a new instance of the face detector. It provides a **detect()** method that receives the image as an argument and returns a promise, which when resolved, returns an array of detected faces. The image provided to the method may come from any type of image buffer source such as an image, video or canvas tag.

The **window.FaceDetector** interface supports the following options -

- **maxDetectedFaces** \- Hints the user agent to try and limit the number of detected faces in the scene.
- **fastMode** - Hints the user agent to try and prioritize speed over accuracy.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/2.png)

Each detected face consists of a **bounding box** that defines the exact location and extent of the face in the image, as well as **landmark locations** for facial features such as eyes, mouth and nose. The landmark locations contain an array of points defining the vertices of a simple polygon surrounding the feature.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/3.png)

As of now, the Face Detection API is available on Chrome and Opera behind the **Experimental Web Platform features** flag. You can enable it by going into **chrome://flags/#enable-experimental-web-platform-features** and selecting **Enabled**.

I prepared a demo for the Face Detection API running on Chrome 88. Please feel free to check out the code below -

[https://gist.github.com/ArunMichaelDsouza/ffe8b8eedf5909732a22907283f86430](https://gist.github.com/ArunMichaelDsouza/ffe8b8eedf5909732a22907283f86430)

## Barcode Detection API

The Barcode Detection API is another subset of the Shape Detection API which enables the detection of linear or 2D barcodes in images. The **window.BarcodeDetector** interface can be used to create a new instance of the barcode detector. It also provides a **detect()** method that receives the image as an argument and returns a promise, which when resolved, returns an array of the detected barcodes. The image provided to the method may come from any type of image buffer source such as an image, video or canvas tag.

The **window.BarcodeDetector** interface supports an optional bar code formats list setting. Using this list, developers can explicitly specify the bar code formats that are required to be supported by the application.

> Note: Limiting the search to a particular subset of supported formats is likely to provide better performance. To see a complete list of  supported formats please see [this link.](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)

In order to see which formats are actually supported by the Barcode Detection API in your browser, you can use the **window.BarcodeDetector.getSupportedFormats()** method. This returns a promise which resolves to an array of supported formats.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/4.png)

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/5.png)

Each detected barcode consists of a **bounding box** that defines the exact location and extent of the barcode feature in the image. It also contains the X, Y coordinates of the **corner points** of the feature, the **format** of the barcode and the **raw value**.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/6.png)

Bounding box and other data of the detected barcode

As of now, the Barcode Detection API is available by default starting in Chrome 83, Edge 83 and Opera 72.

I prepared a demo for the Barcode Detection API running on Chrome 88. Please feel free to check out the code below -

[https://gist.github.com/ArunMichaelDsouza/b29459609fdd4247a096e9e052ad99dc](https://gist.github.com/ArunMichaelDsouza/b29459609fdd4247a096e9e052ad99dc)

## Text Detection API

The Text Detection API is another subset of the Shape Detection API which enables the detection of text in images. The **window.TextDetector** interface can be used to create a new instance of the text detector. It also provides a **detect()** method that receives the image as an argument and returns a promise, which when resolved, returns the detected text as an array. The image provided to the method may come from any type of image buffer source such as an image, video or canvas tag.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/7.png)

Using the Text Detection API

The **bounding box** information and the X, Y coordinates of the **corner points** of the detected text are returned by the resolved promise. On some platforms, the recognized characters or the raw text value is also returned.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/8.png)

Bounding box and corner points of the detected text

As of now, the Text Detection API is available on Chrome and Opera behind the **Experimental Web Platform features** flag. You can enable it by going into **chrome://flags/#enable-experimental-web-platform-features** and selecting **Enabled**.

I prepared a demo for the Text Detection API running on Chrome 88. Please feel free to check out the code below -

[https://gist.github.com/ArunMichaelDsouza/fc95a5fb574cb2295d2d092aa0c03fbf](https://gist.github.com/ArunMichaelDsouza/fc95a5fb574cb2295d2d092aa0c03fbf)

> Note: It is advisable to reuse the same detector instance for several detections as it may allocate and hold significant system resources.

All detectors work asynchronously and they do not block the main thread. They are also available to be used by web workers.

## Browser support

As mentioned above, both the Face detection API and the Text Detection API are available on Chrome and Opera behind the **Experimental Web Platform features** flag. You can enable it by going into **chrome://flags/#enable-experimental-web-platform-features** and selecting **Enabled**.

Whereas the Barcode Detection API is available by default starting in Chrome 83, Edge 83 and Opera 72.

![](/img/blogs/web-platform's-hidden-gems---shape-detection-api/9.png)

Barcode Detection API browser support

I would like to point out again that this specification is in very early stages so it may undergo major changes in terms of implementation and usage. But that shouldn't stop you from experimenting with it. So go ahead and give it a try!

You might be interested in the previous blog post about the [Battery Status API](https://arunmichaeldsouza.com/blog/web-platform's-hidden-gems---battery-status-api), using which developers can fetch information about the system's battery charge levels and use it in web applications to make adjustments to resource usage. Feel free to read through it and try it out as well if you'd like.🙂

In the next blog post of the series, I would be covering the [File System Access API](https://wicg.github.io/file-system-access/). So keep an eye out on this space for more info.

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
