<template>
  <!-- <div>
    <pageHeader title="About Me"> </pageHeader>
    <aboutSection :header="sectionOne.header" :body="sectionOne.body"> </aboutSection>
  </div> -->
  <coming-soon></coming-soon>
</template>

<script>
import aboutSection from "~/components/aboutSection.vue"
import comingSoon from "~/components/comingSoon.vue"
import pageHeader from '~/components/pageHeader.vue'

export default {
  data: function () {
    return {
      sectionOne: {
        header: 'My Journey with Vue',
        body: "Body"
      }
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