<template>
  <nav>
    <!-- <div id="nameTitle">
      <nuxt-link to="/">Christian Farris</nuxt-link>
    </div> -->
    <div id="navLinksContainer">
      <nuxt-link to="/" class="navLink">Home</nuxt-link>
      <nuxt-link to="/blog" class="navLink">Blog</nuxt-link>
      <nuxt-link to="/projects" class="navLink">Projects</nuxt-link>
      <nuxt-link to="/about" class="navLink">About</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  background-color: #020205;
  color: #EEEEEE;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  font-size: 18px;
  
}
nav a {
  color: #EEEEEE;
}
#nameTitle {
  display: inline;
  padding-left: 30px;
  font-size: 26px;
  font-family: 'Bentham'; 
}
#navLinksContainer {
  width: auto;
  display: inline-block;
  // float: right;
  // padding-right: 30px;
  padding-left: 10%;

}
.navLink {
  padding-left: 6px;
}
</style>
