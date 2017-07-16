const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    watch: NODE_ENV === 'dev',

    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
          ]
        }
      ]
    },

    devServer: {
      contentBase: __dirname,
      historyApiFallback: true,
      port: 3000,
      publicPath: '/dist'
    },

    devtool: NODE_ENV === 'dev' ? 'source-map' : false
}
