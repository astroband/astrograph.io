module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["graphql", "json"]
      }
    ]
  ],
  sourceMaps: "inline",
  inputSourceMap: false
};
