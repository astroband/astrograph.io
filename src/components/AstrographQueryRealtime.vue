<script setup lang="ts">
  import { computed, ref, reactive, toRefs } from "vue"
  import { useQuery } from "@vue/apollo-composable"
  import { gql } from "@apollo/client/core"

  import QueryResultPanels from "./QueryResultPanels.vue"

  import BestAskBid from "../graphql/BestAskBid.gql?raw"
  import BestAskBidResponse from "../graphql/BestAskBid.json"
  // import onBestAskBid from "../graphql/OnBestAskBid.gql?raw"

  interface Tick {
    selling?: string
    bestBid?: string
    bestAsk?: string
    buying?: string
  }

  const currencies = [
    {
      label: "XLM",
      value: "native"
    },
    {
      label: "USD",
      value: "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX"
    }
  ]

  const variables = reactive({
    selling: "native",
    buying: "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX"
  })
  const { selling, buying } = toRefs(variables)

  const { loading } = useQuery<{ tick: Tick }>(gql(BestAskBid), variables, { errorPolicy: "all" })
  const result = ref<{ tick: Tick }>(BestAskBidResponse)

  const bestAskRounded = computed(() => {
    const bestAsk = result.value?.tick?.bestAsk

    return bestAsk ? Number.parseFloat(bestAsk).toFixed(7) : "No asks"
  })

  const bestBidRounded = computed(() => {
    const bestBid = result.value?.tick?.bestBid

    return bestBid ? Number.parseFloat(bestBid).toFixed(7) : "No bids"
  })

  //   watch: {
  //     selling: function(val) {
  //       if (val === this.buying) {
  //         this.buying = currencies.find(option => option.value !== val).value;
  //       }
  //     },
  //     buying: function(val) {
  //       if (val === this.selling) {
  //         this.selling = currencies.find(option => option.value !== val).value;
  //       }
  //     }
  //   },
  // };
</script>

<template>
  <div>
    <h1>Tick</h1>
    <p>
      Get the best bid/ask pricing for any pair of assets with a dedicated tick
      <a href="https://github.com/astroband/astrograph-landing/blob/master/src/graphql/tick.gql">subscription</a>.
    </p>
    <QueryResultPanels>
      <template #query>
        <div class="selects">
          <div class="select-group">
            <label for="selling">Selling:</label>
            <div class="select-wrapper">
              <select id="selling" v-model="selling" class="select">
                <option v-for="option in currencies.slice(0, 1)" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="select-group">
            <label for="buying">Buying:</label>
            <div class="select-wrapper">
              <select id="buying" v-model="buying" class="select">
                <option v-for="option in currencies.slice(1, 2)" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </template>

      <template #result>
        <label>Best Bid:</label>
        <div class="value">
          <template v-if="loading">Loading...</template>
          <template v-else>{{ bestBidRounded }}</template>
        </div>

        <label>Best Ask:</label>
        <div class="value">
          <template v-if="loading">Loading...</template>
          <template v-else>{{ bestAskRounded }}</template>
        </div>
      </template>
    </QueryResultPanels>
  </div>
</template>

<style scoped>
  .select-wrapper {
    height: 24px;
    margin: 0 0 10px;
  }

  .value {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1;
  }

  @media (max-width: 999px) {
    .selects {
      display: flex;
    }

    .select-group {
      width: 50%;
    }
  }
</style>
