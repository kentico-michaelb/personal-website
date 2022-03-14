import * as React from "react"
import { graphql } from 'gatsby';

import BasicChunk from "../components/BasicChunk"
import CategoryContainer from "../components/CategoryContainer"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"

const IndexPage = ({data}) => {
  const content = data.allKontentItemOverview.nodes[0].elements.content.value
  const chunks = content.filter(item => (item.system.type === 'chunk'))
  const categories = content.filter(item => (item.system.type === 'category'))


  return (
    <Layout>
      {chunks &&
        chunks.map(chunk => {
          return <BasicChunk chunk={chunk} key={chunk.system.id}/>
        })
      }
      {categories &&
        categories.map(category => {
          return <CategoryContainer category={category} key={category.system.id}/>
        })
      }
      
      <RecentPosts />
      
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
query OverviewQuery {
  allKontentItemOverview {
    nodes {
      elements {
        content {
          value {
            ... on kontent_item_chunk {
              elements {
                header {
                  value
                }
                body {
                  value
                }
              }
              system {
                id
                type
              }
            }
            ... on kontent_item_category {
              system {
                id
                type
              }
              elements {
                title {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}
`
