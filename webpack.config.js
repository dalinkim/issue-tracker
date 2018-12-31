module.exports = {
    entry: './src/App.jsx',
    output: {
        path: './static',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
        ]
    }
};