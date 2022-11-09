const path = require('path');

module.exports ={
    entry: './src/index.js',
    output: {
        filepath: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};