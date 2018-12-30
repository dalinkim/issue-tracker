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