import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'yj78b4u7',
  dataset: 'production',
  useCdn: true 
})