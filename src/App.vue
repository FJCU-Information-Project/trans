<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    // setInterval(() => {
    //   this.$http
    //   .get("http://140.136.155.121:50000", {
    //     timeout: 1000
    //   })
    //   .then()
    //   .catch(error => {
    //     console.log(error);
    //     this.$notify({
    //       title: '後端未連線或失去連線',
    //       duration: 2000,
    //       message: error,
    //       type: 'error',
    //     });
    //   });
    // }, 5000);
    
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
