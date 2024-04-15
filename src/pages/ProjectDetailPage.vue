<script>
import axios from "axios";
import { api } from "../store";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      api,
      project: null,
    };
  },
  components: { ProjectCard },
  created() {
    const projectId = this.$route.params.id;
    axios.get(api.apiURI + "projects/" + projectId).then((response) => {
      this.project = response.data;
    });
  },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row">
      <project-card v-if="project" :project="project" :isDetail="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
</style>
