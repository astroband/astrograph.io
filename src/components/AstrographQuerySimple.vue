<script setup lang="ts">
  import { computed, ref } from "vue"

  import { gql } from "@apollo/client/core"
  import { useQuery } from "@vue/apollo-composable"

  import QueryResultPanels from "./QueryResultPanels.vue"
  import CodeSnippet from "./CodeSnippet.vue"
  import FindAccount from "../graphql/FindAccount.gql?raw"
  import FindAccountResponse from "../graphql/FindAccount.json"

  const id = ref("GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN")

  const { loading } = useQuery(gql(FindAccount), { id })
  const result = ref(FindAccountResponse)

  const accountData = computed(() => JSON.stringify(result.value?.account, null, 2))
</script>

<template>
  <div>
    <h1>Basic query</h1>
    <p>Let's try to fetch account current state including it's signers, balances and data entries via GraphQL.</p>
    <div class="input">
      <label for="id">Account ID:</label>
      <input id="id" v-model="id" type="text" placeholder="Example: GCHDYNE7ATLJNIERZQL3D7W7S42XZKN4AK73QT7Q665Q5JJ5X6E7V5KA" disabled />
    </div>
    <QueryResultPanels>
      <template #query>
        <label>Query:</label>
        <CodeSnippet :data="FindAccount" language="graphql" />
      </template>
      <template #result>
        <label>Result:</label>
        <CodeSnippet :data="accountData" :error="false" :loading="loading" language="json" />
      </template>
    </QueryResultPanels>
    <p>
      You can get account signers, data entries and offers and transactions separately. All basic data in one place, no need to make multiple HTTP
      queries.
    </p>
  </div>
</template>
