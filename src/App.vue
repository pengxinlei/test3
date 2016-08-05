<template>
 <!--  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
  </div> -->
  <top-header></top-header> 
  <router-view></router-view> 
</template>

<script>
import Hello from './components/Hello'
import topHeader from './components/topHeader'
export default {
  components: {
    Hello,
    topHeader
  }
}
</script>
<style lang="less">
   @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
   @import url("css/base.less");
</style>
<style>
html {
  height: 100%;
}

body {
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
