/* eslint-disable import/no-commonjs */
const withOffline = require("next-offline");

module.exports = withOffline({
  distDir: "build",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    config.module.rules.push({
      test: /\.css$/,
      loader: ["style-loader", "css-loader"]
    });
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias["react-dom"];
    }
    return config;
  }
});
