<template>
  <b-container class="mx-auto">
    <h1 class="center">Choose a serie ot start the game</h1>
    <div class="d-flex align-items-center">
      <b-card
        v-for="serie in series"
        :key="serie.id"
        :title="serie.ville"
        tag="article"
        style="max-width: 15rem;"
        class="mb-2 center mar"
      >
        <b-button :to="'/start/'+serie.id" variant="primary">Select serie</b-button>
      </b-card>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "Series",
  data() {
    return {};
  },
  created() {
    this.retrieveSeries();
  },
  computed: {
    series() {
      return this.$store.state.series;
    }
  },
  methods: {}
};
</script>

<style >
.center {
  text-align: center;
}

.mar {
  margin-left: 2em;
}
</style>

