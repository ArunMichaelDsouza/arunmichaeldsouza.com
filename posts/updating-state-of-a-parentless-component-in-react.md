---
title: 'Updating state of a parentless component in React'
url: 'updating-state-of-a-parentless-component-in-react'
date: 'Thu Dec 28 2017'
---

![](/img/blogs/updating-state-of-a-parentless-component-in-react/1.png)

State is the fundamental way to store and retrieve your React application's data. It's nothing but a JavaScript object, which React allows you to update via the **setState()** method.

Using **setState()** is pretty straightforward, simply call the method and pass in the state variables that need to be updated, which in turn, re-renders the component tree.

![](/img/blogs/updating-state-of-a-parentless-component-in-react/2.png)

Since **setState()** updates the state of a particular React component, it needs to be called within that component's context.

![](/img/blogs/updating-state-of-a-parentless-component-in-react/3.png)

In the example above, **this** provides the context to the **setState()** call, which refers to the **InputBox** component.

> Note : **setState()** is actually asynchronous. More info [here](https://reactjs.org/docs/react-component.html#setstate).

As mentioned earlier, **this** represents the component itself. If you log it out, you'll see that it returns the **state** and **props** tied to the component.

![](/img/blogs/updating-state-of-a-parentless-component-in-react/4.png)

![](/img/blogs/updating-state-of-a-parentless-component-in-react/5.png)

Logging out **this** returns the whole React component

Now this means that updating the state of a React component can be as easy as this -

![](/img/blogs/updating-state-of-a-parentless-component-in-react/6.png)

A suitable method to update the state of a **Parentless** component would be to pass a callback as a prop, to the **Child** component, which once fired, updates the state of the **Parent**.

Pretty handy! But this obviously makes sense when you have a relatively smaller component tree, and you would want to avoid returning callbacks from a deeply nested component, all the way up to the topmost parent.

But what if we want to update the state of the topmost parent, from a deeply nested component ?

Well, we can keep a reference of the topmost parent's component instance, and call **setState()** when we want to trigger the state change.

Let's see how -

> Note : **ReactDOM.render()** returns a reference to the component being mounted.

As you can see, we can simply create a **function** at the global level and call it from our **DeeplyNestedChild** and pass the value for the state variable to be changed in the **Parent** component. Once called, we can set the state of the **Parent** component using its reference returned by **ReactDOM.render()**.

This method can majorly help in cases, where we want to update the state of a **Parent** component in one component tree, from a **Child** component of some other component tree, considering if one of the component trees is getting dynamically generated using, say for example a **[Portal](https://reactjs.org/docs/portals.html)**.

![](/img/blogs/updating-state-of-a-parentless-component-in-react/7.png)

Only want to trigger a re-render? You can do so using **[forceUpdate()](https://reactjs.org/docs/react-component.html#forceupdate)** -

![](/img/blogs/updating-state-of-a-parentless-component-in-react/8.png)

That's it for now! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
