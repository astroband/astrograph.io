<script>
export default {
  name: "Panels"
};
</script>

<template>
  <div class="wrapper">
    <div class="field query"><slot name="query"></slot></div>
    <div class="field result"><slot name="result"></slot></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: stretch;
  margin-top: 40px;
}

.query {
  min-width: 300px;
}

.result {
  min-width: 600px;
}

.field + .field {
  margin-left: 60px;
}
</style>
