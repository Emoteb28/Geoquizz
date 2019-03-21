<template>
  <v-app>
<v-content>
      <hello-world v-if="this.$store.state.token"></hello-world>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  },
		mounted() {
			if(!this.$store.state.token){
				this.$router.push('/login');
      }
    }
}
</script>
