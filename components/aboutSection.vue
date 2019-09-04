<template>
  <div>
    <h2>{{header}}</h2>
    <p>{{body}}</p>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    body: String
  }
}
</script>

<style lang="scss">

</style>