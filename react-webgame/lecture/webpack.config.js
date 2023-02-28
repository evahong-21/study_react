const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: {
    app: ["./client"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react",],
          plugins: ["@babel/plugin-proposal-class-properties","react-refresh/babel",],
        },
      },
    ],
  },
  plugins: [   
    new RefreshWebpackPlugin()
  ],
  
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/',
  },

   devServer: {
     devMiddleware: {publicPath: './dist'},
     static: { directory: path.resolve(__dirname)},
     hot: true
   },
};
