<script>
export default {
  data() {
    return {};
  },
  props: { project: Object },

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
    <div class="card h-100" style="width: 18rem">
      <img
        :src="project.image ? project.image : 'https://placehold.co/600x400'"
        class="card-img-top"
        alt="..."
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
          {{ abstract }}
        </p>
        <div v-else class="mt-3"></div>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
