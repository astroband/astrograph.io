<template>
  <div id="app" class="ui container">
    <p>Let us introduce Astrograph: GraphQL interface to Stellar blockchain.</p>

    <Basic />
    <Historical />

    <!-- Live: subscribe to network events -->

    <!-- Advanced: rare queries -->
    <!-- What's going on with an asset? -->
    <!-- Who are the biggest asset stake holders? -->
  </div>
</template>

<script>
import Basic from "./components/Basic.vue";
import Historical from "./components/Historical.vue";

export default {
  name: "app",
  components: {
    Basic,
    Historical,
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

h1 {
  margin-top: 1em !important;
}
</style>
