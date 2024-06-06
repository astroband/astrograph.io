<script setup lang="ts">
  import { computed } from "vue"

  interface Props {
    error?: boolean
    loading?: boolean
    data: string
    language: "graphql" | "json"
  }

  const props = defineProps<Props>()

  const code = computed(() => {
    return props.data ? Prism.highlight(props.data, Prism.languages[props.language], props.language) : null
  })
</script>

<template>
  <div :class="['snippet', { error: error, loading: loading }]">
    <template v-if="loading"> Loading... </template>
    <template v-else-if="error"> An error occured </template>
    <template v-else-if="data">
      <div v-html="code" />
    </template>
    <template v-else> No result :( </template>
  </div>
</template>

<style scoped>
  .snippet {
    box-sizing: border-box;
    overflow: auto;
    height: 400px;
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

  @media (max-width: 999px) {
    .snippet {
      height: 250px;
    }
  }
</style>
