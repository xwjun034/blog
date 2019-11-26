<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'PingHei', 'PingFang SC', Helvetica Neue, 'Work Sans', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #565654;
  height:100%;
  font-size:14px;
}
html,body{height:100%;max-height:100%;padding:0;margin:0;}
</style>
