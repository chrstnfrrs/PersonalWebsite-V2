<template>
  <div>
    <h1>{{thisPost.title}}</h1>
    <!-- <h2>{{thisPost.slug.current}}</h2> -->
    <div v-for="(text, i) in thisPost.body" :key=i>
      <p>{{text.children[0].text}}</p>
    </div>
    <!-- <h2>{{thisPost.body[1]}}</h2> -->
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'

let slug = "blog-post-1";

const query = groq`
{
  "thisPost": *[_type == "post" && slug.current == "blog-post-1"][0]
}
`

export default {
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>