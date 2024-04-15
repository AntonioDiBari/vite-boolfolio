<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },
  components: { AppHeader, AppMain },
};
</script>

<template>
  <app-header :title="title" />
  <app-main />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
