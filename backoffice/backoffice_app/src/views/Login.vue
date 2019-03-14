<template>
    <v-container>
        <h3 class="display-3" >Connection</h3>
  <v-form @submit.prevent="login"
    ref="form"
  >
    <v-text-field
      v-model="email"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="password"
      required
    ></v-text-field>



    <v-btn
      color="success"
      type="submit"
    >
      Connection
    </v-btn>

    
  </v-form>
  </v-container>
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
        .then(response => {
          if (this.$store.state.token != null) {
            this.$router.push({ name: 'home' })
            alert(this.$store.state.token)
          }
          
        })
    }
  }
}
</script> 