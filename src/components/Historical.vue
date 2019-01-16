<template>
  <div id="historical" >
    <h1 class="ui dividing header">Historical query</h1>

    <p>Let's fetch operations history, with filters, blows and whistles.</p>

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

          <Results :query="query" :variables="variables" />
        </div>
      </div>
    </form>

    <p>You can fetch operations history, filtered by account number or for all accounts at once. Every operation has it's own filters as well.</p>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Results from './Results.vue';

export default {
  name: "Historical",
  components: {
    Results,
  },
  computed: {
    query() {
      return require('../graphql/historical.gql');
    },
    variables() {
      return { id: this.id };
    }
  },
  data() {
    return {
      id: 'GA2OUHQPMPY2PY7HK6D74P3ZT2OWBMJNH7SMKOHB4DZTYLFCTQANOV2J'
    };
  }
};
</script>
