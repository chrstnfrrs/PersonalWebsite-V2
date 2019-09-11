<template>
  <div>
    <pageHeader title="About Me"> </pageHeader>
    <aboutSection v-for="item in items" v-bind:key="item.header" 
    :header="item.header" :body="item.body" 
    :myClass="item.myClass"> </aboutSection>
  </div>
</template>

<script>
import aboutSection from "~/components/aboutSection.vue"
import comingSoon from "~/components/comingSoon.vue"
import pageHeader from '~/components/pageHeader.vue'

export default {
  data: function () {
    return {
      items: [
        {
          header: 'My Journey with Vue',
          body: "Body",
          myClass: "aboutBody-1"
        },
        {
          header: 'My Favorite',
          body: "Body",
          myClass: "aboutBody-2"
        },
        {
          header: 'Contact Me',
          body: 'I routinely post stuff about my life on my life, development, and design on various social platforms. Check them out if you want to know more! Or if you just want to get in touch, send me an email.',
          myClass: "aboutBody-1"

        }
      ]
      
    }
  },
  components: {
    comingSoon,
    aboutSection,
    pageHeader
  }
}
</script>

<style lang="scss">
  h1{
    display: inline-block;
  }
</style>