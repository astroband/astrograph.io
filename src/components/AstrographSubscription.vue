<script setup lang="ts">
  import { computed, ref } from "vue"
  import { useSubscription } from "@vue/apollo-composable"
  import { gql } from "@apollo/client/core"

  import OnBalanceChange from "../graphql/OnBalanceChange.gql?raw"
  import OnBalanceChangeResponse from "../graphql/OnBalanceChange.json"

  import QueryResultPanels from "./QueryResultPanels.vue"
  import CodeSnippet from "./CodeSnippet.vue"

  const variables = ref({
    args: {
      idEq: "GABFQIK63R2NETJM7T673EAMZN4RJLLGP3OFUEJU5SZVTGWUKULZJNL6",
      mutationTypeIn: ["UPDATE"]
    }
  })

  const { loading } = useSubscription(gql(OnBalanceChange), variables)
  const result = ref(OnBalanceChangeResponse)

  const balanceChange = computed(() => JSON.stringify(result.value, null, 2))
</script>

<template>
  <div>
    <h1>Real-time data subscriptions</h1>
    <p>Let's see what's happening with account balances in real time.</p>
    <QueryResultPanels>
      <template #query>
        <label>Query:</label>
        <CodeSnippet :data="OnBalanceChange" language="graphql" />
      </template>

      <template #result>
        <label>Result:</label>
        <CodeSnippet :data="balanceChange" :error="false" :loading="loading" language="json" />
      </template>
    </QueryResultPanels>
  </div>
</template>
