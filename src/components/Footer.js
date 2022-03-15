import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FooterLinks from './FooterLinks'

export default function Footer(){
    const data = useStaticQuery(graphql`
    query{
        allKontentItemCategory {
            nodes {
            elements {
                navigation_menu {
                value {
                    ... on kontent_item_anchor {
                    id
                    elements {
                        label {
                        value
                        }
                        value {
                        value
                        }
                    }
                    system {
                        type
                    }
                    }
                    ... on kontent_item_external_link {
                    id
                    elements {
                        label {
                        value
                        }
                        url {
                        value
                        }
                    }
                    system {
                        type
                    }
                    }
                }
                }
                title {
                value
                }
            }
            system {
                id
            }
            }
        }
    }
    `)
    const categories = data.allKontentItemCategory.nodes
    return (
        <>
            {categories &&
                categories.map(cat => (
                    <div key={cat.system.id}>
                        <h3>{cat.elements.title.value}</h3>
                        <FooterLinks links={cat.elements.navigation_menu}/>
                    </div>
                    ))
            }
        </>
    )
}