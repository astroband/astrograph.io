<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Basic from "./components/Basic.vue";
import Subscriptions from "./components/Subscriptions.vue";
import Tick from "./components/Tick.vue";

export default {
  name: "App",
  components: {
    Header,
    Basic,
    Subscriptions,
    Tick,
    Footer
  }
};
</script>

<template>
  <div class="content">
    <Header />
    <Basic />
    <Tick />
    <Subscriptions />
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:400,600,900");
@import url("https://fonts.googleapis.com/css?family=Inconsolata");

body {
  margin: 0;
  background: #2a1a37;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.6);
}

label {
  display: inline-block;
  margin-bottom: 6px;
  font-weight: 900;
  color: #fff;
}

h1 {
  margin-top: 100px;
  font-size: 40px;
  color: #fff;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 5px;
  border: none;
  font-family: Inconsolata, monospace;
  font-size: 18px;
  color: #ffd795;
  line-height: 20px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
  background: #2f1c3e;
}
</style>

<style scoped>
.content {
  margin: 0 auto;
  width: 960px;
}
</style>
