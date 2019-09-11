<template>
  <div v-bind:class="myClass">
    <h2>{{header}}</h2>
    <p>{{body}}</p>
    <contactMe v-if="this.header === 'Contact Me'"> </contactMe>
  </div>
</template>

<script>
import contactMe from '~/components/contactMe.vue'
export default {
  components: {
    contactMe
  },
  props: {
    header: String,
    body: String,
    myClass: String
  }
}
</script>

<style lang="scss">
  .aboutBody-1{
    width: 100%;
    text-align: left;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 3px solid #EEEEEE;
  }
  .aboutBody-2{
    margin-left: 25%;
    width: 75%;
    text-align: right;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 3px solid #EEEEEE;
  }
</style>