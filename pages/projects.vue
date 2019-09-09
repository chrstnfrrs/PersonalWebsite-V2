<template>
  <div>
    <page-header title="Projects"></page-header>
    <v-layout class="cardLayout" row wrap>
      <my-card v-for="project of projects" v-bind:key="project.title" :title="project.title" :tags="project.tags" :description="project.description"></my-card>
    </v-layout>
  </div>
</template>

<script>
import pageHeader from "~/components/pageHeader.vue"
// import myChips from "~/components/myChips.vue"
import myCard from "~/components/myCard.vue"

export default {
  components: {
    pageHeader,
    // myChips,
    myCard
  },
  data: function () {
    return {
      projects: [
        {
          title: 'Erin Tallard Fitness',
          tags: ['UI/UX', 'Vue.js'],
          description: 'The platform utilized by Erin Tallard Fitness to help and advocate for individuals to strive for practical and sustainable fit lifestyles.'
        },
        {
          title: 'Personal Site - V2',
          tags: ['UI/UX', 'Vue.js'],
          description: 'A webpage utlized to develop my personal brand, share my experiences, and showcase my work.'
        },
        {
          title: 'Kohls Shark Tank',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'Amazon Alexa skill to advocate for the usage and potential of voice assistants along with voice user interfaces in retail.'
        },
        {
          title: 'Kohls Starlight',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'A Google Cloud Platform budget monitoring web application.'
        },
        {
          title: 'Research Grants Database',
          tags: ['Rails', 'UI/UX'],
          description: 'Web application to submit and reward research grants.'
        },
        {
          title: 'GadCalc',
          tags: ['Android','UI/UX'],
          description: 'An application for university physicians to calculate dosages using medical guidelines.'
        }, 
        {
          title: 'Personal Site - V1',
          tags: ['HTML/CSS/JS'],
          description: 'A website to display my computer science and graphic design projects.'
        },
        {
          title: 'Sudoku CLI',
          tags: ['Java'],
          description: 'A command line interface version of sudoku with brute force puzzle solving capabilities.'
        },
      ]
      
    }
  }
  
}
</script>

<style lang="scss">
  
</style>