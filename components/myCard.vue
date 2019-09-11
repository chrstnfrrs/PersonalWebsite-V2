<template>
  <v-flex xs12 sm6 md6 lg4>
    <div class="myCard">
      <div class="cardImage"></div>
      <div class="cardText">
        <div class="cardHeader">
          <h1 class="cardHeaderText">{{title}}</h1>
        </div>
        <myChips :tags="mytags"> </myChips>
        <p class="cardDesc">{{description}}</p>
      </div>
    </div>
  </v-flex>
</template>

<script>
import myChips from '~/components/myChips.vue'

export default {
  components: {
    myChips
  },
  props: {
    title: String,
    tags: Array,
    description: String
  },
  data: function () {
    return {
      mytags: this.tags
    }
  }
}
</script>

<style lang="scss">
  .cardHeader{
    padding: 16px 16px 4px 16px;
    height: 43;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cardHeaderText{
    font-size: 1.2em;
    font-weight: 400;
    height: 23px;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cardDesc{
    padding: 8px 16px 0px 16px;
    height: 71px;
    font-size: .8em;
    overflow: hidden;
  }
  .myCard{
    border-radius: 10px;
    margin: 20px;
    height: 350px;
    width: calc(100%-40px);
    background-color: #202020;
  }
  .cardText{
    height: 153px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }
  .cardImage{
    border-radius: 10px;
    height: 197px; 
    width: 100%; 
    background: #555555;
    overflow: hidden;
  }
</style>