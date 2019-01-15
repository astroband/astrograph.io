<template>
  <div id="basic">
    <h1>Basic query</h1>

    <p>Let's try to fetch account current state including it's signers, data entries and trust lines via GraphQL.</p>

    <form class="ui form">
      <div class="field">
        <label for="id">Account ID:</label>
        <input id="id" type="text" placeholder="Example: GCHDYNE7ATLJNIERZQL3D7W7S42XZKN4AK73QT7Q665Q5JJ5X6E7V5KA" v-model="id" />
      </div>
      <div class="two fields">
        <div class="field">
          <label for="query">Query:</label>
          <textarea readonly id="query">{{ query.loc.source.body }}</textarea>
        </div>
        <div class="field">
          <label for="result">Result:</label>

          <ApolloQuery :query="query" :variables="{ id: this.id }">
            <template slot-scope="{ result: { loading, error, data } }">
              <textarea readonly id="result" v-if="loading" class="loading apollo">Loading...</textarea>
              <textarea readonly id="result" v-else-if="error" class="error apollo">An error occured</textarea>
              <textarea readonly id="result" v-else-if="data" class="result apollo">{{ JSON.stringify(data, null, 4) }}</textarea>
              <textarea readonly id="result" v-else class="no-result apollo">No result :(</textarea>
            </template>
          </ApolloQuery>
        </div>
      </div>
    </form>

    <p>You can get account signers, data entries and offers and transactions separately. All basic data in one place, no need to make multiple HTTP queries.</p>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "Basic",
  computed: {
    query() {
      return require('../graphql/basic.gql');
    }
  },
  data() {
    return {
      id: 'GA2OUHQPMPY2PY7HK6D74P3ZT2OWBMJNH7SMKOHB4DZTYLFCTQANOV2J'
    };
  }
};
</script>
