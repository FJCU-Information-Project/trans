<template>
    <Navbar />
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <iframe :src="src" frameborder="0"></iframe>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  data (){
    return {
      src : 'http://127.0.0.1:5000/'
    }
  },
  name: "Home" ,
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
iframe{
  width: 80%;
  height: 90vh;
}
</style>
