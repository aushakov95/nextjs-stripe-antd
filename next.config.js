const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  },
  env: {
    //STRIPE_SECRET_KEY_TEST: process.env.GOOGLE_API_KEY
    STRIPE_SECRET_KEY_TEST: "sk_test_XxOczgTCmqMRFYGAlLG2iJD500iQwpEyqB"
  }
});
