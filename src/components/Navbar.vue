<template>
  <ul>
    <li v-for="i in 5" :key="i">
      <router-link class="navbarItems" :to="`/page${i}`">Page{{ i }}</router-link>
    </li>
  </ul>
  <h3>Hello I'm navbar</h3>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Navbar" ,
  data(){
    var path = this.$route.params.path;
    return {
      path,
    }
  }
};
</script>

<style lang="scss">

</style>
