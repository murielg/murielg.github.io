---
path: "/blog/npm-build-tool"
slug: "npm-build-tool"
title: "npm as a build tool"
date: 2015-06-01
tags: ['npm', 'javascript', 'package-managers']
---

<blockquote>
<p>For many years, JavaScript had a single widely accepted module format, which is to say there was none. Everything was a global variable, petulantly hanging off the window object. This invited risky propositions, too sweet to ignore, and some of us began monkey-patching built-in objects. Chaos prevailed. We had run amok. The JavaScript of that era was nightmarish, intertwined, lacking order and utterly without remorse.
</p>
 <footer><a href="https://medium.com/@brianleroux" target="_blank">@brianleroux</a></footer>
</blockquote>

Browsers haven’t had a really good way of loading modules (not yet, at least, but let’s forget about ES6 for a minute). So developing large JavaScript applications, especially those that have many dependencies and intricacies, became a very challenging task. In true JavaScript fashion, there isn’t only one way to write modular code. The most well-known formats are AMD and CommonJS. AMD is more widely used in the browser, while CommonJS has mostly been used server-side. While I won’t go into detail about either of these formats, simply put, AMD and CommonJS are two different ways of bundling JavaScript with the goal of making it modular. AMD was eventually made popular by RequireJS, while CommonJS (or at least a version of it) was adopted by the Node community.

CommonJS happens to have really simple syntax, and while it doesn’t naturally work in the browser like AMD does, this problem gets solved when you combine CommonJS with module bundlers such as Browserify or Webpack. But more on module bundlers later.

If you are interested in understanding modules, I recommend you read chapter 10 of <em><a href="http://eloquentjavascript.net/" target="_blank">Eloquent JavaScript: A Modern Introduction to Programming</a></em> by Marijn Haverbeke to be enlightened in this matter.

## Task Runners + Package Managers

Task runners are a set of tools used to make “build” scripts in a clean and organized way. They basically automate some tedious parts of development, such as concatenating files, minification and CSS preprocessing.

Grunt, Gulp, Broccoli and Mimosa (I wish I was kidding about these names) are some of the most popular task runners around. While some of the bells and whistles that task runners offer are great, most of them don’t work without adding extra plugins, which adds an unnecessary layer of abstraction and bloats the project. Surely some use cases exist where overly complicated task runners would be useful, but their use is simply unnecessary for the great majority of projects where build and watch scripts perform quite well.

On the other hand, dependency – or package – managers were created to automate and simplify the process of installing project dependencies, as well as keeping those dependencies up to date. Before package managers were around, developers would individually download and unpackage ZIP files, add them to a project’s folder and include them in index.html using multiple script tags. Bower definitely leads the pack as the most popular package manager. But then there’s NPM.

<img src="https://cldup.com/Rg6WLgqccB.svg" alt="npm-build-tool" width="50%" height="auto">

## One Tool to Rule Them All


NPM (the node package manager) has been widely used by the Node.js community. Since it is entirely written in JavaScript, the question became, “Why can’t we use NPM in front-end development?” It turns out we can, and it actually does a great job of being a client-side package manager!

But wait, there’s more.

NPM is also a simple but powerful task runner!

So we can ditch Gulp and Grunt, and unless we can’t find what we’re looking for in the NPM repository (it currently has 244,250 packages), we can bypass Bower or any other package manager as well.

I will go over the steps of creating your own package.json, as well as writing a handful of useful custom scripts to simplify your front-end development workflow.

## Getting Started

* Install Node. Go to <a href="https://nodejs.org/en/download/" target="_blank">Node.js Downloads</a>, and grab one of the installers by picking the version that best suits your system.

* NPM comes installed with Node by default, but be sure you have the latest version.

~~~~~~~~
sudo npm install npm -g
~~~~~~~~

* Now go to the root of your project and run the following command on your terminal:

~~~
npm init
~~~


* The command will start a utility that will walk you through setting up the initial package.json file. Feel free to change any of the values as you go along. Otherwise, press Enter three times. You will be able to change all of these values at a later time if needed.


You should now have a package.json file that looks similar to this:

~~~
{
  "name": "npm-is-awesome",
  "version": "1.0.0",
  "description": "This is a sample package.json file",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Muriel Gonzalez",
  "license": "ISC"
}
~~~

* “Name” and “version” are the only two required properties. “Name” defines the name of your package/module. If publishing to the NPM ecosystem, this name must be unique.

* “Version” of your package/module in the major.minor.patch format.

* An optional “description” of your module.

* “Main” is the primary entry point to your application.

* The “scripts” property will contain script commands such as npm start run, npm start stop, npm run-script, etc.

* The “license” property will basically tell other people how they are allowed to use your package. A list of licenses can be found at <a href="https://spdx.org/licenses/" target="_blank">SPDX License List</a>.


## Project Structure

For the scripts we’ll write later to make sense, let’s make sure we are on the same page with the project’s file structure:

~~~
    +-- app
    |   +-- css
    |   |   +-- scss
    |   |       +-- style.scss
    |   |   +-- style.css
    |   +-- js
    |   |   +-- index.js
    |   |   +-- bundle.js
    |   +-- index.html
    +-- package.json
~~~

## Building Your Own Scripts

