<template>
  <v-layout class="myLayout" row wrap>
    <v-flex class="block" xs12 sm6>
      <div class="imageBlock">
        <img class="myImage" src="~/assets/images/sample.jpg" >
      </div>
    </v-flex>
    <v-flex class="block" xs12 sm6>
      <h1>Hello, I'm Christian Farris. I'm a Computer Science student at UW-Madison.</h1>
      <callToActionBtn> </callToActionBtn>
    </v-flex>
  </v-layout>
</template>

<script>
import callToActionBtn from "~/components/callToActionBtn.vue"

export default {
  components: {
    callToActionBtn
  }
}
</script>

<style lang="scss">
h1{
    font-weight: 300;
    font-size: 48px;
}
.myLayout{
  padding-top: 60px;
  height: 100%;
}
.block{
  padding: 20px;
}
.imageBlock {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.myImage {
  object-fit: cover;
  object-position: 60% 50%;

  width: 100%;
  height: 450px;
}
.testClass {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
