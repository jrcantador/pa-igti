<template>
  <div id="app">     
    <PageHead />
    <router-view />
    <PageFooter />
  </div>
</template>
<script>  
import PageHead from "./components/PageHead.vue";
import PageFooter from "./components/PageFooter.vue";
export default {
  components: {
    PageHead,
    PageFooter
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
