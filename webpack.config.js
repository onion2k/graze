  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
    },
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader?url=false' ]
        },
        {
          test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [{
            loader: 'file-loader',
            options: {
                name: '[path][name]-[hash:8].[ext]'
            },
          }]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Graze',
        template: './src/index.html'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
