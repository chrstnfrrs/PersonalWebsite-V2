<template>
  <div>
    <nuxt-link to="/projects">
      <button>
        {{text}}
      </button>
      </nuxt-link>
  </div>
</template>

<script>
export default {
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
    border: 1px solid #EEEEEE;
    color: #EEEEEE;
  }
</style>