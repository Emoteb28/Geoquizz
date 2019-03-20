<template>
  <v-card height="56">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark to="/series">
        <span>Gestion des séries</span>
        <v-icon>home</v-icon>
      </v-btn>



      <v-btn dark to="/settings">
        <span>Paramétres de partie</span>
        <v-icon>build</v-icon>
      </v-btn>
      <v-flex xs1 sm1>
            <v-btn flat icon color="dark" to="/logout">
              <span>Deconnexion</span>
              <v-icon>logout</v-icon>
            </v-btn>
      </v-flex>

    </v-bottom-nav>

  </v-card>
</template>

<script>
  export default {
    data: () => ({
      bottomNav: 3

    }),
    computed :  {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
    }
  }
  }
</script>

<style>

</style>
