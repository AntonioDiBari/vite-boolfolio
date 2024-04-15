<script>
export default {
  data() {
    return {};
  },
  props: { project: Object, isDetail: Boolean },

  computed: {
    abstract() {
      return this.project.description.length > 40
        ? this.project.description.substr(0, 40) + "..."
        : this.project.description;
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="project.image ? project.image : 'https://placehold.co/600x400'"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <span class="card-subtitle fst-italic d-block">{{
          project.author
        }}</span>
        <div
          class="badge mb-3"
          :style="'background-color:' + project.type.color"
        >
          {{ project.type.name }}
        </div>
        <div>
          <span
            v-for="technology in project.technologies"
            class="badge mb-3 me-2"
            :style="'background-color:' + technology.color"
          >
            {{ technology.name }}</span
          >
        </div>
        <p v-if="project.description" class="card-text">
          {{ !isDetail ? abstract : project.description }}
        </p>
        <div v-else class="mt-3"></div>
        <router-link
          v-if="!isDetail"
          :to="{ name: 'project.detail', params: { id: project.id } }"
          class="btn btn-primary"
          >More info</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
