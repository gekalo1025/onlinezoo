// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const pages = ["home", "donate"];

const config = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.js`;
    return config;
  }, {}),

  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[ext]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    compress: true,
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
    // <- here goes array(s) of other plugins
  ),

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].[ext]",
          //   },
          // },
          {
            loader: "html-loader",
          },
        ],
        // exclude: path.resolve(__dirname, "src/pages/main/main.html"),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
