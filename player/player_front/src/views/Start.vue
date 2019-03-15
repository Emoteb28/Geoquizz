<template>

 <b-container class="mx-auto">

      <div class="mx-auto" >
        <b-form inline @submit.stop.prevent="start_partie">

            <label class="sr-only" for="joueur">Username</label>
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="joueur" v-model="joueur" placeholder="Username" required/>
            </b-input-group>

            <b-button type="submit" variant="primary">Start</b-button>
        </b-form>
        </div>
</b-container>

</template>

<script>

export default {
    name: 'Start',
    data() {
      return {
        joueur: ''
      }
    },
    created() {
      this.retrieveSerie({
           id: this.$route.params.id
         });
    },
    methods: {
       start_partie(){
         this.startPartie({
           id: this.$route.params.id,
           joueur: this.joueur
         }).then(res => {
           this.$store.commit('retrieveToken', res.data.partie.token);
           this.$router.push('/game/'+res.data.partie.id);
         });
      } 
    }
}
</script>

<style >


</style>

