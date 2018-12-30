# issue-tracker

<a href="https://github.com/dalinkim/issue-tracker/tree/02-automate">02-automate</a><br>
  "scripts": {
    "compile": "babel src --presets react --out-dir static",
    "watch": "babel src --presets react --out-dir static -watch",

<a href="https://github.com/dalinkim/issue-tracker/tree/02-transform">02-transform</a><br>
babel-cli: command line tool that invokes the transformation<br>
babel-preset-react: plugin that handles React JSX transformation<br>
App.jsx in src dirc; Babel transformed it into App.js and stored in static dir.<br>
Transformation is done on a build server or development environment, and the resulting JS is pushed out to the production server. Thus, babel modules are saved as devDependencies.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-separate-script-file">02-separate-script-file</a><br>
Separate out the JSX script from index.html.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-express">02-express</a><br>
Express is a framework, and it gets most of the job done by functions called middleware. A middleware is a function that takes in an HTTP request and response object, plus the next middleware function in the chain. <br>
Express module exports a function that can be used to instantiate an application. <br>
app.use mounts a middleware which takes the parameter, static, to inidicate that it is a dir where static files reside.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-server-less-hello-world">02-server-less-hello-world</a><br>
ReactDOM library renders the componenet within the contentNode. <br>
Babel library is a JSX transformer. (Browser-based compiler used here)

Full stack web application development with Mongo, Express, React, and Node. <br>
Following examples from Pro MERN Stack by Vasan Subramanian