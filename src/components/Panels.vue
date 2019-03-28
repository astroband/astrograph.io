<script>
export default {
  name: "Panels"
};
</script>

<template>
  <div class="wrapper">
    <div class="field"><slot name="query"></slot></div>
    <div class="field"><slot name="result"></slot></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: stretch;
  margin-top: 40px;
}

.field {
  min-width: 450px;
}

.field + .field {
  margin-left: 60px;
}
</style>
