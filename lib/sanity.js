const sanityClient = require('@sanity/client')

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  // useCdn === true, gives you fast response, it will gat you cached data
  // useCdn === false, gives you slower response but ALWAYS latest data
  useCdn: process.env.NODE_ENV === 'production',
}

export default sanityClient(options)