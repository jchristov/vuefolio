<template>
  <div id="app">
  <router-link v-bind:to="'/'">Portfolio</router-link>
  <router-link v-bind:to="'/wallets'">Wallets</router-link>
  <router-link v-bind:to="'/exchanges'">Exchanges</router-link>
  <router-link v-bind:to="'/manual'">Manual Entry</router-link>
  <router-link v-bind:to="'/settings'">Settings</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
@import "../webfont/cryptocoins.css";
@import "../webfont/cryptocoins-colors.css";

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

ul {
  width: 40%;
  text-align: center;
}

table{
  margin: auto;
  width: 60%;
  vertical-align: top;
  /* border: 1px solid #CCC; */
  border-collapse: collapse;
}

th.str, td.str {
  text-align: left;
}

th.nr, td.nr {
  text-align: right;
}

td, tr {
  vertical-align: top;
}

.input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  /* width: 50px; */
  color: #42b983;
}

.fa:hover {
    color: #42b983;
}

a, a:hover {
  color: #42b983;
}

.largeicon {
  font-size: 1.5em; 
}

tr.blank_row
{
    height: 10px !important; /* overwrites any other rules */
    background-color: #FFFFFF;
}

</style>