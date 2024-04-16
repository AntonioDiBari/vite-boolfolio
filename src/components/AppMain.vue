<script>
import { store, api } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      store,
      api,
      type_name: null,
    };
  },
  props: { type_id: [Number, Boolean] },

  computed: {
    projectsEndpoint() {
      if (this.type_id) {
        return api.apiURI + "projects-by-type/" + this.type_id;
      } else {
        return api.apiURI + "projects";
      }
    },
  },

  methods: {
    fetchProjects(endpoint = this.projectsEndpoint) {
      axios.get(endpoint).then((response) => {
        /* se tipo non esiste, mostra pagina not-found */
        if (!response.data.success) {
          store.errorData = response.data.message;
          this.$router.push({ name: "not-found" });
        }
        store.projects = response.data.result.data;
        store.pagination = response.data.result.links;
        this.type_name = response.data.type.name;
      });
    },
  },
  components: { ProjectCard },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="my-3">
      {{
        type_id
          ? type_name
            ? "Projects by type: " + type_name
            : ""
          : "Projects"
      }}
    </h1>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          @click="fetchProjects(link.url)"
          v-for="link in store.pagination"
          :class="{ active: link.active, disabled: !link.url }"
          class="page-item"
        >
          <a
            class="page-link"
            href="javascript:void(0)"
            v-html="link.label"
          ></a>
        </li>
      </ul>
    </nav>
    <div class="row row-cols-4 g-3">
      <project-card
        v-for="project in store.projects"
        :project="project"
        :isDetail="false"
        :key="project.id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
