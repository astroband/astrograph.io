<script>
import Panels from "./Panels.vue";
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
        this.error = !!error;
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
  components: { Snippet, Panels }
};
</script>

<template>
  <div>
    <h1>Basic query</h1>
    <p>
      Let's try to fetch account current state including it's signers, balances and data
      entries via GraphQL.
    </p>
    <div class="input">
      <label for="id">Account ID:</label>
      <input
        id="id"
        type="text"
        placeholder="Example: GCHDYNE7ATLJNIERZQL3D7W7S42XZKN4AK73QT7Q665Q5JJ5X6E7V5KA"
        v-model="id"
      />
    </div>
    <Panels>
      <template v-slot:query>
        <label>Query:</label>
        <Snippet :data="query" language="graphql" />
      </template>
      <template v-slot:result>
        <label>Result:</label>
        <Snippet
          :data="result"
          :error="error"
          :loading="loading"
          language="json"
        />
      </template>
    </Panels>
    <p>
      You can get account signers, data entries and offers and transactions
      separately. All basic data in one place, no need to make multiple HTTP
      queries.
    </p>
  </div>
</template>
