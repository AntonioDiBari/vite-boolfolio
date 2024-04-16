<script>
import axios from "axios";
import { api, store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      api,
      store,
      project: null,
    };
  },
  components: { ProjectCard },
  created() {
    const projectId = this.$route.params.id;
    axios.get(api.apiURI + "projects/" + projectId).then((response) => {
      if (response.data.success) {
        this.project = response.data.result;
      } else {
        console.log(response.data.message);
        store.errorData = response.data.message;
        this.$router.push({ name: "not-found" });
      }
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
