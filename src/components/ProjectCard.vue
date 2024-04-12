<script>
export default {
  data() {
    return {};
  },
  props: { project: Object },
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <span class="card-subtitle fst-italic">{{ project.author }}</span>
        <p class="card-text">
          {{ project.description }}
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
