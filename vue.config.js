module.exports = {
  crossorigin: "anonymous",
  integrity: true,

  publicPath: "", //  process.env.NODE_ENV === "production" ? "https://astrograph.io/" : "/",

  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  }
};
