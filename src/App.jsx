import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

// kind of history to use, hashHistory from react-router
const RoutedApp = () => (
  <Router history={hashHistory} >
    <Route path="/" component={IssueList} />
    <Route path="/issueEdit" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </Router>
);

// RoutedApp used now instead of IssueList component
ReactDOM.render(<RoutedApp />, contentNode);    // Render the component inside the content Node

if (module.hot) {
  module.hot.accept();
}
