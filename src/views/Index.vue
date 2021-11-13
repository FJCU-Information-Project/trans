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
  <img id="moutain" src="../assets/svg/moutain.svg" alt="">
  <!-- <svg id="moutain">
    <polyline points="135 40, 85 100, 185 100" fill="#a3a87f"/>
    <polyline points="65 0, 0 100, 130 100" fill="#5b6c5b"/>
  </svg> -->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>


<style lang="scss">
body{
  background-color: #D6C7A6;
}
#moutain{
  position: absolute;
  fill: black;
  bottom: 0;
  left: 0;
  width: 40vw;
}
#index {
  margin-top: 30vh;
  #title{
    color: white;
    font-size: 6em;
    letter-spacing: 1em;
    text-indent: 1em;
  }
  #entryPoint {
    letter-spacing: 0.5em;
    text-indent: 0.5em;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: white;
    display: inline-block;
    background-color: #655A65;
    box-sizing: border-box;
    padding: 0.5em 1.5em;
    border-radius: 3em;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>