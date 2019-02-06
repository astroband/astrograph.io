<template>
  <div id="basic">
    <h1 class="ui dividing header">Basic query</h1>

    <p>
      Let's try to fetch account current state including it's signers, data
      entries and trust lines via GraphQL.
    </p>

    <form class="ui form">
      <div class="field">
        <label for="id">Account ID:</label>
        <input
          id="id"
          type="text"
          placeholder="Example: GCHDYNE7ATLJNIERZQL3D7W7S42XZKN4AK73QT7Q665Q5JJ5X6E7V5KA"
          v-model="id"
        />
      </div>
      <div class="two fields">
        <div class="field">
          <label for="query">Query:</label>
          <textarea readonly id="query">{{ query.loc.source.body }}</textarea>
        </div>
        <div class="field">
          <label for="result">Result:</label>
          <Results :query="query" :variables="variables" />
        </div>
      </div>
    </form>

    <p>
      You can get account signers, data entries and offers and transactions
      separately. All basic data in one place, no need to make multiple HTTP
      queries.
    </p>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Results from "./Results.vue";

export default {
  name: "Basic",
  components: {
    Results
  },
  computed: {
    query() {
      return require("../graphql/basic.gql");
    },
    variables() {
      return { id: this.id };
    }
  },
  data() {
    return {
      id: "GA2OUHQPMPY2PY7HK6D74P3ZT2OWBMJNH7SMKOHB4DZTYLFCTQANOV2J"
    };
  }
};
</script>
