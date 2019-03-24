<template>
  <div class="header">
    <img src="../assets/logo.png" alt="Logo" class="logo">
    <div class="desc">
      <img src="../assets/textlogo.svg" alt="Astrograph">
      <div>GraphQL interface to Stellar blockchain</div>
    </div>
    <div class="buttons">
      <ButtonLink href="https://astrograph.evilmartians.io/graphql" class="button">
        <img src="../assets/demo.svg" class="icon">Demo
      </ButtonLink>
      <ButtonLink href="https://github.com/astroband/astrograph" hollow>
        <img src="../assets/github.svg" class="icon">Github
      </ButtonLink>
    </div>
  </div>
</template>
<script>
import ButtonLink from "./ButtonLink.vue";

export default {
  name: "Header",
  components: { ButtonLink }
};
</script>

<style scoped>
.header {
  display: flex;
  height: 325px;
  padding: 0 0 0 190px;
  margin: 0 -170px -195px -390px;
  background: url("../assets/background.svg") no-repeat;
}

.desc {
  flex-grow: 1;
  padding: 58px 0 10px;
}

.buttons {
  margin-top: 58px;
}

.button {
  margin-right: 10px;
}

.icon {
  margin-right: 5px;
}

.logo {
  width: 177px;
  height: 163px;
  margin-right: 23px;
}
</style>
