---
title: 'Easy JSON logging in Node JS using Woodlot'
url: 'easy-json-logging-in-node-js-using-woodlot'
date: 'Thu Apr 04 2019'
metaDescription: "There are a lot of options available when it comes to choosing a tool for data logging in your Node JS application. At times you would find yourself switching back and forth between different tools just to get that perfect logger configuration set up properly for your project.   But of course, due to the instant availability of multiple open source JavaScript packages and tools (thanks to NPM) this doesn't only apply to loggers. It has spread across to almost every facet of JavaScript development now. But for the purpose of this blog post, let's just stick to Node JS data logging.   A common need while developing applications is to have your data logs get aggregated in an output file, instead of just getting logged to the console or the standard output stream (stdout). This makes it easy to resolve bugs faster, gain insights from the data being logged and maybe analyse it at a later stage.  For this very purpose we are required to use third-party data logging modules, and we'll be looking at one such open source module called Woodlot."
metaKeywords: 'woodlot, json logging, nodejs, nodejs logger, data logging, expressjs, restify, middleware logger'
metaImage: 'https://arunmichaeldsouza.com/img/blogs/easy-json-logging-in-node-js-using-woodlot/1.png'
---

![](/img/blogs/easy-json-logging-in-node-js-using-woodlot/1.png)

There are a lot of options available when it comes to choosing a tool for data logging in your Node JS application. At times you would find yourself switching back and forth between different tools just to get that perfect logger configuration set up properly for your project.

But of course, due to the instant availability of multiple open source JavaScript packages and tools (thanks to [NPM](https://www.npmjs.com/)) this doesn't only apply to loggers. It has spread across to almost every facet of JavaScript development now. But for the purpose of this blog post, let's just stick to Node JS data logging.

A common need while developing applications is to have your data logs get aggregated in an output file, instead of just getting logged to the console or the standard output stream (stdout). This makes it easy to resolve bugs faster, gain insights from the data being logged and maybe analyse it at a later stage.

For this very purpose we are required to use third-party data logging modules, and we'll be looking at one such open source module called [Woodlot](http://adpushup.github.io/woodlot/).

## What is Woodlot?

Woodlot is an all-in-one JSON logging module for Node JS which was open sourced by [AdPushup Inc](https://www.adpushup.com/). It supports -

- HTTP middleware logging for [Express JS](https://expressjs.com/), [Restify](http://restify.com/) etc.
- Custom logging with different logging levels.
- Log output in JSON format with request body/query params, headers and cookies.
- Apache [common](http://httpd.apache.org/docs/current/logs.html#common) and [combined](http://httpd.apache.org/docs/current/logs.html#combined) log formats as output.
- Multiple file streams for log aggregation.
- A simple to use events API.
- Node JS version 0.10 and above.

The best part about using Woodlot is that you can use it to integrate middleware logging and custom logging both in your application, instead of installing separate modules.

Woodlot logs JSON output by default which makes it easier to aggregate and understand the logged data.

## Middleware Logging

The Woodlot **middlewareLogger** can be hooked into an existing Express JS middleware chain and can be used to log all HTTP requests.

This middleware logger configuration will generate log output in JSON format.

![](/img/blogs/easy-json-logging-in-node-js-using-woodlot/2.png)

The Woodlot middleware logger supports whitelisting and strict checking for routes and user analytics (platform, country) logging as well. Apart from JSON format support, it also also has support for logging in Apache's access log formats.

Documentation on all of the different options that the middleware logger supports can be found [here](https://github.com/adpushup/woodlot#as-an-expressjs-middleware).

## Custom Logging

The Woodlot **customLogger** can be used to perform custom logging with different logging levels.

This custom logger configuration will generate log output in JSON format.

![](/img/blogs/easy-json-logging-in-node-js-using-woodlot/3.png)

The Woodlot custom logger supports four different logging levels - [info](https://github.com/adpushup/woodlot#info), [debug](https://github.com/adpushup/woodlot#debug), [warn](https://github.com/adpushup/woodlot#warn) and [err](https://github.com/adpushup/woodlot#err). It supports data logging in standard text format as well.

Documentation on all of the different options that the custom logger supports can be found [here](https://github.com/adpushup/woodlot#custom-logging).

## Events

Woodlot emits events at various operations that can be used to track critical data. This events API is what makes Woodlot truly extensible.

These events can be captured and can be sent to a third party service or to a database for aggregation and analysis.

![](/img/blogs/easy-json-logging-in-node-js-using-woodlot/4.png)

There are various middleware logger and custom logger events that Woodlot emits. Documentation of the Woodlot events API can be found [here](https://github.com/adpushup/woodlot#events).

Woodlot is completely free to use and has been open sourced under the [MIT license](https://github.com/adpushup/woodlot#license). For its long term sustenance and growth I recently launched a [Patreon page](https://www.patreon.com/arunmichaeldsouza)!

If you or your company use Woodlot or any of my other projects, or like what I'm doing, please consider backing me so I can continue maintaining and working on these projects and new ones. Your pledge could be as small as $1/month. I'd really appreciate your support!

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
