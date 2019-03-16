<template>

 <b-container>

      <div class="mx-auto top" >
        
          
          <b-row class="text-center">
            <b-col></b-col>
            <b-col cols="8">

                  <h1>Your Score</h1>
                  <h1>{{ partie.score }}</h1>

                  <b-button  class="mx-auto" @click="keep" type="submit" variant="primary">Keep</b-button>
            </b-col>
            <b-col></b-col>
          </b-row>
        
        </div>
</b-container>

</template>

<script>

export default {
    name: 'Result',
    data() {
      return {
        
      }
    },
    created() {
      this.retrievePartie({
           id: this.$route.params.id
         });
    },
    methods: {
      keep(){
        this.updatePartie({
            id: this.$route.params.id,
            status: 1
          })
            .then(res => {
                this.$router.push('/scores/'+this.$store.state.serie.id);
            });
      }
    },
    computed: {
        partie(){
          return this.$store.state.partie;
        } 
    }
}
</script>

<style >

.top {
  margin-top: 100px;
}

</style>

