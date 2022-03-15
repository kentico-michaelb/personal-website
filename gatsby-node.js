exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
        allKontentItemPost {
          edges {
            node {
              elements {
                url {
                  value
                }
              }
            }
          }
        }
        allKontentItemCategory {
          edges {
            node {
              elements {
                url {
                  value
                }
              }
            }
          }
        }
      }
    `)

    data.allKontentItemPost.edges.forEach(edge => {
      const slug = edge.node.elements.url.value
      actions.createPage({
        path: `/posts/${slug}`,
        component: require.resolve(`./src/templates/post.js`),
        context: { slug: slug },
      })
    })

    data.allKontentItemCategory.edges.forEach(edge => {
      const slug = edge.node.elements.url.value
      actions.createPage({
        path: `/${slug}`,
        component: require.resolve(`./src/templates/category.js`),
        context: { slug: slug },
      })
    })
  }