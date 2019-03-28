<script>
import Panels from "./Panels.vue";
import Snippet from "./Snippet.vue";
import query from "../graphql/tick.gql";

export default {
  name: "Basic",
  apollo: {
    tick: {
      query,
      error(error) {
        this.error = error;
      }
    }
  },
  computed: {
    result: function() {
      return this.tick && JSON.stringify(this.tick, null, 2);
    },
    query: function() {
      return query.loc.source.body;
    },
    loading: function() {
      return this.$apollo.queries.tick.loading;
    }
  },
  data() {
    return {
      error: null,
      tick: null
    };
  },
  components: { Panels, Snippet }
};
</script>

<template>
  <div>
    <h1>Tick</h1>
    <p>Tick description.</p>
    <Panels>
      <template v-slot:query>
        <label>Query:</label>
        <Snippet :data="query" language="graphql" />
      </template>
      <template v-slot:result>
        <label>Result:</label>
        <Snippet
          :data="result"
          :error="error"
          :loading="loading"
          language="json"
        />
      </template>
    </Panels>
  </div>
</template>
