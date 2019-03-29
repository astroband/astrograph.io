<template>
  <div class="header">
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <div class="desc">
      <img src="../assets/textlogo.svg" alt="Astrograph" />
      <div>GraphQL interface to Stellar blockchain</div>
    </div>
    <div class="buttons">
      <ButtonLink
        href="https://astrograph.evilmartians.io/graphql"
        class="button"
      >
        <img src="../assets/demo.svg" class="icon" />Demo
      </ButtonLink>
      <ButtonLink href="https://github.com/astroband/astrograph" hollow>
        <img src="../assets/github.svg" class="icon" />Github
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
  flex-direction: row;
  height: 325px;
  margin: 0 0 -195px -200px;
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

@media (max-width: 999px) {
  .header {
    flex-direction: column;
    height: auto;
  }

  .desc {
    flex-grow: 1;
    padding: 10px 0 20px;
  }

  .buttons {
    margin: 0;
  }
}

@media (min-width: 1000px) and (max-width: 1359px) {
  .header {
    height: 130px;
  }
}

@media (max-width: 1359px) {
  .header {
    padding: 0;
    margin: 0;
    background: none;
  }

  .logo {
    display: none;
  }
}
</style>
