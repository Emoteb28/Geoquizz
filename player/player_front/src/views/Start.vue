<template>
  <b-container>
    <div class="center2">
      <h1 centered >Username</h1>
      <b-form class="mx-auto form"  @submit.stop.prevent="start_partie">
          
        <b-input-group prepend="@" >
          <b-input id="joueur" v-model="joueur" placeholder="Username" required/>
        </b-input-group>

        <b-button class="btn2" type="submit" variant="primary">Start</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      joueur: ""
    };
  },
  created() {
    this.retrieveSerie({
      id: this.$route.params.id
    });
  },
  methods: {
    start_partie() {
      this.startPartie({
        id: this.$route.params.id,
        joueur: this.joueur
      }).then(res => {
        this.$store.commit("retrieveToken", res.data.partie.token);
        this.$router.push("/game/" + res.data.partie.id);
      });
    }
  }
};
</script>

<style >
.center2 {
  text-align: center;
  margin-top: 100px;
}

.form {
  margin-top: 20px;
  width: 400px;
}

.btn2 {
  margin-top: 20px;
  width: 100px;
}
</style>

