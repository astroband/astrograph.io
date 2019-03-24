<script>
import Snippet from "./Snippet";
import subscriptionQuery from "../graphql/subscription.gql";

export default {
  name: "Subscriptions",

  mounted() {
    const observer = this.$apollo.subscribe({
      query: subscriptionQuery,
      variables: {}
    });
    observer.subscribe({
      next: data => {
        this.result = data;
      },
      error(error) {
        console.error(error);
      }
    });
  },
  computed: {
    query() {
      return subscriptionQuery.loc.source.body;
    }
  },
  data() {
    return {
      result: ""
    };
  },
  components: { Snippet }
};
</script>

<template>
  <div>
    <h1>Real-time data subscriptions</h1>
    <p>Let's see what's happening with account balances in real time.</p>
    <div class="wrapper">
      <div class="field">
        <label>Query:</label>
        <Snippet :data="query" class="code"/>
      </div>
      <div class="field">
        <label>Result:</label>
        <Snippet :data="result" :error="error" :loading="loading" class="code"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.code {
  width: 300px;
  height: 400px;
}
</style>