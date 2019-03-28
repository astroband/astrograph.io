<script>
import ButtonLink from "./ButtonLink.vue";

export default {
  name: "Booter",
  components: { ButtonLink }
};
</script>

<template>
  <div class="footer">
    <p>Discover more Astrograph features using our public GraphQL console.</p>

    <ButtonLink href="https://astrograph.evilmartians.io/graphql" class="button"
      >Demo</ButtonLink
    >
  </div>
</template>

<style scoped>
.footer {
  padding: 100px 0 75px;
  text-align: center;
}

.button {
  display: flex;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  font-size: 20px;
}
</style>
