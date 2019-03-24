<template>
  <ApolloQuery :query="query" :variables="variables">
    <template slot-scope="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Loading...</div>
      <div v-else-if="error" class="error apollo">An error occured</div>
      <pre v-else-if="data" class="result apollo">{{JSON.stringify(data, null, 2)}}</pre>
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  props: {
    query: {
      type: Object,
      required: true
    },
    variables: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  name: "Results"
};
</script>
