# issue-tracker

Full stack web application development with Mongo, Express, React, and Node. <br>
Following examples from Pro MERN Stack by Vasan Subramanian

<b>Chapter 2. Hello World</b><br>
<a href="https://github.com/dalinkim/issue-tracker/tree/02-server-less-hello-world">02-server-less-hello-world</a><br> index.html; ReactDOM library renders the componenet within the contentNode. <br>
Babel library is a JSX transformer. (Browser-based compiler used here)

<a href="https://github.com/dalinkim/issue-tracker/tree/02-express">02-express</a><br>
server.js; Express is a framework, and it gets most of the job done by functions called middleware. A middleware is a function that takes in an HTTP request and response object, plus the next middleware function in the chain. <br>
Express module exports a function that can be used to instantiate an application. <br>
app.use mounts a middleware which takes the parameter, static, to inidicate that it is a dir where static files reside. <br>
Using ES2015 (=== ES6) specification of JavaScript

<a href="https://github.com/dalinkim/issue-tracker/tree/02-separate-script-file">02-separate-script-file</a><br>
static/App.jsx; Separate out the JSX script from index.html.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-transform">02-transform</a><br>
src/App.jsx; static/App.js<br>
babel-cli: command line tool that invokes the transformation<br>
babel-preset-react: plugin that handles React JSX transformation<br>
Transformation is done on a build server or development environment, and the resulting JS is pushed out to the production server. Thus, babel modules are saved as devDependencies.

