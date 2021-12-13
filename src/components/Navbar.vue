

<template>
  <nav>
    fhlgeoh
  </nav>
</template>

<!-- navbar template
<template>
  <nav>
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="`/page${i}`">Page{{ i }}</router-link>
      </li>
    </ul>
  </nav>
</template>
-->

<!-- script 
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
-->

<style lang="scss">
  nav{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 10em 0;
    background-color: #ff0;
  }
  // 原navbar scss
  // nav{
  //   width: 100%;
  //   height: 3em;
  //   padding: 0 2em !important;
  //   box-sizing: border-box;
  //   margin: auto;
  //   display: flex !important;
  //   align-items: center;
  //   justify-content: flex-end;
  //   background-color: #3a3a3a;
  //   color: white;
  //   letter-spacing: 4px;
  //   text-transform: uppercase;
  //   ul{
  //     display: flex;
  //     justify-content: space-around;
  //     li{
  //       margin-left: 2.5em;
  //       list-style: none;
  //       a{
  //         text-decoration: none;
  //         color: white;
  //         &:hover{
  //           color: #d6c7a6;
  //         }
  //       }
  //     }
  //   }
  // }
  
</style>
