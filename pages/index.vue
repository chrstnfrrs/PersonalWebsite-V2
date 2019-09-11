<template>
  <v-layout class="indexLayout" row wrap>
    <v-flex class="block" xs12 sm6>
      <v-card class="imageBlock">
        <v-img class="myImage" :src="images.sample" > </v-img>
      </v-card>
    </v-flex>
    <v-flex class="block" xs12 sm6>
      <h1 class="indexText">Hello, I'm Christian Farris. I'm a Computer Science student at UW-Madison.</h1>
      <callToActionBtn :text="actionText"> </callToActionBtn>
    </v-flex>
  </v-layout>
</template>

<script>
import callToActionBtn from "~/components/callToActionBtn.vue"

export default {
  components: {
    callToActionBtn
  },
  data: function () {
    return {
      actionText: "View My Work",
      images: {
        sample: require('~/assets/images/sample.jpg')
      }
    }
  }
}
</script>

<style lang="scss">
h1{
  font-weight: 300;
  font-size: 48px;
}
.indexLayout{
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
  border-radius: 2px;
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
.indexText{
  text-align: left;
}
</style>
