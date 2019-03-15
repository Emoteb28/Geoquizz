<template>
<b-container class="mx-auto">
    <h1>Choose a serie</h1>
    <div v-for="serie in series" :key="serie.id">
      <b-button :to="'/start/'+serie.id" variant="success">{{ serie.ville }}</b-button>
    </div>
</b-container>
</template>
<script>

export default {
    name: 'Series',
    data() {
      return {

      }
    },
    created() {
      this.retrieveSeries();
    },
    computed: {
      series() {
        return this.$store.state.series
      }
    },
    methods: {

    }
}
</script>

<style >

</style>

