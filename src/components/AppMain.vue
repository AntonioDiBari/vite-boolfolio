<script>
import { store, api } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
      api,
    };
  },
  components: { ProjectCard },
  methods: {
    fetchProjects(endpoint = api.apiURI) {
      axios.get(endpoint).then((response) => {
        store.projects = response.data.data;
        store.pagination = response.data.links;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          @click="fetchProjects(link.url)"
          v-for="link in store.pagination"
          :class="{ active: link.active, disabled: !link.url }"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
    <div class="row row-cols-4 g-3">
      <project-card v-for="project in store.projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss"></style>
