<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
    </div>
  </nav>
</template>

<style lang="scss"></style>
