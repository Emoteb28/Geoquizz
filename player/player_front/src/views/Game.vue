<template>

  <b-row id="row">
    <b-col id="col1">
      <div class="mx-auto">
        <b-img id="image" :src="'http://api.player.local:10081/uploads/'+photos[1].url" fluid alt="Responsive image" />
      </div>
    </b-col>
    <b-col id="col2">
        <div id="map">
          <l-map :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng.sync="marker" :draggable="drag"></l-marker>
          </l-map>
          </div>
    </b-col>
  </b-row>

</template>


<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'Game',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    created() {
      this.retrievePartie({
           id: this.$route.params.id
         });

      this.retrievePhotos({
           id: this.$route.params.id
         });
    },
    data() {
      return {
        zoom:13,
        center: L.latLng(this.$store.state.serie.lat, this.$store.state.serie.lng),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(this.$store.state.serie.lat, this.$store.state.serie.lng),
        drag: true
      }
    },
    computed: {
        photos(){
          return this.$store.state.photos;
        } 
    }
}
</script>

<style >
#map, #image {
  height: 70vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

#row {
  margin-top: 10px;
  margin-left: 10px;
  width: 98vw;
}

#col1, #col2 {
  margin: 0;
  padding: 0;
}
</style>

