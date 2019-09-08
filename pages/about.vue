<template>
  <div>
    <pageHeader title="About Me"> </pageHeader>
    <aboutSection v-for="item of items" v-bind:key="item.header" :header="item.header" :body="item.body"> </aboutSection>
  </div>
  <!-- <coming-soon></coming-soon> -->
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
          body: "Body"
        },
        {
          header: 'My Journey with Vue',
          body: "Body"
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