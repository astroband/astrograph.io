<script>
import Panels from "./Panels";
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
        this.error = !!error;
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
  components: { Panels, Snippet }
};
</script>

<template>
  <div>
    <h1>Real-time data subscriptions</h1>
    <p>Let's see what's happening with account balances in real time.</p>
    <Panels>
      <template v-slot:query>
        <label>Query:</label>
        <Snippet :data="query" language="graphql" />
      </template>
      <template v-slot:result>
        <label>Result:</label>
        <Snippet :data="result" :error="error" language="json" />
      </template>
    </Panels>
  </div>
</template>
