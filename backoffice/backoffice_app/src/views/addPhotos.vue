<template>
<div>
  <v-layout v-if="Photos" row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="Photo in Photos" :key="Photo.id">

      <v-card id="card">
        <v-img :src="'http://api.backoffice.local:10080/uploads/' + Photo.url" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{Photo.desc}}</div>
            <span class="grey--text"></span>
          </div>
        </v-card-title>

        <v-card-actions>
            <v-btn id="btnAff" @click="addToSerie(Photo.id)" flat>Ajouter</v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: "addPhotos",
  data: () => ({
    show: false,
    path: "serie/"
  }),
  created() {
    this.$store.dispatch("retrievePhotosNull");
    this.$store.dispatch("retrieveSerie", { id: this.$route.params.id });
  },
  computed: {
    Photos() {
      return this.$store.getters.getPhotosNull;
    },
    Serie() {
      return this.$store.getters.getSerie;
    }
  },
  methods: {
   addToSerie(photo){
       this.$store
        .dispatch("addPhotoToSerie", {
          id: this.$route.params.id,
          photo: photo
        })
        .then(response => {
          this.$router.push({ name: "series" });
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
