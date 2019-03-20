<template>
  <v-container>
    <div>
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
    </div>

  </v-container>
</template>


<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  data: () => ({
    city: "",
    lat: null,
    lon: null,
    dist: null,
    zoom: 13,
    center: L.latLng(30, 30),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(30, 30),
    drag: true,
    photoIndex: 0,
    time: 0,
    interval: false,
    score: 0
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
          this.$router.push({ name: "series" });
        });
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
};
</script>

<style lang="scss">
#map {
  height: 100%;
  max-width: 100%;
  margin: auto;
  padding: 0;
  border-radius: 5%;
}
.top2 {
  margin-top: 2%;
  font-size: 1.3em;
}

#row,
#row2 {
  width: 95%;
  margin-left: 2%;
  margin-top: 3%;
}

#col1,
#col2 {
  margin: 0;
  padding: 0;
}
</style>
