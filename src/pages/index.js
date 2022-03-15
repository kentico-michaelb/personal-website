import React from "react"
import { graphql } from 'gatsby';

import BasicChunk from "../components/BasicChunk"
import Layout from "../components/Layout"

const IndexPage = ({data}) => {
  const content = data.allKontentItemOverview.nodes[0].elements.content.value
  //Who Am I is included in Layout
  const chunks = content.filter(item => (item.system.codename !=='who_am_i'))

  //Misc. chunks can be dynamically added
  return (
    <Layout>
      {chunks &&
        chunks.map(chunk => {
          return <BasicChunk chunk={chunk} key={chunk.system.id}/>
        })  
      }
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
              id
              system {
                type
                id
                codename
              }
              elements {
                header {
                  value
                }
                body {
                  value
                  modular_content {
                    system {
                      codename
                      id
                      type
                    }
                    ... on kontent_item_media {
                      id
                      elements {
                        asset {
                          name
                          type
                          value {
                            description
                            height
                            name
                            size
                            type
                            url
                            width
                          }
                        }
                      }
                      system {
                        id
                        codename
                      }
                    }
                  }
                  links {
                    url_slug
                    codename
                    type
                  }
                  images {
                    description
                    height
                    image_id
                    url
                    width
                  }
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
