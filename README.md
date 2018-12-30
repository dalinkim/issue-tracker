# issue-tracker

<a href="https://github.com/dalinkim/issue-tracker/tree/03-composing-components">03-composing-components</a><br>
src/App.jsx; component composition - splitting UI into smaller independent pieces.<br>

<a href="https://github.com/dalinkim/issue-tracker/tree/03-react-classes">03-react-classes</a><br>
src/App.jsx; IssueList extends React.Component <br>
React classe allows creating real components, which can be reused within other components, handle events, and etc. render() method must be present in the class to display the component.<br>
ReactDOM.render(<IssueList />, contentNode) renders an instantiation of the IssueList component.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-es2015">02-es2015</a><br>
static/index.html(adding babel-polyfill); package.json(script);<br>
Not all browsers uniformly support ES2015 spec. <br>
Transpiling: conversion from one spec of JS to another. (Babel: from ES2015 to ES5) <br>
Polyfills: things that supplement browser capabilities or global functions to use new features of ES2015 (Promise, array find(), and etc.) -> babel-polyfill = emulates a full ES2015 environment.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-automate">02-automate</a><br>
package.json(script);  "scripts": {<br>
    "compile": "babel src --presets react --out-dir static",<br>
    "watch": "babel src --presets react --out-dir static -watch",

<a href="https://github.com/dalinkim/issue-tracker/tree/02-transform">02-transform</a><br>
src/App.jsx; static/App.js<br>
babel-cli: command line tool that invokes the transformation<br>
babel-preset-react: plugin that handles React JSX transformation<br>
Transformation is done on a build server or development environment, and the resulting JS is pushed out to the production server. Thus, babel modules are saved as devDependencies.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-separate-script-file">02-separate-script-file</a><br>
static/App.jsx; Separate out the JSX script from index.html.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-express">02-express</a><br>
server.js; Express is a framework, and it gets most of the job done by functions called middleware. A middleware is a function that takes in an HTTP request and response object, plus the next middleware function in the chain. <br>
Express module exports a function that can be used to instantiate an application. <br>
app.use mounts a middleware which takes the parameter, static, to inidicate that it is a dir where static files reside. <br>
Using ES2015 (=== ES6) specification of JavaScript

<a href="https://github.com/dalinkim/issue-tracker/tree/02-server-less-hello-world">02-server-less-hello-world</a><br>
index.html; ReactDOM library renders the componenet within the contentNode. <br>
Babel library is a JSX transformer. (Browser-based compiler used here)

Full stack web application development with Mongo, Express, React, and Node. <br>
Following examples from Pro MERN Stack by Vasan Subramanian