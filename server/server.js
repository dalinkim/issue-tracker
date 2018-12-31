'user strict'

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json()); // using JSON parser from body-parser

// use HMR via middleware for development convenience
if (process.env.NODE_ENV !== 'production') {
    // load modules
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    // load default webpack config
    const config = require('../webpack.config');
    // append additional entry points and plugins that are required for HMR
    config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    // create bundler using new options and pass it to the two middleware instantiations
    const bundler = webpack(config);
    // app.use to install middlewares
    app.use(webpackDevMiddleware(bundler, { noInfo: true }));
    app.use(webpackHotMiddleware(bundler, { log: console.log }));
}

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
    if (!newIssue.status)
        newIssue.status = 'New';

    const err = validateIssue(newIssue);
    if (err) {
        res.status(422).json({
            message: `Invalid request: ${err}`
        });
        return;
    }

    db.collection('issues').insertOne(newIssue).then(result =>
        db.collection('issues').find({
            _id: result.insertedId
        }).limit(1).next()
    ).then(newIssue => {
        res.json(newIssue);
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    });
});

let db;
MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
    db = connection;
    app.listen(3000, function () {
        console.log('App started on port 3000');
    });
}).catch(error => {
    console.log('ERROR', error);
})