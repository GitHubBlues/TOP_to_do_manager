const path = require('path');
const common = require("./webpack.config.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: 'dev_main.bundle.js',
    path: path.resolve(__dirname, 'devdev'),
    //publicPath: '/TOP_to_do_manager/', 
    },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',

      },
    ],
  }

});
