'use strict';

require('babel-polyfill');

var _sourceMapSupport = require('source-map-support');

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _issue = require('./issue.js');

var _issue2 = _interopRequireDefault(_issue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Comiplation only takes care of the new syntax of ES2015 
// but does not provide new objects and methods that are part of the ES2015 standard library
// To enable these objects and methods as in client-side code, bable-polyfill is included.
_sourceMapSupport2.default.install();

const app = (0, _express2.default)();
app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json()); // using JSON parser from body-parser

app.get('/api/issues', (req, res) => {
    db.collection('issues').find().toArray().then(issues => {
        const metadata = {
            total_count: issues.length
        };
        res.json({
            _metadata: metadata,
            records: issues
        });
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    });
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    newIssue.created = new Date();
    if (!newIssue.status) newIssue.status = 'New';

    const err = _issue2.default.validateIssue(newIssue);
    if (err) {
        res.status(422).json({
            message: `Invalid request: ${err}`
        });
        return;
    }

    db.collection('issues').insertOne(newIssue).then(result => db.collection('issues').find({
        _id: result.insertedId
    }).limit(1).next()).then(newIssue => {
        res.json(newIssue);
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    });
});

let db;
_mongodb.MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
    db = connection;
    app.listen(3000, () => {
        console.log('App started on port 3000');
    });
}).catch(error => {
    console.log('ERROR:', error);
});
//# sourceMappingURL=server.js.map