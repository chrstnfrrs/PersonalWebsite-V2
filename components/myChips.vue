<template>
  <div class="chipContainer">
    <aChip v-for="item of items" v-bind:key="item.tag" :tag="item" > </aChip>
  </div>
</template>

<script>
import aChip from '~/components/aChip.vue'

export default {
  props: {
    tags: Array
  },
  data: function () {
    return {
      items: this.tags
    }
  },
  mounted() {
    console.log(`Tags ${this.tags}`);
  },
  components: {
    aChip
  }
}
</script>

<style lang="scss">
  .chipContainer{
    padding: 0px 16px;
    height: 23px;
  }
</style>