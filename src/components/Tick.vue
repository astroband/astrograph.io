<script>
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
  components: { Snippet }
};
</script>

<template>
  <div>
    <h1>Tick</h1>
    <p>Tick description.</p>
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