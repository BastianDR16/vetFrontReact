<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import indexCliente from './components/indexCliente.vue'
// import editCliente from './components/editCliente.vue'

export default {
  name: 'App',
  components: {
    // indexCliente,
    // editCliente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
