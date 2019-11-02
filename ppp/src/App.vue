<template>
  <div id="app">
    {{#if showRouter}}
    <router-view></router-view>
    {{/if}}
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import FootNav from './components/FootNav/FootNav.vue'
export default {
  name: 'app',
  components:{
    FootNav
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  /* background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important; */
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* chrome浏览器下自动适应字体去掉 */
  -webkit-text-size-adjust:none;
}
</style>
