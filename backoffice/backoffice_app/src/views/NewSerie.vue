<template>
  <v-container class="slide-bck-top">
    <h6 class="display-3">Créer une nouvelle série</h6>
    <v-form @submit.prevent="createSerie" ref="form">
      <v-text-field v-model="city" label="Ville" required></v-text-field>

      <v-text-field v-model="lat" label="Latitude" required></v-text-field>

      <v-text-field v-model="lon" label="Longitude" required></v-text-field>
      <v-text-field v-model="dist" label="Distance" required></v-text-field>

      <v-btn color="success" type="submit">Envoyer</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "FilmForm",
  data: () => ({
    city: "",
    lat: null,
    lon: null,
    dist: null
  }),
  methods: {
    createSerie() {
      this.$store
        .dispatch("createSerie", {
          city: this.city,
          lat: this.lat,
          lon: this.lon,
          dist: this.dist
        })
        .then(response => {
          this.$router.push({ name: 'series' })
        });
    }
  }
};
</script>

<style lang="scss">
#card {
  margin-left: 15%;
  margin-top: 5%;
}
a {
  text-decoration: none;
}





/**
 * ----------------------------------------
 * animation slide-bck-top
 * ----------------------------------------
 */
.slide-bck-top {

	-webkit-animation: slide-bck-top 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: slide-bck-top 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}
@-webkit-keyframes slide-bck-top {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
  }
  100% {
    -webkit-transform: translateZ(-400px) translateY(-200px);
            transform: translateZ(-400px) translateY(-200px);
  }
}
@keyframes slide-bck-top {
  0% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
  }
  100% {
    -webkit-transform: translateZ(-400px) translateY(50px);
            transform: translateZ(-400px) translateY(50px);
  }
}

</style>
