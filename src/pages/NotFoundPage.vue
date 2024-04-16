<script>
import { store } from "../store";

export default {
  data() {
    return {
      title: "Error 404",
      store,
    };
  },
};
</script>

<template>
  <h1>{{ store.errorData }}</h1>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
</style>
