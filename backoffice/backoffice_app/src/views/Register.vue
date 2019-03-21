<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Geoquizz</h1>
        <h4 class="subheading">BackOffice Administration</h4>
      </v-layout>
    </v-parallax>
    <v-container align-center justify-center>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm6>
          <v-card class="elevation-8">

            <!-- Login/Signin -->
            <v-layout row align-center justify-center class="py-5">
              <v-form @submit.prevent="register">
                <!-- <v-layout row> -->
                <v-flex xs12>
                  <h1 class="text-xs-center mb-5">S'enregistrer</h1>
                  <v-text-field
                    name="fullname"
                    label="Prenom"
                    id="fullname"
                    v-model="fullname"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                      
                    name="password"
                    label="Mot de passe"
                    id="password"
                    v-model="password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 class="py-3">
                  <div class="text-xs-center">
                    <v-btn outline  type="submit">S'enregistrer
                      <v-icon right>add</v-icon>
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
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      fullname:""
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
          fullname : this.fullname
        })
        .then(response => {        
            this.$router.push({ name: 'login' })
        });
    }
  }
};
</script> 