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
}

@media (max-width: 999px) {
  .wrapper {
    margin-top: 20px;
    flex-direction: column;
  }

  .field + .field {
    margin-top: 20px;
  }
}

@media (min-width: 1000px) {
  .wrapper {
    margin-top: 40px;
    justify-content: stretch;
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
}
</style>
