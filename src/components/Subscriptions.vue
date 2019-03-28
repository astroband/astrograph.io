<script>
import Snippet from "./Snippet";
import query from "../graphql/subscription.gql";

export default {
  name: "Subscriptions",
  mounted() {
    const observer = this.$apollo.subscribe({
      query: query,
      variables: {}
    });
    observer.subscribe({
      next: data => {
        this.result = JSON.stringify(data, null, 2);
      },
      error(error) {
        this.error = error;
      }
    });
  },
  computed: {
    query() {
      return query.loc.source.body;
    }
  },
  data() {
    return {
      result: null,
      error: null
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
        <Snippet :data="query" language="graphql" class="code" />
      </div>
      <div class="field">
        <label>Result:</label>
        <Snippet :data="result" :error="error" language="json" class="code" />
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
