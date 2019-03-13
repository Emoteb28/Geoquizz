<template>
  <div id="app">
    <div id="nav">

      <NavBar />

    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>