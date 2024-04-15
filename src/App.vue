<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },
  components: { AppHeader },
};
</script>

<template>
  <app-header :title="title" />
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
