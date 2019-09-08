<template>
  <div>
    <page-header title="Projects"></page-header>
    <v-layout class="cardLayout" row wrap>
      <v-flex><v-card min-height="350" md4 sm6>Hello</v-card></v-flex>
      <v-flex><v-card min-height="350" md4 sm6>Hello</v-card></v-flex>
      <v-flex><v-card min-height="350" md4 sm6>Hello</v-card></v-flex>
    </v-layout>
  </div>
</template>

<script>
import comingSoon from "~/components/comingSoon.vue"
import pageHeader from "~/components/pageHeader.vue"

export default {
  components: {
    comingSoon,
    pageHeader
  }
}
</script>

<style lang="scss">
  .v-card{
    margin: 20px;
  }
</style>