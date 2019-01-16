<template>
  <ApolloQuery :query="query" :variables="variables">
    <template slot-scope="{ result: { loading, error, data } }">
      <textarea readonly id="result" v-if="loading" class="loading apollo">Loading...</textarea>
      <textarea readonly id="result" v-else-if="error" class="error apollo">An error occured</textarea>
      <textarea readonly id="result" v-else-if="data" class="result apollo">{{ JSON.stringify(data, null, 2) }}</textarea>
      <textarea readonly id="result" v-else class="no-result apollo">No result :(</textarea>
    </template>
  </ApolloQuery>
</template>

<script>
import gql from 'graphql-tag';

export default {
  props: {
    query: {
      type: Object,
      required: true
    },
    variables: {
      type: Object,
      default: {}
    }
  },
  name: "Results"
};
</script>
