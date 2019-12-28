module.exports = {
  presets: ["@vue/babel-preset-app"],
  plugins: [["prismjs", { languages: ["graphql", "json"] }]],
  sourceMaps: "inline",
  inputSourceMap: false
};
