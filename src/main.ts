import "./assets/main.css"
import "./assets/prism.css"

import { createApp, provide, h } from "vue"
import { DefaultApolloClient } from "@vue/apollo-composable"

import apolloClient from "./apollo"
import App from "./App.vue"

// import VueApolloComponents from "@vue/apollo-components"

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

// app.use(VueApolloComponents)
app.mount("#app")
