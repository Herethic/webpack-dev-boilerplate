module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/__tests__/*.spec.js',
      'src/**/__tests__/*.spec.jsx'
    ],
    preprocessors: {
      'src/**/__tests__/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/__tests__/*.spec.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'airbnb']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
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
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': 'window'
      }
    },

    webpackServer: {
      noInfo: true
    }
  })
}
