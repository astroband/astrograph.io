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
    <!--h1>What is Astrograph</h1-->
    <p class="intro">
    Astrograph is a framework that lowers the entry threshold to the Stellar ecosystem and makes it possible to develop Stellar-based applications in hours, not weeks—significantly reducing Stellar application development costs and time-to-market.
    </p>
    <!--p>
    Instead of doing complex requests using old-school APIs and writing own tooling, developers can use Astrograph to search the ledger using a single GraphQL interface and Astrograph's own Stellar core data ingester. 
    </p-->
    <p>
    Astrograph aims to provide a full-featured GraphQL interface to Stellar network, making the ecosystem more appealing to developers and lowering the entry barrier. Since its first release in April 2019, Astrograph provides access to the current and historical state of the ledger, including real-time updates about ongoing changes—all available through a single GraphQL endpoint. 
    </p>
    <p>
      Check our
      <a
        href="https://evilmartians.com/chronicles/try-astrograph-your-graphql-lens-for-stellar-blockchain"
        target="_blank"
        rel="noopener"
      >blog post</a>
      to get more details about the project.
    </p>
    <!--h1>Get support</h1-->
    <p>
    Are you building a product based on a Stellar network and think you can benefit from Astrograph's flexibility and ease of use? Do you need help with integrating Astrograph to your Stellar-based project? Get in touch with us at <a href="mailto:astrograph@evilmartians.com">astrograph@evilmartians.com</a>.    
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
