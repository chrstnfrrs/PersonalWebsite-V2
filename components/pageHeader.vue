<template>
  <div class="myLayout">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  .myLayout{
    padding-top: 60px;
    height: 100%;
  } 
  h1{
    font-weight: 300;
    font-size: 48px;
  }
</style>