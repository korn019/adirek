const webpack = require("webpack");
module.exports = {
  basePath: "",
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    )
    return config
  },
  assetPrefix: "",
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         {key: "Access-Control-Allow-Credentials", value: "true"},
  //         {key: "Access-Control-Allow-Origin", value: "*"},
  //         {key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"},
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ]
  // },
}
