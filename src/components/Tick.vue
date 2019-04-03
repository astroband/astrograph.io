<script>
import Panels from "./Panels.vue";
import query from "../graphql/tick.gql";

const CURRENCIES = [
  {
    label: "USD",
    value: "USD-GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK"
  },
  {
    label: "ETH",
    value: "ETH-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG"
  }
];

export default {
  name: "Basic",
  apollo: {
    tick: {
      query,
      variables() {
        return { selling: this.selling, buying: this.buying };
      },
      error(error) {
        this.error = error;
      }
    }
  },
  computed: {
    result: function() {
      return this.tick && JSON.stringify(this.tick, null, 2);
    },
    query: function() {
      return query.loc.source.body;
    },
    loading: function() {
      return this.$apollo.queries.tick.loading;
    }
  },
  data() {
    return {
      selling: "USD-GBSTRUSD7IRX73RQZBL3RQUH6KS3O4NYFY3QCALDLZD77XMZOPWAVTUK",
      buying: "ETH-GBSTRH4QOTWNSVA6E4HFERETX4ZLSR3CIUBLK7AXYII277PFJC4BBYOG",
      currencies: CURRENCIES,
      error: null,
      tick: null
    };
  },
  watch: {
    selling: function(val) {
      if (val === this.buying) {
        this.buying = this.currencies.find(
          option => option.value !== val
        ).value;
      }
    },
    buying: function(val) {
      if (val === this.selling) {
        this.selling = this.currencies.find(
          option => option.value !== val
        ).value;
      }
    }
  },
  components: { Panels }
};
</script>

<template>
  <div>
    <h1>Tick</h1>
    <p>Tick description.</p>
    <Panels>
      <template v-slot:query>
        <div class="selects">
          <div class="select-group">
            <label for="selling">Selling:</label>
            <div class="select-wrapper">
              <select v-model="selling" id="selling" class="select">
                <option
                  v-for="option in currencies"
                  :value="option.value"
                  :key="option.value"
                  >{{ option.label }}</option
                >
              </select>
            </div>
          </div>
          <div class="select-group">
            <label for="buying">Buying:</label>
            <div class="select-wrapper">
              <select v-model="buying" id="buying" class="select">
                <option
                  v-for="option in currencies"
                  :value="option.value"
                  :key="option.value"
                  >{{ option.label }}</option
                >
              </select>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:result>
        <label>Best Bid:</label>
        <div class="value">
          <template v-if="!loading">{{ tick.bestBid }}</template>
          <template v-else
            >Loading...</template
          >
        </div>

        <label>Best Ask:</label>
        <div class="value">
          <template v-if="!loading">{{ tick.bestAsk }}</template>
          <template v-else
            >Loading...</template
          >
        </div>
      </template>
    </Panels>
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
