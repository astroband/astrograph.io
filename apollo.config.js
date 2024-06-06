// Docs: https://www.apollographql.com/docs/devtools/apollo-config/
export default {
  client: {
    service: "astrograph-alpha",
    addTypename: false,
    includes: ["src/**/*.{js,jsx,ts,tsx,vue,gql}"]
  }
}
