import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"

export default function Hero({ elements }) {
    const data = useStaticQuery(graphql`
    query{
        allKontentItemOverview {
            nodes {
            elements {
                hero {
                value {
                    ... on kontent_item_hero {
              elements {
                background_image {
                  value {
                    url
                    description
                    height
                    name
                    size
                    width
                  }
                  name
                  type
                }
                logo {
                  value {
                    url
                    description
                    height
                    name
                    size
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
    `);

    const hero = data.allKontentItemOverview.nodes[0].elements.hero.value[0]
    const banner = hero.elements.background_image.value[0]
    const logo = hero.elements.logo.value[0]

    return (
        <div style={{margin:'auto', backgroundColor: '#393E46'}}>
            <ImageElement 
                image={logo} 
                height='160'
                width='248'
                style={{zIndex:'1', position:'absolute', margin: 20}} 
            />
            <ImageElement 
                image={banner} 
                width='1366'
                height='500'
            />
        </div>
    )
}