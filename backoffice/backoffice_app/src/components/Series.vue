<template>
  <v-layout v-if="Series" row wrap>
    <v-btn id="btnAdd" to="newSerie/" fab dark color="indigo">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-flex xs12 sm6 md4 lg3 v-for="Serie in Series" :key="Serie.id">
      <v-card id="card">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Serie {{Serie.ville}}</div>
            <span class="grey--text"></span>
          </div>
        </v-card-title>

        <v-card-actions>
          <router-link tag="a" :to="path+Serie.id+'/photos'">
            <v-btn id="btnAff" flat>Afficher</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Series",
  data: () => ({
    show: false,
    path: "serie/"
  }),
  created() {
    this.$store.dispatch("retrieveSeries");
  },
  computed: {
    Series() {
      return this.$store.getters.getSeries;
    },
    Photos(){
      this.$store.getters.getSeries.forEach(element => {
        
        let photo = [];
         photo.push(this.$store.dispatch("retrievePhotoSerie", { id: element.id }))
         console.log(photo)
         
      });
     
    },
    PhotoSerie() {
      return this.$store.getters.getPhotoSerie;
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
#btnAdd {
  margin-top: 10%;
  animation-duration: 3s;
  animation-name: slidefromleft;
  margin-left: 10%;
  margin-right: 12%;
}

@keyframes slidefromleft {
  from {
    margin-left: 0%;
    
  }

  to {
    margin-left: 10%;
  }
}
</style>
