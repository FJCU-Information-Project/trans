
<template>
  <div id="index">
    <h3 id="title">TRANS</h3>
    <router-link id="entryPoint" to="/Home">Entry</router-link>
  </div>
  <img id="road" src="../assets/svg/road.svg" alt="">
  <img id="moutain" src="../assets/svg/moutain.svg" alt="">
  <img id="redcar" src="../assets/svg/redcar.svg" alt="">
  <img id="bluecar" src="../assets/svg/bluecar.svg" alt="">
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>

<script>
export default {
    name: "Index",
};
</script>



<style lang="scss">
body{
  background-color: #D6C7A6;
}

@mixin svg($bottom,$size,$layer){
  position: absolute;
  bottom: $bottom;
  width: $size;
  z-index: $layer;
}
#road{
  @include svg(0,100%,-2);
  left: 0;
}
#moutain{
  @include svg(0,40vw,-1);
  left: 0;
}
#redcar{
  @include svg(5vw,25vw,-1);
  right: 30vw;
}
#bluecar{
  @include svg(11vw,25vw,-1);
  right: 5vw;
}
#index {
  margin: 30vh auto 0;
  width: 80%;
  #title{
    color: white;
    font-size: 500%;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
  }
  #entryPoint {
    margin-top: 4em;
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