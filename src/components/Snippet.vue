<script>
export default {
  snippet: "Snippet",
  props: {
    error: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    data: {
      type: String
    }
  }
};
</script>

<template>
  <div :class="['snippet', { error: error, loading: loading }]">
    <template v-if="loading">Loading...</template>
    <template v-else-if="error">An error occured</template>
    <template v-else-if="data">{{ data }}</template>
    <template v-else>No result :(</template>
  </div>
</template>

<style scoped>
.snippet {
  box-sizing: border-box;
  overflow: auto;
  padding: 12px;
  font-family: Inconsolata, monospace;
  font-size: 18px;
  line-height: 25px;
  white-space: pre;
  background: #2f1c3e;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
}

.error {
  color: #ff6e7f;
}
</style>