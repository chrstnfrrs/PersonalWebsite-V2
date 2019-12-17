<template>
  <div>
    <!-- <comingSoon> </comingSoon> -->
    <ul>
      <li v-for="p in post" :key="p._id">
        <nuxt-link :to="{ path: `/blog/${p.slug.current}` }">
          <h2>{{ p.title|| 'Secret Post'}}</h2>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import comingSoon from "~/components/comingSoon.vue"
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = `
{
  "post": *[_type == "post"]| order(releaseDate desc) | order(_createdAt asc)
}
`
export default {
  // components: {
  //   comingSoon
  // },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style lang="scss">
  ul{
    list-style: none;
  }
</style>