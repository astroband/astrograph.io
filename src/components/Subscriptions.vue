<template>
  <div id="historical">
    <h1 class="ui dividing header">Real-time data subscriptions</h1>

    <p>Let's see what's happening with account balances in real time.</p>

    <form class="ui form">
      <div class="two fields">
        <div class="field">
          <label for="query">Query:</label>
          <textarea readonly id="query">{{ query.loc.source.body }}</textarea>
        </div>
        <div class="field">
          <label for="result">Result:</label>
          <textarea readonly id="result">{{ result }}</textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";

const subscriptionQuery = require("../graphql/subscription.gql");

export default {
  name: "Subscriptions",

  mounted() {
    const observer = this.$apollo.subscribe({
      query: subscriptionQuery,
      variables: {}
    });

    observer.subscribe({
      next: data => {
        this.result = data;
      },
      error(error) {
        console.error(error);
      }
    });
  },

  computed: {
    query() {
      return subscriptionQuery;
    }
  },

  data() {
    return {
      result: ""
    };
  }
};
</script>
