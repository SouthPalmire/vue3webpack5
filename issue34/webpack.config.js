const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
   entry: path.join(__dirname, 'src', 'main.js'),
   output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'build.js'
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
         },
         {
            test: /\.css$/,
            use: [
               'vue-style-loader',
               'css-loader'
            ]
         }
      ]
   },
   plugins: [
      new VueLoaderPlugin()
   ]
}