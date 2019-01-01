webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(331);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(367);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(514);
	
	var _IssueList = __webpack_require__(577);
	
	var _IssueList2 = _interopRequireDefault(_IssueList);
	
	var _IssueEdit = __webpack_require__(581);
	
	var _IssueEdit2 = _interopRequireDefault(_IssueEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contentNode = document.getElementById('contents');
	var NoMatch = function NoMatch() {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Page Not Found'
	  );
	};
	
	var App = function App(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'header' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Issue Tracker'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'contents' },
	      props.children
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'footer' },
	      'Full source code available at this ',
	      _react2.default.createElement(
	        'a',
	        { href: 'https://github.com/dalinkim/issue-tracker' },
	        'GitHub repository'
	      ),
	      '.'
	    )
	  );
	};
	
	App.propTypes = {
	  children: _react2.default.PropTypes.object.isRequired
	};
	
	// kind of history to use, browserHistory from react-router
	// wrapping IssueList with withRouter
	// IssueList can use this.props.router to access the router object.
	var RoutedApp = function RoutedApp() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: 'issues' }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2.default.createElement(_reactRouter.Route, { path: '/issues', component: (0, _reactRouter.withRouter)(_IssueList2.default) }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/issues/:id', component: _IssueEdit2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
	    )
	  );
	};
	
	// RoutedApp used now instead of IssueList component
	_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode); // Render the component inside the content Node
	
	if (false) {
	  module.hot.accept();
	}

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(331);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(578);
	
	var _reactRouter = __webpack_require__(514);
	
	var _IssueAdd = __webpack_require__(579);
	
	var _IssueAdd2 = _interopRequireDefault(_IssueAdd);
	
	var _IssueFilter = __webpack_require__(580);
	
	var _IssueFilter2 = _interopRequireDefault(_IssueFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// fetch is imported into the global namespace
	// because it is expected to be a substitute for window.fetch() //
	// which should be available in the browser in any case.
	
	
	// ES2015 arrow function style with only the return value as an expression.
	// No curly braces, and no statements, jsut a JSX expression.
	var IssueRow = function IssueRow(props) {
	  return _react2.default.createElement(
	    'tr',
	    null,
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/issues/' + props.issue._id },
	        props.issue._id.substr(-4)
	      )
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.status
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.owner
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.created.toDateString()
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.effort
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.title
	    )
	  );
	};
	
	IssueRow.propTypes = {
	  issue: _react2.default.PropTypes.object.isRequired
	};
	
	// less concise but needed as the function is not a single expression.
	// Initialized a variable called issueRows
	// which means we need a full-fledged function with a return value.
	function IssueTable(props) {
	  var issueRows = props.issues.map(function (issue) {
	    return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue });
	  });
	  return _react2.default.createElement(
	    'table',
	    { className: 'bordered-table' },
	    _react2.default.createElement(
	      'thead',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'th',
	          null,
	          'Id'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Status'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Owner'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Created'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Effort'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Completion Date'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Title'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'tbody',
	      null,
	      issueRows
	    )
	  );
	}
	
	IssueTable.propTypes = {
	  issues: _react2.default.PropTypes.array.isRequired
	};
	
	var IssueList = function (_React$Component) {
	  _inherits(IssueList, _React$Component);
	
	  function IssueList() {
	    _classCallCheck(this, IssueList);
	
	    var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));
	
	    _this.state = { issues: [] };
	
	    _this.createIssue = _this.createIssue.bind(_this);
	    // must bind this method in the constructor since
	    // it's not being called from another component
	    // (so that the this variable during the call will be the calling component.)
	    _this.setFilter = _this.setFilter.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadData();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var oldQuery = prevProps.location.query;
	      var newQuery = this.props.location.query;
	      if (oldQuery.status === newQuery.status) {
	        return;
	      }
	      this.loadData();
	    }
	
	    // takes in a query object and uses the push method of router to change only the query string part
	    // keeping the pathname the same as before.
	
	  }, {
	    key: 'setFilter',
	    value: function setFilter(query) {
	      this.props.router.push({ pathname: this.props.location.pathname, query: query });
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      var _this2 = this;
	
	      fetch('/api/issues' + this.props.location.search).then(function (response) {
	        if (response.ok) {
	          response.json().then(function (data) {
	            data.records.forEach(function (issue) {
	              issue.created = new Date(issue.created);
	              if (issue.completionDate) {
	                issue.completionDate = new Date(issue.completionDate);
	              }
	            });
	            _this2.setState({ issues: data.records });
	          });
	        } else {
	          response.json().then(function (error) {
	            alert('Failed to fetch issues ' + error.message);
	          });
	        }
	      }).catch(function (err) {
	        alert('Error in fetching data from server: ' + err);
	      });
	    }
	  }, {
	    key: 'createIssue',
	    value: function createIssue(newIssue) {
	      var _this3 = this;
	
	      fetch('/api/issues', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(newIssue)
	      }).then(function (response) {
	        if (response.ok) {
	          response.json().then(function (updatedIssue) {
	            updatedIssue.created = new Date(updatedIssue.created);
	            if (updatedIssue.completionDate) {
	              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
	            }
	            // state is immutable so it cannot be modified.
	            // instead, concat() function of Array is used to create a copy of the original array
	            var newIssues = _this3.state.issues.concat(updatedIssue);
	            _this3.setState({ issues: newIssues });
	          });
	        } else {
	          response.json().then(function (error) {
	            alert('Failed to add issue: ' + error.message);
	          });
	        }
	      }).catch(function (err) {
	        alert('Error in sending data to server: ' + err.message);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(IssueTable, { issues: this.state.issues }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_IssueAdd2.default, { createIssue: this.createIssue })
	      );
	    }
	  }]);
	
	  return IssueList;
	}(_react2.default.Component);
	
	exports.default = IssueList;
	
	
	IssueList.propTypes = {
	  location: _react2.default.PropTypes.object.isRequired,
	  router: _react2.default.PropTypes.object
	};

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(331);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueAdd = function (_React$Component) {
	  _inherits(IssueAdd, _React$Component);
	
	  function IssueAdd() {
	    _classCallCheck(this, IssueAdd);
	
	    var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));
	
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueAdd, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      // default behavior of the form submits the form.
	      // This does a GET to the form's action URL, which is the same as the current URL
	      // Thus, the effect is to refresh the page even before the event is handled.
	      var form = document.forms.issueAdd;
	      // eslint-disable-next-line react/prop-types
	      this.props.createIssue({
	        owner: form.owner.value,
	        title: form.title.value,
	        status: 'New',
	        created: new Date()
	      });
	      // clear the form for the next input
	      form.owner.value = '';form.title.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (
	        // onSubmit allows the user to press Enter to add a new issue (compared to onClick)
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'form',
	            { name: 'issueAdd', onSubmit: this.handleSubmit },
	            _react2.default.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
	            _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
	            _react2.default.createElement(
	              'button',
	              null,
	              'Add'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return IssueAdd;
	}(_react2.default.Component);
	
	exports.default = IssueAdd;

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(331);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueFilter = function (_React$Component) {
	  _inherits(IssueFilter, _React$Component);
	
	  function IssueFilter() {
	    _classCallCheck(this, IssueFilter);
	
	    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this));
	
	    _this.clearFilter = _this.clearFilter.bind(_this);
	    _this.setFilterOpen = _this.setFilterOpen.bind(_this);
	    _this.setFilterAssigned = _this.setFilterAssigned.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueFilter, [{
	    key: 'setFilterOpen',
	    value: function setFilterOpen(e) {
	      e.preventDefault();
	      this.props.setFilter({ status: 'Open' });
	    }
	  }, {
	    key: 'setFilterAssigned',
	    value: function setFilterAssigned(e) {
	      e.preventDefault();
	      this.props.setFilter({ status: 'Assigned' });
	    }
	  }, {
	    key: 'clearFilter',
	    value: function clearFilter(e) {
	      e.preventDefault();
	      this.props.setFilter({});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Separator = function Separator() {
	        return _react2.default.createElement(
	          'span',
	          null,
	          ' | '
	        );
	      };
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: this.clearFilter },
	          'All Issues'
	        ),
	        _react2.default.createElement(Separator, null),
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: this.setFilterOpen },
	          'Open Issues'
	        ),
	        _react2.default.createElement(Separator, null),
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: this.setFilterAssigned },
	          'Assigned Issues'
	        )
	      );
	    }
	  }]);
	
	  return IssueFilter;
	}(_react2.default.Component);
	
	exports.default = IssueFilter;
	
	
	IssueFilter.propTypes = {
	  setFilter: _react2.default.PropTypes.func.isRequired
	};

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(331);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(514);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueEdit = function (_React$Component) {
	  _inherits(IssueEdit, _React$Component);
	
	  function IssueEdit() {
	    _classCallCheck(this, IssueEdit);
	
	    return _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).apply(this, arguments));
	  }
	
	  _createClass(IssueEdit, [{
	    key: 'render',
	    // eslint-disable-line
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'This is a placeholder for editing issue ',
	          this.props.params.id,
	          '.'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/issues' },
	          'Back to issue list'
	        )
	      );
	    }
	  }]);
	
	  return IssueEdit;
	}(_react2.default.Component);
	
	exports.default = IssueEdit;
	
	
	IssueEdit.propTypes = {
	  params: _react2.default.PropTypes.object.isRequired
	};

/***/ })

});
//# sourceMappingURL=app.bundle.js.map