<template>
  <v-flex xs12 sm12 md6 lg6 xl3>
    <!-- <v-hover>
      <template v-slot="{ hover }"> -->
        <v-card color="#020205" elevation="2" max-width="350px" class="myCard">
        <!-- <div class="myCard elevation-2"> -->
        <!-- <div
          :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing"
        > -->
          <div class="cardImage">
            <img class="portImage" src="~/assets/images/test.jpg" >
          </div>
          <div class="cardText">
            <div class="cardHeader">
              <h1 class="cardHeaderText">{{title}}</h1>
            </div>
            <myChips :tags="mytags"> </myChips>
            <p class="cardDesc">{{description}}</p>
          </div>
        </div>
        </v-card>
      <!-- </template>
    </v-hover> -->
    <!-- </div> -->
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
    color: #EEEEEE;
  }
  .cardHeaderText{
    font-size: 1.2em;
    font-weight: 400;
    height: 23px;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .cardDesc{
    padding: 8px 16px 0px 16px;
    height: 71px;
    font-size: .8em;
    overflow: hidden;
    color: #EEEEEE;
  }
  .myCard{
    border-radius: 10px;
    margin: 20px;
    height: 350px;
    max-width: 350px;
    width: calc(100%-40px);
    background-color: #202020;
    display: block;
    margin-right: auto;
    margin-left: auto;
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
    overflow: hidden;
  }
  .portImage{
    object-fit: cover;
    object-position: 50% 50%;
    height: 197px;
    border-radius: 8px;
    width: calc(100% - 8px);
    margin: 4px;
  }
</style>