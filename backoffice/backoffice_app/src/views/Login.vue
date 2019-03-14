<template>
<div>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Geoquizz</h1>
      <h4 class="subheading">BackOffice Administration</h4>
    </v-layout>
  </v-parallax>
          <v-container align-center justify-center>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 sm6>
                    <v-card class="elevation-8">
                        <!-- ERROR MESSAGE -->
                        <v-layout row v-if="error">
                            <v-flex xs12 sm6 offset-sm3>
                                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                            </v-flex>
                        </v-layout>

                        <!-- Login/Signin -->
                        <v-layout row align-center justify-center class="py-5">

                            <v-form @submit.prevent="login">

                                <!-- <v-layout row> -->
                                <v-flex xs12>
                                    <h1 class="text-xs-center mb-5">Connexion</h1>
                                    <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>
                                </v-flex>

                                <v-flex xs12>
                                    <v-text-field @tap='login' name="password" label="Mot de passe" id="password" v-model="password" type="password" required></v-text-field>
                                </v-flex>

                                <v-flex xs12 class="py-3">
                                    <div class="text-xs-center">
                                        <v-btn outline type="submit" :disabled="loading" :loading="loading">
                                            Envoyé
                                            <v-icon right>lock_open</v-icon>
                                            <span slot="loader" class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                        </v-btn>
                                    </div>

                                    <div class="text-xs-center">
                                        <v-btn color="info" dark :disabled="loading" :loading="loading" @click.prevent="onResetPassword">Reset Password By Email
                                            <v-icon right dark>email</v-icon>
                                            <span slot="loader" class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-form>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password,
      })

    }
  }
}
</script>

<style>

</style>
