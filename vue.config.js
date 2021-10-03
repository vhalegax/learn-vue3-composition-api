const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  parallel: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Swal: "sweetalert2",
      }),
    ],
  },
};
