<script>
import { store, api } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
      store,
      api,
    };
  },
  components: { AppHeader, AppMain },
  methods: {
    fetchProjects() {
      axios.get(api.apiURI).then((response) => {
        store.projects = response.data.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <app-header :title="title" />
  <app-main />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
