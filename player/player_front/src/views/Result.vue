<template>

 <b-container>

      <div class="mx-auto top" >
          
          <b-row class="text-center">
            <b-col></b-col>
            <b-col class="score" cols="8">

                  <h1 class="size">Your Score</h1>
                  <h1 class="size" >{{ partie.score }}</h1>

                  <b-button  class="mx-auto marg" @click="keep" type="submit" variant="primary">Keep</b-button>
                  <h1></h1>
                  <b-button  class="mx-auto" id="btn3" to="/series"  type="submit" variant="primary">go to menu</b-button>
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

.size {
  font-size: 7em;
}

#btn3 {
  margin-left: 10px;
}

.marg {
  margin-right: 10px;
}

</style>

