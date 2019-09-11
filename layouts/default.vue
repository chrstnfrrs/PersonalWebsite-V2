<template>
  <div>
    <NavBar />
    <v-container class="myContainer">
      <nuxt />
    </v-container>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"

export default {
  components: {
    NavBar
  },
  head () {
    return {
      title: "Christian's Webpage"
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Bentham&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
html {
  background-color: #EEEEEE;
  
  color: #000000;
  font-family: 'Lato', sans-serif
}
body {
  padding: 0;
  margin: 0;
  font-weight: 300;
}
a{
  text-decoration: none;
}
.myContainer {
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  padding: 0;
}
</style>