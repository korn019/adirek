const webpack = require("webpack")
module.exports = {
  // basePath: "",
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
  env: {
    ACCESS_TOKEN_SECRET: "WVr^~jy36rA/:kA>xv:K!YQz7595aEqNY{k-6{B7kuZK#Aq`Yz",
    REFRESH_TOKEN_SECRET:
      "jyQK2!HzQTq_-?K@VmmJ=3CeBysZ%tqyjT3g6_6_B2=6gjJx!acyyKpsGyLKmJZtA-qDx$mN^ZKWeJ8g",
  },

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
