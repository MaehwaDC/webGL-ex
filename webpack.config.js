const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 8000;
const PATH_TO_OUTPUT = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: PATH_TO_OUTPUT,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: PATH_TO_OUTPUT,
    compress: true,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: ['lodash'],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    }),
  ],
};
