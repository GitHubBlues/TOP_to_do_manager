const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [path.resolve(__dirname, "src", "index.js")],
        
  },

  plugins: [new HtmlWebpackPlugin({
         template: "./src/template_index.html",
         filename: "index.html"})
          ],

  module: {
   rules: [
     {
       test: /\.html$/i,
       use: ['html-loader'],
     },

   ],
  },

//  optimization: {
//    mergeDuplicateChunks: false,
//  }

//  optimization: {
//    runtimeChunk: 'single',
//  },
};

