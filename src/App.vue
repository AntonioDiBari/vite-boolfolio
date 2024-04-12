<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolfolio",
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data.data;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