The first thing we need to do is install Browserify. With Browserify, we can write scripts in the CommonJS “require” format, just like you would in a Node.js app. Each file is a module and should explicitly require all of its dependencies. Install Browserify:

~~~
npm install browserify --save-dev
~~~

And while we’re at it, let’s go ahead and install jQuery as well:

~~~
npm install jquery --save
~~~

Notice that we added Browserify using the --save-dev option and jQuery with --save. Dependencies are required to run your app, while devDependencies are only required while you are developing. jQuery and Bootstrap are required dependencies, while Browserify, JSlint and node-sass are devDependencies.

It’s time to start writing some JavaScript! Add the following to your index.js file:

~~~
var $ = require('jquery'); // loading our first module!
global.jQuery = global.$ = $; // exposing jQuery as a global variable
console.log("npm ftw"); // you can add any JavaScript here
~~~

Since Browserify bundles all the required modules so they won’t conflict with each other, jQuery has to be manually exposed to the window object.

Also, for the bundle.js file to be automatically recompiled once any of our source files gets updated, we have to add Watchify:

~~~
npm install watchify --save-dev
~~~

Now writing our first scripts should be a breeze. The “build:js” script simply will tell Browserify to compile the modules on index.js to bundle.js. The “watch:js” script will wait for changes and automatically compile.

~~~
"scripts" : {
  "build:js": "browserify app/js/index.js > app/js/bundle.js",
  "watch:js": "watchify app/js/index.js -do app/js/bundle.js"
}
~~~

Now let’s go over our style scripts. To compile SCSS to CSS, all we need to add is the “node-sass” and “nodemon” modules.

We will be using node-sass and nodemon to handle CSS preprocessing. Node-sass allows us to natively compile SCSS files to CSS, while nodemon monitors changes in source files and restarts the server automatically when a file changes.

~~~
npm install --save-dev node-sass nodemon
~~~

Now we can add a couple more scripts to handle CSS preprocessing:

~~~
"scripts" : {
  "build:js": "browserify app/js/index.js > app/js/bundle.js",
  "watch:js": "watchify app/js/index.js -do app/js/bundle.js" ,
  "build:css" : "node-sass app/css/scss/style.scss app/css/style.css",
  "watch:css": "nodemon -e scss -x \"npm run build:css\""
}
~~~

You are encouraged to adjust some of the options passed to node-sass to configure any compression, add a sourceMap or any other output options.

If you are developing a static site, you may want to also add a “serve” script using http-server.

~~~
"serve": "http-server"
~~~

You can also combine your build scripts into a complex “build-all” script or “watch-all” script like so:

~~~
"build": "npm run build:js & npm run build:css",
"watch": "npm run watch:js & npm run watch:css"
~~~


To finish off, let’s add a “start” script to bind everything together:

~~~
"start" : "npm run serve && npm run watch"
~~~

Your package.json should look very close to this:

~~~
{
  "name": "npm-is-awesome",
  "version": "1.0.0",
  "description": "This is a sample package.json file",
  "main": "index.js",
  "scripts" : {
    "start" : "npm run serve & npm run watch",
    "serve": "http-server",
    "build": "npm run build:js & npm run build:css",
    "watch": "npm run watch:js & npm run watch:css",
    "build:js": "browserify app/js/index.js > app/js/bundle.js",
    "watch:js": "watchify app/js/index.js -do app/js/bundle.js",
    "build:css" : "node-sass app/css/scss/style.scss app/css/style.css",
    "watch:css": "nodemon -e scss -x \"npm run build:css\""
  },
  "author": "Muriel Gonzalez",
  "license": "ISC",
  "devDependencies": {
    "browserify": "^13.0.0",
    "node-sass": "^3.4.2",
    "nodemon": "^1.9.0",
    "watchify": "^3.7.0"
  },
  "dependencies": {
    "jquery": "^2.2.1"
  }
}
~~~


Your index.html should be pretty clean and only have references to the compiled bundle.js and style.css files:

~~~
<html>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>npm as a build tool</title>
    <link rel="stylesheet" href="css/style.css" charset="utf-8">
  </head>
  <body>
    <h1>npm is the best. who needs gulp?</h1>
    <script src="js/bundle.js" charset="utf-8"></script>
  </body>
</html>
~~~


Now just type ``npm run start`` in your command line and simply concentrate on developing awesome web apps!
From this point, it’s up to you to add your own touch to your package.json file. The possibilities feel endless. You can compress images, compile JADE to HTML, add a livereload module and create complex scripts. Have fun!


## References

* <a href="https://docs.npmjs.com/files/package.json" target="_blank">"Specifics of NPM’s package.json Handling"</a>. npmjs.com.
* Verna, Stefano. “<a href="http://www.leanpanda.com/blog/2015/06/28/amd-requirejs-commonjs-browserify/" target="_blank">BazaarJS: Module Loaders E-Package Managers</a>." LeanPanda, June 28, 2015
* <a href="https://github.com/substack/browserify-handbook" target="_blank">"Browserify Handbook"</a>. GitHub.
* Haverbeke, Marijn. <em><a href="http://eloquentjavascript.net/" target="_blank">Eloquent JavaScript: A Modern Introduction to Programming</a></em>.


