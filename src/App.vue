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
    <p class="intro">
      <a
        href="https://evilmartians.com/chronicles/try-astrograph-your-graphql-lens-for-stellar-blockchain"
        target="_blank"
        rel="noopener"
        >Blockchain meets GraphQL with the beta release of Astrograph</a
      >—a robust Node/TypeScript server that provides a single endpoint to
      explore the entirety of Stellar network. It also offers reliable
      WebSocket-based subscriptions, allowing you to build real-time tools for
      the mature distributed ecosystem faster and with less effort.
    </p>
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
  font-weight: 600;
  color: #fff;
}

h1 {
  margin-top: 100px;
  font-size: 40px;
  color: #fff;
}

b,
strong {
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #b8e986;
}

a:hover,
a:focus {
  opacity: 0.6;
  outline: none;
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

@media (max-width: 999px) {
  h1 {
    margin-top: 40px;
    font-size: 24px;
    color: #fff;
  }
}
</style>

<style scoped>
.content {
  margin: 0 auto;
  width: 960px;
}

.intro {
  margin-top: 50px;
}

@media (max-width: 999px) {
  .content {
    width: auto;
    padding: 0 10px;
  }

  .intro {
    margin-top: 20px;
  }
}
</style>
