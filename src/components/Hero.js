import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

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
                        }
                        name
                        type
                        }
                        logo {
                        value {
                            url
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
    const bgUrl = hero.elements.background_image.value[0].url
    const logo = hero.elements.logo.value[0].url
    return (
        <div style={{margin: 'auto', position:'relative', width:'100%', backgroundColor: '#393E46'}}>
            <img 
                src={logo}
                height='160'
                width='248'
                style={{zIndex:'2', position:'absolute'}} 
            />
            <img 
                src={bgUrl}
                height='500'
                width='100%'
                style={{zIndex:'1'}}
                />
        </div>
    )
}