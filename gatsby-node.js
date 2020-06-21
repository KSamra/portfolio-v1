/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ProjectsJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
            image
          }
        }
      }
    }
  `)

  result.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve("./src/styles/templates/project_layout.js"),
      context: {
        //Data passed to context is available in page queries as GraphQL variables
        slug: node.slug,
        image: node.image,
      },
    })
  })
}
