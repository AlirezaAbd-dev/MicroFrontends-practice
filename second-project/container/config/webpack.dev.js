const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const commomConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketings: "marketings@http://localhost:8081/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
        },
        "react-dom": {
          eager: true,
          singleton: true,
        },
        "@material-ui/core": {
          eager: true,
        },
        "webpack-dev-server": {
          eager: true,
        },
      },
    }),
  ],
};

module.exports = merge(commomConfig, devConfig);
