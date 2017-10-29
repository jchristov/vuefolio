<template>
  <div id="app">
  <router-link v-bind:to="'/'">Portfolio</router-link>
  <router-link v-bind:to="'/wallets'">Wallets</router-link>
  <router-link v-bind:to="'/exchanges'">Exchanges</router-link>
  <router-link v-bind:to="'/settings'">Settings</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:visited { text-decoration: none; color:black; }
a:hover { text-decoration: none; color:black; }
a:focus { text-decoration: none; color:black; }
a:hover, a:active { text-decoration: none; color:black }
</style>