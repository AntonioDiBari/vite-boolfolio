<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-danger">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
