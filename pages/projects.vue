<template>
  <div>
    <page-header title="Projects"></page-header>
    <v-layout class="cardLayout" row wrap>
      <my-card v-for="project of projects" v-bind:key="project.title" :title="project.title" :tags="project.tags" :description="project.description" :img="project.image"></my-card>
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
          description: 'The platform utilized by Erin Tallard Fitness to help and advocate for individuals to strive for practical and sustainable fit lifestyles.',
          image: "https://i.imgur.com/MpZ67ir.jpg"
        },
        {
          title: 'Personal Site - V2',
          tags: ['UI/UX', 'Vue.js'],
          description: 'A webpage utlized to develop my personal brand, share my experiences, and showcase my work.',
          image: "https://i.imgur.com/Pu621HW.jpg"
        },
        {
          title: 'Kohls Shark Tank',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'Amazon Alexa skill to advocate for the usage and potential of voice assistants along with voice user interfaces in retail.',
          image: "https://i.imgur.com/2HBK9Sq.jpg"
        },
        {
          title: 'Kohls Starlight',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'A Google Cloud Platform budget monitoring web application.',
          image: "https://i.imgur.com/LVtzhcA.jpg"
        },
        {
          title: 'Research Grants Database',
          tags: ['Rails', 'UI/UX'],
          description: 'Web application to submit and reward research grants.',
          image: "https://i.imgur.com/limROcK.jpg"
        },
        {
          title: 'GadCalc',
          tags: ['Android','UI/UX'],
          description: 'An application for university physicians to calculate dosages using medical guidelines.',
          image: "https://i.imgur.com/xugf1iW.jpg"
        }, 
        {
          title: 'Personal Site - V1',
          tags: ['HTML/CSS/JS'],
          description: 'A website to display my computer science and graphic design projects.',
          image: "https://i.imgur.com/JLLsx5s.jpg"
        },
        {
          title: 'Sudoku CLI',
          tags: ['Java'],
          description: 'A command line interface version of sudoku with brute force puzzle solving capabilities.',
          image: "https://i.imgur.com/tqOwDoV.jpg"
        },
      ]
      
    }
  }
  
}
</script>

<style lang="scss">
  
</style>