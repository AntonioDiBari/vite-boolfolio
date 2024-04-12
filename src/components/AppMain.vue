<script>
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { ProjectCard },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row row-cols-4 g-3">
      <project-card v-for="project in store.projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss"></style>
