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

    <ButtonLink href="https://demo.astrograph.io/graphql" class="button"
      >Demo</ButtonLink
    >

    <div class="ems">
      <p>
        Sponsored by
        <a href="http://evilmartians.com" target="_blank" rel="noopener"
          >Evil Martians</a
        >
      </p>
      <div class="logo" />
    </div>
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

.ems {
  position: relative;
  bottom: -75px;
}

.logo {
  position: relative;
  width: 102px;
  height: 39px;
  margin: 0 auto;
  opacity: 0.6;
  background-image: url(../assets/martians.svg);
  background-size: cover;
}

.logo::before,
.logo::after {
  position: absolute;
  top: 20px;
  width: 24px;
  height: 13px;
  content: "";
  background: white;
  animation: footer_blinking linear infinite;
}

.logo::before {
  top: 20px;
  left: 11px;
  animation-duration: 3s;
  animation-delay: 500ms;
}

.logo::after {
  left: 66px;
  animation-duration: 3.1s;
}

@keyframes footer_blinking {
  from {
    height: 0;
  }

  96% {
    height: 0;
  }

  98% {
    height: 13px;
  }

  to {
    height: 0;
  }
}

@media (max-width: 999px) {
  .footer {
    padding: 40px 20px;
  }

  .button {
    width: 100%;
  }

  .ems {
    bottom: 0;
  }

  .logo {
    display: none;
  }
}
</style>
