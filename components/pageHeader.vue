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
    padding-top: 20px;
    height: 100%;
    width: 100%;
    padding-bottom: 10px;
  } 
  h1{
    text-align: center;
    font-weight: 300;
    width: 100%;
    font-size: 48px;
  }
</style>