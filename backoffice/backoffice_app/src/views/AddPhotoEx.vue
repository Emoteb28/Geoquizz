<template>
  <v-form @submit.prevent="sendFile" enctype="multipart/form-data">
    <v-container>
      <v-layout>
        <v-flex xs12 md12>
          <v-flex xs10>
            <div id="map">
              <l-map :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng.sync="marker" :draggable="drag"></l-marker>
              </l-map>
            </div>
          </v-flex>
          <v-flex xs10>
            <v-text-field
              name="desc"
              label="Description"
              id="desc"
              v-model="desc"
              type="text"
              required
            ></v-text-field>
          </v-flex>

          <input type="file" @change="selectFile" ref="file">

          <div>
            <v-btn type="submit" depressed color="primary">Ajouter</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
import axios from "axios";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  data: () => ({
    file: "",
    desc: "",
    lon: "",
    lat: "",
    zoom: 13,
    center: L.latLng(48.354654, 6.324654),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(48.354654, 6.324654),
    drag: true,
    interval: false
  }),
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      
      let fd = new FormData();
      fd.append("image", this.file);
      fd.append("desc", this.desc);
      fd.append("lat", this.marker.lat);
      fd.append("lng", this.marker.lng);

      this.$store
        .dispatch("createPhotoS", {
          fd: fd,
          id: this.$route.params.id
        })
        .then(response => {
          this.$router.push({ name: "series" });
        });
    }
  },
  created() {
    this.$store.dispatch("retrieveSerie", { id: this.$route.params.id });
    this.center = L.latLng(this.Serie.lat, this.Serie.lng);
    this.marker = L.latLng(this.Serie.lat, this.Serie.lng);
  },
  computed: {
    Serie() {
      return this.$store.getters.getSerie;
    }
  }
};
</script>


<style scoped>
#map {
  height: 50vh;
  max-width: 100%;
  margin: auto;
  padding: 0;
  border-radius: 5%;
}




</style>
