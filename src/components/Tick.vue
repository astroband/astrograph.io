<script>
import Panels from "./Panels.vue";
import query from "../graphql/tick.gql";
import document from "../graphql/tick-subscription.gql";

const CURRENCIES = [
  {
    label: "XLM",
    value: "native"
  },
  {
    label: "USD",
    value: "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX"
  },
  {
    label: "ETH",
    value: "ETH-GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR"
  },
  {
    label: "BTC",
    value: "BTC-GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF"
  }
];

export default {
  name: "Basic",
  apollo: {
    tick: {
      query,
      subscribeToMore: {
        document,
        variables() {
          return { selling: this.selling, buying: this.buying };
        },
        updateQuery: (previousResult, { subscriptionData }) => {
          return subscriptionData.data;
        }
      },
      variables() {
        return { selling: this.selling, buying: this.buying };
      },
      error(error) {
        this.error = !!error;
      }
    }
  },
  computed: {
    query: function() {
      return query.loc.source.body;
    },
    loading: function() {
      return this.$apollo.queries.tick.loading;
    },
    bestBidRounded: function() {
      return this.tick.bestBid
        ? Number.parseFloat(this.tick.bestBid).toFixed(7)
        : "No bids";
    },
    bestAskRounded: function() {
      return this.tick.bestAsk
        ? Number.parseFloat(this.tick.bestAsk).toFixed(7)
        : "No asks";
    }
  },
  data() {
    return {
      selling: "USD-GDUKMGUGDZQK6YHYA5Z6AY2G4XDSZPSZ3SW5UN3ARVMO6QSRDWP5YLEX",
      buying: "native",
      currencies: CURRENCIES,
      error: null,
      tick: {}
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
    <p>
      Get the best bid/ask pricing for any pair of assets with a dedicated tick
      <a
        href="https://github.com/astroband/astrograph-landing/blob/master/src/graphql/tick.gql"
        >subscription</a
      >.
    </p>
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
          <template v-if="!loading">{{ bestBidRounded }}</template>
          <template v-else
            >Loading...</template
          >
        </div>

        <label>Best Ask:</label>
        <div class="value">
          <template v-if="!loading">{{ bestAskRounded }}</template>
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
