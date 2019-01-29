<template>
  <div id="historical" >
    <h1 class="ui dividing header">Historical query</h1>

    <p>Let's fetch XLM payments history, with filters, blows and whistles.</p>

    <form class="ui form">
      <div class="field">
        <label for="id">Account ID:</label>
        <input id="id" type="text" placeholder="Example: GAXBWGH4K5AB26LFJZTPJW4Q5UEVA4GTUWBUSCHK5CHU3LBEA44V6S56" v-model="id" />
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

    <p>You can fetch operations history, filtered by account number and kinds. Every operation kind has it's own filters as well.</p>
  </div>
</template>

<script>
// TODO: Mustasche + graphql template, if it will finally work?
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
      id: 'GAXBWGH4K5AB26LFJZTPJW4Q5UEVA4GTUWBUSCHK5CHU3LBEA44V6S56'
    };
  }
};
</script>
