<template>
<div>
  <v-layout id="layout" v-if="PhotoSerie" row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="Photo in PhotoSerie" :key="Photo.id">
      <v-flex xs5>
        <div class="title mb-1">{{Photo.desc}}</div>
        <v-layout column>
          <div class="subheading">Matching</div>          
          <v-img :src="'http://api.backoffice.local:10080/uploads/' + Photo.url" aspect-ratio="1.7"></v-img>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-layout>
  <router-link tag="a" to="">
    <v-btn id="btnAff" flat>Ajouter une photo</v-btn>
  </router-link>
    <router-link tag="a" :to="'/addPhotoEx/' + this.$route.params.id">
    <v-btn id="btnAff" class="teal">Ajouter une photo externe <v-icon color="white">cloud_upload</v-icon>  </v-btn>
  </router-link>
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
      center: L.latLng(
        48.31231,
        6.321324
      ),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(
        48.31231,
        6.321324
      ),
      drag: true,
      interval: false
  }),
  created() {
    this.$store.dispatch("retrievePhotoSerie", { id: this.$route.params.id });
  },
  computed: {
    PhotoSerie() {
      return this.$store.getters.getPhotoSerie;
    }
  }
};
</script>

<style lang="scss">
#layout{
  margin-left: 2%;
  margin-top: 2%;
}


</style>
