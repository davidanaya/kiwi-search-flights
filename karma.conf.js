const webpack = require('webpack');
const path = require('path');

const settings = {
  API: 'https://api.skypicker.com'
}

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    files: [
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      { pattern: __dirname + '/**/*.spec.ts', watched: false }
    ],
    frameworks: ['jasmine'],
    mime: { 'text/x-typescript': ['ts'] },
    preprocessors: {
      '*.js': ['sourcemap'],
      '**/*.spec.ts': ['sourcemap', 'webpack']
    },
    reporters: ['spec'],
    webpack: {
      context: __dirname,
      devtool: 'sourcemap',
      module: {
        rules: [
          {
            test: /\.html$/,
            loaders: ['raw-loader']
          },
          {
            test: /\.scss$/,
            use: ['raw-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
          },
          {
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader']
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.SETTINGS': JSON.stringify(settings)
        }),
        new webpack.ContextReplacementPlugin(
          /angular(\\|\/)core(\\|\/)@angular/,
          path.resolve(__dirname, 'src')
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin({
          filename: null,
          test: /\.(ts|js)($|\?)/i
        })
      ],
      resolve: {
        extensions: ['.ts', '.js']
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
