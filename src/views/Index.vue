<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Index" /*,
  components: {
    HelloWorld,
  },*/,
};
</script>

<template>
  <div id="index">
    <h3 id="title">TRANS</h3>
    <router-link id="entryPoint" to="/Home">Entry</router-link>
  </div>
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>


<style lang="scss">
body{
  background-color: #D6C7A6;
}
#index {
  margin-top: 30vh;
  #title{
    color: white;
    font-size: 6em;
    letter-spacing: 1em;
  }
  #entryPoint {
    font-weight: bold;
    color: white;
    background-color: #655A65;
    padding: 1em 3em;
    border-radius: 3em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>