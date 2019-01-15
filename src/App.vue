<template>
  <div id="app" class="ui container">
    <p>Let us introduce Astrograph: GraphQL interface to Stellar blockchain.</p>

    <Basic />
  </div>
</template>

<script>
import Basic from "./components/Basic.vue";

export default {
  name: "app",
  components: {
    Basic
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

form {
  margin-bottom: 1em;
}
</style>
