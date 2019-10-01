import intro from './topics/intro.mdx'
import gatsbyOverview from './topics/gatsby-overview.mdx'
import features from './topics/features.mdx'
import demo from './topics/demo.mdx'
import qAndA from './topics/q-and-a.mdx'
import conclusion from './topics/conclusion.mdx'
import writtingPosts from './topics/writing-posts.mdx'

export { default as theme } from 'gatsby-mdx-theme'
export default [
  ...intro,
  ...gatsbyOverview,
  ...features,
  ...demo,
  ...writtingPosts,
  ...qAndA,
  ...conclusion
]
