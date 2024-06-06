<script setup lang="ts">
  import PageHeader from "./components/PageHeader.vue"
  import PageFooter from "./components/PageFooter.vue"
  import AstrographQuerySimple from "./components/AstrographQuerySimple.vue"
  import AstrographSubscription from "./components/AstrographSubscription.vue"
  import AstrographQueryRealtime from "./components/AstrographQueryRealtime.vue"
</script>

<template>
  <div class="content">
    <PageHeader />
    <!--h1>What is Astrograph</h1-->
    <p class="intro">
      Astrograph is a framework that lowers the entry threshold to the Stellar ecosystem and makes it possible to develop Stellar-based applications
      in hours, not weeks—significantly reducing Stellar application development costs and time-to-market.
    </p>
    <!--p>
    Instead of doing complex requests using old-school APIs and writing own tooling, developers can use Astrograph to search the ledger using a single GraphQL interface and Astrograph's own Stellar core data ingester.
    </p-->
    <p>
      Astrograph aims to provide a full-featured GraphQL interface to Stellar network, making the ecosystem more appealing to developers and lowering
      the entry barrier. Since its first release in April 2019, Astrograph provides access to the current and historical state of the ledger,
      including real-time updates about ongoing changes—all available through a single GraphQL endpoint.
    </p>
    <p>
      Check our
      <a href="https://evilmartians.com/chronicles/try-astrograph-your-graphql-lens-for-stellar-blockchain" target="_blank" rel="noopener"
        >blog post</a
      >
      to get more details about the project.
    </p>
    <p>
      Astrograph won 1st place in the
      <a href="https://medium.com/stellar-community/stellar-community-fund-round-1-winners-1957314d15cc" target="_blank" rel="noopener"
        >Stellar Community Fund Round 1</a
      >.
    </p>
    <!--h1>Get support</h1-->
    <p>
      Are you building a product based on a Stellar network and think you can benefit from Astrograph's flexibility and ease of use? Do you need help
      with integrating Astrograph to your Stellar-based project? Get in touch with us at
      <a href="mailto:astrograph@evilmartians.com">astrograph@evilmartians.com</a>.
    </p>
    <AstrographQuerySimple />
    <AstrographQueryRealtime />
    <AstrographSubscription />
    <PageFooter />
  </div>
</template>

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
