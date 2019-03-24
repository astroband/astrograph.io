<template>
  <div id="historical">
    <h1 class="ui dividing header">Historical query</h1>
    <p>Let's fetch XLM payments history, with filters, blows and whistles.</p>
    <div class="field">
      <label for="id">Account ID:</label>
      <input
        id="id"
        type="text"
        placeholder="Example: GAXBWGH4K5AB26LFJZTPJW4Q5UEVA4GTUWBUSCHK5CHU3LBEA44V6S56"
        v-model="id"
      >
    </div>
    <div class="two fields">
      <div class="field">
        <label for="query">Query:</label>
        <pre>{{ query }}</pre>
      </div>
      <div class="field">
        <label for="result">Result:</label>
        <pre>{{result}}</pre>
      </div>
    </div>
    <p>
      You can fetch operations history, filtered by account number and kinds.
      Every operation kind has it's own filters as well.
    </p>
  </div>
</template>

<script>
import query from "../graphql/historical.gql";

console.log(query);

export default {
  name: "Historical",
  apollo: {
    basic: {
      query,
      variables() {
        console.log(1);
        return { id: this.id };
      }
    }
  },
  computed: {
    result: function() {
      JSON.stringify(this.basic, null, 2);
    },
    query: function() {
      return query.loc.source.body;
    }
  },
  data() {
    return {
      basic: {},
      id: "GAXBWGH4K5AB26LFJZTPJW4Q5UEVA4GTUWBUSCHK5CHU3LBEA44V6S56"
    };
  }
};
</script>
