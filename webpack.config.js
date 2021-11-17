// Webpack uses this to work with directories
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    // contentBase: path.resolve(__dirname, 'dist'),
    // enable HMR on the devServer
    hot: true,
    // match the output 'publicPath'
    // publicPath: '/',
    // fallback to root for other urls
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/login/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },

  plugins: [new MiniCssExtractPlugin()],
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};