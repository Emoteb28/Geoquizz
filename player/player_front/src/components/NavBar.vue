<template>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/channels">GEAQUIZZ</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/channels">GAME</b-nav-item>
      <b-nav-item to="/members">SCORE</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'navBar'
}
</script>
