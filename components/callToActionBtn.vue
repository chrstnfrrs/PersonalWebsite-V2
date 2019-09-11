<template>
  <div>
    <nuxt-link to="/projects">
      <v-btn :tile='value'>
        {{text}}
      </v-btn>
      </nuxt-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: true
    }
  },
  props: {
    text: String
  }
}
</script>

<style lang="scss">
  button{
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px;
    font-size: 20px;
    border: 1px solid #020205;
    color: #020205;
  }
</style>