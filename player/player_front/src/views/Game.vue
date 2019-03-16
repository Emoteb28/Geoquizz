<template>
<div>
  <b-row id="row">
    <b-col id="col1">
      <div class="mx-auto">
        <b-img id="image" :src="'http://api.player.local:10081/uploads/'+photos[photoIndex].url" fluid alt="Responsive image" />
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
  <b-row id="row2">
    
    <b-button  class="mx-auto" @click="valider" type="submit" variant="primary">Valider</b-button>

  </b-row>

  <h1>{{ seconds }}</h1>
  <h1>{{ marker }}</h1>
  
</div>
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

      this.startInterval()
   
    },
    mounted() {
     
     
    },
    data() {
      return {
        zoom:13,
        center: L.latLng(this.$store.state.serie.lat, this.$store.state.serie.lng),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(this.$store.state.serie.lat, this.$store.state.serie.lng),
        drag: true,
        photoIndex: 0,
        time: 0,
        interval: false,
        score: 0
      }
    },
    computed: {
        photos(){
          return this.$store.state.photos;
        },
        seconds(){
          return this.time;
        } 
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    methods: {
      valider(){
        let photoLatLng = L.latLng(this.$store.state.photos[this.photoIndex].lat, this.$store.state.photos[this.photoIndex].lng)

        let note = 0;

        let dist = photoLatLng.distanceTo([this.marker.lat,this.marker.lng]); 
       
        if( dist < this.$store.state.serie.dist ){
          note = 5;
        }else if(dist < (this.$store.state.serie.dist * 2) ){
          note = 3;
        }else if(dist < (this.$store.state.serie.dist * 3) ){
          note = 1;
        }

        if(this.time < 5){
          note *= 4;
        }else if(this.time < 10){
          note *= 2;
        }else if(this.time > 20){
          note = 0;
        }

        this.score += note;

        console.log(this.score + ' ' + note + ' ' + this.time);

        if(this.photoIndex < 9){
          this.updatePartie({
            id: this.$route.params.id,
            score: this.score
          })
            .then(res => {
                this.photoIndex++;
                this.time = 0;
                console.log( photoLatLng.distanceTo([this.marker.lat,this.marker.lng]) )
            });
        }else{
          this.retrievePartie({
                  id: this.$route.params.id
                });
          this.$router.push('/result/'+this.$route.params.id);
        }
      },
      startInterval() {
            this.interval = setInterval(() => {
                this.time++;
                
            }, 1000)
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

