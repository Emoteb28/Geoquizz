<template>
  <div>
    <h1 class="center">{{Serie.ville}}</h1>
    <v-flex xs12 sm12 md12 lg12 class="center">
      <router-link tag="a" to>
        <v-btn id="btnAff" flat>Ajouter une photo</v-btn>
      </router-link>
      <router-link tag="a" :to="'/addPhotoEx/' + this.$route.params.id">
        <v-btn id="btnAff" class="teal">
          Ajouter une photo externe
          <v-icon color="white">cloud_upload</v-icon>
        </v-btn>
      </router-link>
      
    </v-flex>
    <v-layout id="layout" v-if="PhotoSerie" row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="Photo in PhotoSerie" :key="Photo.id">

      <v-card id="card">
        <v-img :src="'http://api.backoffice.local:10080/uploads/' + Photo.url" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{Photo.desc}}</div>
            <span class="grey--text"></span>
          </div>
        </v-card-title>

      </v-card>
    </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Serie",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    zoom: 13,
    center: L.latLng(48.31231, 6.321324),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(48.31231, 6.321324),
    drag: true,
    interval: false
  }),
  created() {
    this.$store.dispatch("retrievePhotoSerie", { id: this.$route.params.id });
    this.$store.dispatch("retrieveSerie", { id: this.$route.params.id });
  },
  computed: {
    PhotoSerie() {
      return this.$store.getters.getPhotoSerie;
    },
    Serie() {
      return this.$store.getters.getSerie;
    }
  }
};
</script>

<style lang="scss">
.center {
  text-align: center;
}

#layout {
  margin-right: 10px;
}
</style>
