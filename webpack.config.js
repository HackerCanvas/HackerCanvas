// Webpack uses this to work with directories
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/Index.jsx',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    port: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
               {
                 // This loader resolves url() and @imports inside CSS
                 loader: "css-loader",
               },
               {
                 // Then we apply postCSS fixes like autoprefixer and minifying
                 loader: "postcss-loader"
               },
               {
                 // First we transform SASS to standard CSS
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      },
      {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
             {
               // Using file-loader for these files
               loader: "file-loader",

               // In options we can set different things like format
               // and directory to save
               options: {
                 outputPath: 'images'
               }
             }
           ]
        }
    ],
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};