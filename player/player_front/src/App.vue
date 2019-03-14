<template>
  <div id="app">
    <div id="nav">
    <!--   <NavBar /> -->
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
