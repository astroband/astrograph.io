<script>
import Snippet from "./Snippet.vue";
import query from "../graphql/basic.gql";

export default {
  name: "Basic",
  apollo: {
    account: {
      query,
      variables() {
        return { id: this.id };
      },
      error(error) {
        this.error = error;
      }
    }
  },
  computed: {
    result: function() {
      return this.account && JSON.stringify(this.account, null, 2);
    },
    query: function() {
      return query.loc.source.body;
    },
    loading: function() {
      return this.$apollo.queries.account.loading;
    }
  },
  data() {
    return {
      error: null,
      account: null,
      id: "GAXBWGH4K5AB26LFJZTPJW4Q5UEVA4GTUWBUSCHK5CHU3LBEA44V6S56"
    };
  },
  components: { Snippet }
};
</script>

<template>
  <div id="basic">
    <h1 class="ui dividing header">Basic query</h1>

    <p>Let's try to fetch account current state including it's signers, data entries and trust lines via GraphQL.</p>

    <div class="input">
      <label for="id">Account ID:</label>
      <input
        id="id"
        type="text"
        placeholder="Example: GCHDYNE7ATLJNIERZQL3D7W7S42XZKN4AK73QT7Q665Q5JJ5X6E7V5KA"
        v-model="id"
      >
    </div>

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

    <p>
      You can get account signers, data entries and offers and transactions
      separately. All basic data in one place, no need to make multiple HTTP
      queries.
    </p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.input {
  margin: 40px 0;
}

.code {
  width: 300px;
  height: 400px;
}
</style>