<a href="https://github.com/dalinkim/issue-tracker/tree/02-automate">02-automate</a><br>
package.json(script);  "scripts": {<br>
    "compile": "babel src --presets react --out-dir static",<br>
    "watch": "babel src --presets react --out-dir static -watch",

<a href="https://github.com/dalinkim/issue-tracker/tree/02-es2015">02-es2015</a><br>
static/index.html(adding babel-polyfill); package.json(script);<br>
Not all browsers uniformly support ES2015 spec. <br>
Transpiling: conversion from one spec of JS to another. (Babel: from ES2015 to ES5) <br>
Polyfills: things that supplement browser capabilities or global functions to use new features of ES2015 (Promise, array find(), and etc.) -> babel-polyfill = emulates a full ES2015 environment.

<b>Chapter 3. React Components</b><br>
<a href="https://github.com/dalinkim/issue-tracker/tree/03-react-classes">03-react-classes</a><br>
src/App.jsx; IssueList extends React.Component <br>
React classe allows creating real components, which can be reused within other components, handle events, and etc. render() method must be present in the class to display the component.<br>
ReactDOM.render(<IssueList />, contentNode) renders an instantiation of the IssueList component.

<a href="https://github.com/dalinkim/issue-tracker/tree/03-composing-components">03-composing-components</a><br> src/App.jsx; component composition - splitting UI into smaller independent pieces; IssueFilter, IssueTable, IssueAdd

<a href="https://github.com/dalinkim/issue-tracker/tree/03-passing-data-props">03-passing-data-props</a><br>
src/App.jsx; Passing data from a parent component to a child component using properties.<br>
Any data passed in from the parent can be accessed in the child component through this.props.<br>
child(IssueRow): {this.props.issue_title}; parent(IssueTable): IssueRow issue_title="title"<br>

<a href="https://github.com/dalinkim/issue-tracker/tree/03-passing-data-children">03-passing-data-children</a><br> src/App.jsx; Using this.props.children; can nest other componenets at the time the component is instantiated.

<a href="https://github.com/dalinkim/issue-tracker/tree/03-dynamic-composition">03-dynamic-composition</a><br>
src/App.jsx; IssueList passing the 'issue' array as a property to IssueTable. IssueTable issues={issues}; const issue = this.props.issue; <br> static/index.html; moved inline styles from App.jsx to index.html

<b>Chapter 4. React State</b><br>
<a href="https://github.com/dalinkim/issue-tracker/tree/04-setting-state">04-setting-state</a><br>
src/App.jsx; To make components that respond to user input and other events, React uses a data structure, state, in the component. It is only the change of state that can change the rendered view. React treats the component as a simple state machine.<br> setState(), initialization done in the constructor. <br>
Declarative programming paradigm. Mutate the model state, and the view rerenders. But you should not modify the state directly.<br>
setTimeout(this.createTestIssue.bind(this), 2000); bind(this) required because we want the context, or the this variable when the function is called, to be this component's instance.

<a href="https://github.com/dalinkim/issue-tracker/tree/04-async-state-initialization">04-async-state-initialization</a><br>
src/App.jsx; Use of first Lifecycle method hook, componentDidMount() before this.loadData().

<a href="https://github.com/dalinkim/issue-tracker/tree/04-event-handling">04-event-handling</a><br>
src/App.jsx; createTestIssue method takes no parameters and appends the sample issue to the list of issues in the state. <br> Also, multiple binds are removed by replacing this.createTestIssue with a permanently bound version in the constructor.

<a href="https://github.com/dalinkim/issue-tracker/tree/04-communicate-child-to-parent">04-communicate-child-to-parent</a><br>
src/App.jsx; Button and handler moved to IssueAdd component<br>
Form with owner and title fields added to IssueAdd component<br>
Child does not have access to the parent's method. The way to communicate from the child to a parent is by passing callbacks from the parent to the child, which it can call to achieve specific tasks. i.e. pass createIssue as a callback property from IssueTable to IssueAdd.<br>
From the child, you just call the passed in function in your handler to create a new issue.<br>
Removed createTestIssue() and all the code used for creating a test issue.

<a href="https://github.com/dalinkim/issue-tracker/tree/04-stateless-components">04-stateless-components</a><br>
src/App.jsx; IssueRow and IssueTable re-written as functions rather than classes<br>
Functions that take in props and just renders based on it.<br>
Initialized a variable called issueRows, which means we need a full-fledged function with a return value.
<br>
State vs. Props<br>
props are immutable where as state are not. Typically, state variables are passed down to child components as props. If any event in the child effects the parent's state, the child calls a method defined in the parent. Access to this method should have been explicitly given by passing it as a callback via props. state values are computed typically inside the render() method.<br>
Parents communicate to children via props; when state changes, the props automatically change.<br>
Children communicate to parents via callbacks.<br>
In a well-designed application, most components are stateless functions of their properties<br>

<b>Chapter 5. Express REST APIs</b><br>
<b>REST (representational state transfer)</b>
REST is an architectural pattern for APIs.<br>
APIs are resource based. Resource are accessed based on URI, aka endpoint. Typically use two URIs per resource: one for collection (/customers) and one for object (/customers/123). Resources can also form a hierarchy. (/customers/123/orders, /customers/123/orders/43)<br>
To access and manipulate the resources, you use HTTP methods. (GET, POST, PUT, PATCH, DELETE) Understand the safety (GET, HEAD, OPTIONS, etc.) and idempotency (PUT, DELETE, etc.) of the methods.<br>
<b>Express (web application framework)</b>
Express relies on other modules (middleware) to provide the functionality that most applications need.<br>
Routing: takes a client request, matches it against any routes that are present, and executes the handler function that is associated with that route. Route specification consists of an HTTP method, a path specification that matches the request URI, and the route handler.<br>

<a href="https://github.com/dalinkim/issue-tracker/tree/05-list-api">05-list-api</a><br>
server.js; List API lists all issues. Not integrated with front-end code yet<br>
Automatic Server Restart using nodemon
app.get('/api/issues', (req, res) => { ... res.json(...) ... }

<a href="https://github.com/dalinkim/issue-tracker/tree/05-create-api">05-create-api</a><br>
server.js; Create API supports adding a new issue. <br>POST method with request body containing the new issue object to be created.<br>
Express does not have an in-built parser that can parse request bodies to convert them into objects.
Thus, body-parser package is used. The body-parser iddleware places the result of parsing in the request's body property.

<a href="https://github.com/dalinkim/issue-tracker/tree/05-using-list-api">05-using-list-api</a><br>
src/App.jsx; Use List API in the application front end and replace the in-memory list of issues.<br>
Browsers support asynchronous API calls (~Ajax calls) natively via the Fetch API.<br>
fetch() takes in the path of the URL to be fetched and returns a promise with the response as the value. The response is then parsed with json() method of the response itself, and it also returns a promise with the value as the parsed data. The parsed data will reflect what we sent from the server.

<a href="https://github.com/dalinkim/issue-tracker/tree/05-using-create-api">05-using-create-api</a><br>
src/App.jsx; Use Create API to modify the createIssue() method. Instead of directly appending new item to the list of issues, it is first sent to the server, and the updated issue returned by the server is used.<br>fetch() API for POST method takes an options object in the second parameter, which includes method, Content Type header, and the body in JSON representation. <br>Then the updated issue is returned by the server in JSON format. As for the setting the new state, a new list of issues is created by making a copy of the existing list from the current state (this.state)

<a href="https://github.com/dalinkim/issue-tracker/tree/05-error-handling">05-error-handling</a><br>
server.js; As for server-side application-level validation, missing required fields and incorrect list values will be handled by simply setting the status using res.status() and sending the error message as the response. In the app.post's handler, validation function is called and in case of error, an object with an appropriate message is sent back.<br>
/src/App.jsx; As for client-side error handling, createIssue() method is modified to detect a non-success HTTP status code. Fetch API does not throw an error for failure HTTP status codes so cannot rely on catch section. The response's property, response.ok, must be checked. If not okay, error.

<b>Chapter 6. Using MongoDB</b><br>
MongoDB is a document database. (Record is a document or an object) A document is a data structure composed of field and value pairs. Primary key is mandated in MongoDB with the reserved field name, _id.
MongoDB query language is made up of methods to achieve various operations.

<a href="https://github.com/dalinkim/issue-tracker/tree/06-schema-initialization">06-schema-initialization</a><br>
scripts/init.mongo.js; create a mongo shell script with initialization statements, setting up the db variable, removing all existing issues, if any, inserting a few samples records, and creating indexes.

<a href="https://github.com/dalinkim/issue-tracker/tree/06-mongodb-node.js-driver">06-mongodb-node.js-driver</a><br>
trymongo.js; Node.js driver(npm mongodb) allows connecting and interacting with MongoDB server.<br>
callbacks paradigm, promises paradigm, generator paradigm, async module

<a href="https://github.com/dalinkim/issue-tracker/tree/06-read-from-mongodb">06-read-from-mongodb</a><br>
server.js; modify List API to read from the database instead of the in-memory list of issues on the server.
setting up MongoDB connection (MongoClient.connect(...).then(...))
updating app.get(...) to read from MongoDB<br>
src/App.jsx; updating id to _id, even List API can return a non-successful HTTP Status code so it is also handled in the front end, loadData() method.

<a href="https://github.com/dalinkim/issue-tracker/tree/06-write-to-mongodb">06-write-to-mongodb</a><br>
server.js; modify Create API to wrote to MongoDB, clean up validations, and remove in-memory array

<b>Chapter 7. Modularization and Webpack</b><br>
<a href="https://github.com/dalinkim/issue-tracker/tree/07-server-side-modules">07-server-side-modules</a><br>
server/issue.js; separating Issue object into its own file and exporting using module.exports

<a href="https://github.com/dalinkim/issue-tracker/tree/07-using-webpack-manually">07-using-webpack-manually</a><br>
/src; Tools such as webpack and browserify provide alternatives to define dependencies as you would in a Node.js application using require or equivalent statements. They automatically figure out not just your own dependent modules, but also third-party libraries. Webpack transforms and watches for changes to files.
<br>Splitting IssueAdd, using export default (single class and the result of import is the class)

<a href="https://github.com/dalinkim/issue-tracker/tree/07-transform-and-bundle">07-transform-and-bundle</a><br>
Using webpack to automatically transform JSX files using babel-loader and bundling them.<br>
webpack.config.js configuration file module is used by webpack to get its parameters.<br>
Classes are separated creating two-level hierarchy of imports: App.jsx imports IssueList.jsx which imports IssueAdd.jsx and IssueFilter.jsx

<a href="https://github.com/dalinkim/issue-tracker/tree/07-libraries-bundle">07-libraries-bundle</a><br>
For the client-side code, libraries had been included as scripts from a CDN (Content Delivery Network).<br>
webpack is not used to create a bundle that includes these libraries as it can deal with client-side libraries installed via npm.<br>
Browsers can cache scripts when they are not changed so separate bundle configurations (one for application code and another for all the libraries) using webpack built-in plugin, CommonsChunkPlugin.<br>
304 response for vendor bundle means that it is not fetching the bundle if it is already there in the browser's cache.

<a href="https://github.com/dalinkim/issue-tracker/tree/07-hot-module-replacement">07-hot-module-replacement</a><br>

<a href="https://github.com/dalinkim/issue-tracker/tree/07-hmr-using-middleware">07-hmr-using-middleware</a><br>

<a href="https://github.com/dalinkim/issue-tracker/tree/07-debugging">07-debugging</a><br>

<a href="https://github.com/dalinkim/issue-tracker/tree/07-server-side-es2015">07-server-side-es2015</a><br>

<a href="https://github.com/dalinkim/issue-tracker/tree/07-eslint">07-eslint</a><br>