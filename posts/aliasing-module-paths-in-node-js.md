---
title: 'Aliasing module paths in Node JS'
url: 'aliasing-module-paths-in-node-js'
date: 'Fri Jan 04 2019'
---

![](/img/blogs/aliasing-module-paths-in-node-js/1.png)

## The "Relative path hell" Problem

Typing out long and error-prone paths to your Node JS modules can be a daunting task!

Even with code-completion features like [IntelliSense](https://en.wikipedia.org/wiki/Intelligent_code_completion) in place (which is supported by almost every IDE or text editor), this can become more challenging as your codebase grows.

Just imagine changing the directory structure of your project and you're forced to change all occurrences of the modules currently being referenced multiple times throughout your project. It's a maintenance nightmare!

Moreover, it looks damn ugly!

Code should be easy to read and understand. And with the current module systems in Node JS or JavaScript in general, this can turn out to be a problem since these systems don't have native support for meaningful referencing.

> An alias to a module path clearly indicates the location and purpose of the module being used. Dots and slashes hardly tell anything!

![](/img/blogs/aliasing-module-paths-in-node-js/2.png)

Relative path hell

## The Solution

There might be a possible solution to this "relative path hell" problem -

**Symlinks**

> A Symlink or a [Symbolic Link](https://en.wikipedia.org/wiki/Symbolic_link) is simply a shortcut or a reference to another file. It is a file that points to another file.

Basically, you can create symlinks to your modules and have your Node JS app refer to these modules using the created symlinks.

Symlinks can be created using the **[ln](https://www.computerhope.com/unix/uln.htm)** command available on Linux/UNIX/Mac. If you're not already on Windows 10 then you're probably not leveraging the linux bash shell that comes bundled with it ([more info](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)), in that case, you can use the standard Windows [**mlink**](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) command.

But wait a minute, you don't actually have to manually create all these symlinks by yourselves. Instead, you can write a simple Node JS script which can automate the symlink creation process for you. The Node JS [file system](https://nodejs.org/api/fs.html) module exposes the **[fs.symlink](https://nodejs.org/api/fs.html#fs_fs_symlink_target_path_type_callback)** method which can be used for creating symlinks for directories or files.

## Good News!

There's an existing NPM package which can do this job for you called [**link-module-alias**](https://github.com/Rush/link-module-alias).

Simply add the required module aliases into your project's **package.json** file and add a **postinstall** script, which will automatically initialise the symlink creation process for you.

![](/img/blogs/aliasing-module-paths-in-node-js/3.png)

Sample configuration for link-module-alias in package.json

After your configuration is complete, simply run -

**npm install** \- Installs your project's dependencies and automatically executes the postinstall script.

or

**npm run postinstall** - Only executes the postinstall script.

Once the postinstall script executes, it makes a call to link-module-alias which creates the required symlinks for your project. Your Node JS app will then be able to resolve all references to the defined aliases.

![](/img/blogs/aliasing-module-paths-in-node-js/4.png)

Symlinks created by link-module-alias

Now whenever you are requiring your modules, you can simply do this -

![](/img/blogs/aliasing-module-paths-in-node-js/5.png)

No more relative path hell

No matter where you are in your project tree, all your aliased modules will resolve successfully.

## The icing on the cake

If you happen to use [VS Code](https://code.visualstudio.com/) then all of your aliased modules and directories will have their files appear in the VS Code autocompletion drop-down, which makes it super handy to use your aliased modules!

![](/img/blogs/aliasing-module-paths-in-node-js/6.png)

Module alias autocompletion in VS Code

Another plus point to be mentioned here is that this particular approach doesn't need any runtime hooks in your app's entry point, unlike other approaches to solve this problem which rely on runtime hooks. Runtime hooks add a level of unnecessary computation and complexity to your app. If by any chance a runtime hook fails, it might crash your entire app.

## Update (2021): Subpath Imports

Support for [subpath imports](https://nodejs.org/api/packages.html#subpath-imports) was added in Node JS  v14.6.0, v12.19.0 which helps in the creation of import maps that only apply to import specifiers from within the package itself. Entries in the imports field must always start with **\#** to ensure they are disambiguated from package specifiers.

![](/img/blogs/aliasing-module-paths-in-node-js/7.png)

Node JS subpath imports

## Other solutions

1.  **module-alias  
    **If you have no issues with require hooks then you can consider this package - [module-alias](https://github.com/ilearnio/module-alias). There are a few gotchas though that you'll need to keep in mind while using this package. For example, this package **modifies the default require behavior!** And should be used with caution.
2.  **Yarn Workspaces**  
    [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), in particular, cater to JavaScript projects which have multiple internal packages (also called workspaces) as dependencies. Each workspace has its own dependencies and can be linked to the global workspace for easy access.
3.  **Webpack Resolve**  
    If you're bundling your modules with webpack, then you can use [webpack's module resolution options](https://webpack.js.org/configuration/resolve/) to set aliases for your modules. This obviously makes sense on the client side where you are transpiling and bundling your JavaScript code with webpack.
4.  **babel-plugin-module-resolver**  
    The [babel module resolver plugin](https://github.com/tleunen/babel-plugin-module-resolver) can be used with the babel transpilation pipeline to resolve modules with custom aliases for directories or specific files.

That pretty much sums it up! If you have any questions or suggestions, don't forget to leave a comment down below. Also, feel free to say hi 👋 to me on [Twitter](https://twitter.com/amdsouza92) and [Github](https://github.com/ArunMichaelDsouza).

Cheers!
