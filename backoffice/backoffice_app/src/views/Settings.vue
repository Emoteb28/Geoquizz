<template>
  <v-container>
    <div>
      <v-container class="slide-bck-top">
        <h6 class="display-3">Modifier la série</h6>
        <v-form @submit.prevent="updateSerie" ref="form">
          <v-text-field v-model="city" label="Ville" required></v-text-field>

          <div id="map">
              <l-map :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng.sync="marker" :draggable="drag"></l-marker>
              </l-map>
            </div>

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
    dist: null,
    zoom: 13,
    center: L.latLng(48.354654, 6.3214534),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(48.354654, 6.3214534),
    drag: true,
    photoIndex: 0,
    time: 0,
    interval: false,
    score: 0
  }),
  methods: {
    updateSerie() {
      this.$store
        .dispatch("updateSerie", {
          id: this.$route.params.id,
          city: this.city,
          lat: this.marker.lat,
          lng: this.marker.lng,
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
  },
  created() {
      this.$store.dispatch("retrieveSerie", { id: this.$route.params.id })
      .then(res => {
        this.center = L.latLng(res.data.serie.lat, res.data.serie.lng);
      this.marker = L.latLng(res.data.serie.lat, res.data.serie.lng);
      this.dist = res.data.serie.dist;
      this.city = res.data.serie.ville;
      });
      
  },
  computed: {
    Serie() {
      this.dist = 'test';
      return this.$store.getters.getSerie;
    }
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

#map {
  height: 50vh;
  max-width: 100%;
  margin: auto;
  padding: 0;
  border-radius: 5%;
}



</style>
