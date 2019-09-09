<template>
  <div class="chip">
    <p class="chipUIUX" v-if="this.tag === 'UI/UX'" ref="id">{{tag}}</p>
    <p class="chipAndroid" v-if="this.tag === 'Android'" ref="id">{{tag}}</p>
    <p class="chipRails" v-if="this.tag === 'Rails'" ref="id">{{tag}}</p>
    <p class="chipBase" v-if="this.tag === 'HTML/CSS/JS'" ref="id">{{tag}}</p>
    <p class="chipVue" v-if="this.tag === 'Vue.js'" ref="id">{{tag}}</p>
    <p class="chipJava" v-if="this.tag === 'Java'" ref="id">{{tag}}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: String
  }
}
</script>

<style lang="scss">
  .chip{
    display: inline;
    margin: 4px;
    height: 23px;
  }
  .chipUIUX{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #00294B;
    color: #EEEEEE; 
  }
  .chipAndroid{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #004B1A;
    color: #EEEEEE; 
  }
  .chipRails{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #4B0000;
    color: #EEEEEE; 
  }
  .chipBase{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #31004B;
    color: #EEEEEE; 
  }
  .chipVue{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #34495E;
    color: #EEEEEE; 
  }
  .chipJava{
    padding: 5px;
    font-weight: 500;
    font-size: .6em;
    display: inline;
    border: 1px solid;
    border-radius: 5px;
    background-color: #643A00;
    color: #EEEEEE; 
  }
</style>