---
title: 'Getting started with React 16'
url: 'getting-started-with-react-16'
date: 'Mon Nov 13 2017'
metaDescription: 'It’s been some time since Facebook released React 16.  The new release has a lot of new features to facilitate the designing of robust components and enhancements to speed up the rendering pipeline.'
metaKeywords: 'javascript, react16, react, es6, reactjs'
metaImage: 'http://arunmichaeldsouza.com/img/blogs/getting-started-with-react-16/1.png'
---

![](/img/blogs/getting-started-with-react-16/1.png)

It's been some time since Facebook released [React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html).

The new release has a lot of new features to facilitate the designing of robust components and enhancements to speed up the rendering pipeline.

React 16 is supposed to be completely backwards compatible with React 15. As stated in the official React 16 [blog post](https://reactjs.org/blog/2017/09/26/react-v16.0.html#upgrading) -

> If your app runs in 15.6 without any warnings, it should work in 16.

React 16 also ships with the new [MIT license](https://opensource.org/licenses/MIT). If you haven't followed the news as to why the React team has switched to the new license, be sure to read [this article](https://medium.freecodecamp.org/facebook-just-changed-the-license-on-react-heres-a-2-minute-explanation-why-5878478913b2).

Talking about it's stability, the React team has been serving the production build of React 16 to [Facebook](https://www.facebook.com/) and [Messenger](https://www.messenger.com/). Despite the new feature additions, it is 32% lesser in size as compared to the previous release.

Now without wasting any more time, let's talk about the features of React 16.

## Fragments and Strings

React 16 gives you the ability to return elements in an **array** from the render method.

![](/img/blogs/getting-started-with-react-16/2.png)

That means, for the most part, you wont be required to perform mapping of array elements inside your render methods. Simply return the array and it'll render just fine.

The only downside here is that it still expects a **key** value to be added to every array element in order to work.

I feel it's not that big of an issue, plus the React team has assured that the future release of React will most probably have this requirement removed.

Even **strings** and **numbers** can be returned from the render method now.

![](/img/blogs/getting-started-with-react-16/3.png)

Previous versions of React used to throw this error -

![](/img/blogs/getting-started-with-react-16/4.png)

Strings and numbers cannot be returned from the render method in React 15

As you can see, only valid React elements were allowed to be returned from the render method.

With React 16, the render method can return -

\- React elements  
\- Strings and numbers  
\- Portals  
\- Null  
\- Boolean expressions

**Strings** and **numbers** are rendered as regular **text nodes** in the DOM, and as you would've guessed, **null** renders nothing.

**UPDATE** : React 16.2 was released on November 28th, which has improved support for returning multiple children (aka Fragment) from a component's render method. More info on the same can be found on the official [blog post](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html).

## Error Boundaries

Error Boundaries help you to catch run time errors in your app and allow you to render a fallback UI.

When an error occurred, previous versions of React used to leave your app in a broken state. In order to tackle this, React 16 provides a brand new lifecycle hook called **componentDidCatch**, which helps you to catch run time errors.

Error Boundaries capture errors **inside their subtree**, which means if an error occurs in any of the child components within that Error Boundary, then the componentDidCatch lifecycle method of that particular Error Boundary will fire.

![](/img/blogs/getting-started-with-react-16/5.png)

componentDidCatch returns two parameters - an **error** object which gives you the stack trace, and an **info** object, which gives the component stack data.

### How Error Boundaries work

![](/img/blogs/getting-started-with-react-16/6.gif)

How Error Boundaries work

Few things to note here -

Errors in **all lifecycle methods** can be caught by an Error Boundary, including the **constructor** method.

An Error Boundary cannot catch an error within itself.

If an Error Boundary fails for some reason, the error will propagate to the closest Error Boundary above it.

Here's an example on how to create and use an Error Boundary -

In the above example, when an error is thrown in the **Child** component (line no 17), the componentDidCatch lifecycle method of the **Parent** component fires (line no 33). Based on that, we change the state and render a fallback UI in it's place (line no 38).

### What happens when an error occurs ?

Once an error occurs, **error stack trace** and **component stack data** are logged to the console, and the component tree is unmounted from the root. This prevents from showing corrupted data to the user.

![](/img/blogs/getting-started-with-react-16/7.png)

Error stack trace returned by an Error Boundary

![](/img/blogs/getting-started-with-react-16/8.png)

Component stack data returned by an Error Boundary

But is there really a need to unmount the whole React component tree ? Well, the React team has debated this decision, and in their experience it is worse to leave corrupted UI in place than to completely remove it. Read more about it [here](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html#new-behavior-for-uncaught-errors).

## Portals

Portals let you render or teleport a child node into a different DOM node hierarchy.

![](/img/blogs/getting-started-with-react-16/9.png)

The first argument passed to a portal is a **child** component, which is any renderable entity (what the render method supports) and a **DOM node**, to which the child is mounted.

Portals can typically be used to render hovercards or modals, where the content is to be shown in a visually different and non-contained fashion, out of it's parent.

### How Portals work

![](/img/blogs/getting-started-with-react-16/10.gif)

How Portals work

The above illustration shows the process of creating a portal in order to render a **Text** component from DOM hierarchy 1, into DOM hierarchy 2 via the **modal** node.

The **Modal** component creates a portal which mounts the Text component to a different DOM hierarchy.

Here's the code for the above example -

### Event Bubbling in Portals

Event Bubbling in Portals works the same way as it does for normal React components regardless of it's position in the DOM tree.

An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree.

In this case, the button in the Modal component has no **onClick** handler, so once a user clicks on that button, the event propagates to it's ancestor in the component tree, and the **onClick** handler of that component fires.

## Custom DOM attributes

With React 16, you can pass custom attributes to your React components.

In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn't recognize, React would just skip it. But React 16 allows them to be added to the component.

![](/img/blogs/getting-started-with-react-16/11.png)

![](/img/blogs/getting-started-with-react-16/12.png)

Custom DOM attributes in React 16

Note that you should still use the canonical React naming for known attributes -

![](/img/blogs/getting-started-with-react-16/13.png)

Canonical naming convention in React

### Attributes whitelist

Previous versions of React used to have an attributes whitelist, which contained a list of attributes that React can recognize and allow them to be added to components.

![](/img/blogs/getting-started-with-react-16/14.png)

Attributes whitelist in React 15

React 16 gets rid of this, so there's no more attribute matching with the whitelist resulting in smaller file sizes.

![](/img/blogs/getting-started-with-react-16/15.png)

![](/img/blogs/getting-started-with-react-16/16.png)

React 16 support for custom attributes

Custom attributes are handy if you need to use a non-standard attribute, or if you need to integrate with a third-party library that relies on such attributes. Just like before, React 16 also lets you use **data-** and **aria-** attributes with your components.

## New core architecture

React 16 has an entirely re-written architecture codenamed **Fiber**.

### Async rendering

The new core algorithm is completely backwards compatible and is based on a **priority scheduling** system. Events are streamed based on priority and are scheduled to be rendered by the browser, and this method does not block the main thread.

Events such as **typing** are considered to be high priority events, where the user needs to get realtime feedback, others such as ajax are considered low priority events.

The scheduling system makes heavy use of the **requestIdleCallback** API.

This method queues a function to be called during a browser's idle periods. This enables developers to perform background and low priority work on the main event loop, without impacting latency-critical events such as animation and input response.

In browsers where this API is not supported, React provides a polyfill.

If you want to know more about how Fiber works, I would definitely recommend you to check out this [talk](https://www.youtube.com/watch?v=ZCuYPiUIONs&index=5&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0) by Lin Clark, or read about the details in this [blog post](https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/) by the React team.

## Improved server-side rendering

The server-side renderer in React 16 has also been re-written. It is said to be **3x faster**.

It provides faster streaming of components down the wire, to the client.

The new packaging strategy (which is facilitated by the [Rollup module bundler](https://rollupjs.org/)) gets rid of **process.env checks**, which are really slow.

React 16 supports streaming of components via the new **[renderToNodeStream](https://reactjs.org/docs/react-dom-server.html#rendertonodestream)** API. Feel free to check out the [documentation of **ReactDOMServer**](https://reactjs.org/docs/react-dom-server.html) for more details.

One of the core React team members, Sasha Aickin, wrote a great [article](https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67) about React 16's SSR improvements.

As stated in the blog post -

> When comparing against React 15 with process.env compiled out, there's about a 2.4x improvement in Node 4, about a 3x performance improvement in Node 6, and a full 3.8x improvement in the new Node 8.4 release. And if you compare against React 15 without compilation, React 16 has a full order of magnitude gain in SSR in the latest version of Node!

![](/img/blogs/getting-started-with-react-16/17.png)

SSR improvements in React 16

## Reduced file size

Despite all the new feature additions, React 16 is actually **smaller** as compared to 15.6.1!

![](/img/blogs/getting-started-with-react-16/18.png)

Reduced file size in React 16

The size difference is partly attributable to a change in packaging. React now uses Rollup to create flat bundles for each of it's different target formats, resulting in both size and runtime performance wins.

## Installation

You can get started with React 16 right away, it's available on NPM and Yarn.

![](/img/blogs/getting-started-with-react-16/19.png)

Detailed installation instructions can be found [here](https://reactjs.org/docs/installation.html). Details on deprecations and breaking changes can be found [here](https://reactjs.org/blog/2017/09/26/react-v16.0.html#upgrading).

I also presented a talk on React 16 sometime back, you can check out the deck [here](https://speakerdeck.com/arunmichaeldsouza/getting-started-with-react-16), which was [retweeted](https://twitter.com/amdsouza92/status/919986205168513024) by Dan Abramov as well.

That's it for now! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
