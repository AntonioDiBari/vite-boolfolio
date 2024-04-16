<script>
import AppMain from "../components/AppMain.vue";

export default {
  data() {
    return {};
  },
  components: { AppMain },
  computed: {
    /* Parametro passato per filtrare i projects, false se tutti, int se ci passiamo
    la categoria da usare nell'endpoint per API */
    type_id() {
      return this.$route.params.type_id
        ? parseInt(this.$route.params.type_id)
        : false;
    },
  },
};
</script>

<template>
  <!-- la key mi aiuta a ricaricare, basta mettere un elemento diverso
  per creare e distruggere un nuovo e diverso componente -->
  <app-main :type_id="type_id" :key="type_id" />
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
</style>
