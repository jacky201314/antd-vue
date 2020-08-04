<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
export default {
  name: 'App',
  components: {Footer, Header}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
