<script>
export default {
  name: "ButtonLink",
  props: {
    href: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    hollow: {
      type: Boolean
    }
  }
};
</script>

<template>
  <a
    :class="['wrapper', { hollow: hollow }]"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    <slot></slot>
  </a>
</template>

<style scoped>
.wrapper {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #b8e986;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 20px;
  color: #2a1a37;
  background: #b8e986;
}

.hollow {
  color: #b8e986;
  background: none;
}
</style>
