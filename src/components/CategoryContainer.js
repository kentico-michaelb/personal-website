import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function CategoryContainer(){
    const categories = useStaticQuery(graphql`
    query{
        allKontentItemCategory {
                nodes {
                    elements {
                        title {
                        value
                        }
                        url {
                        value
                        }
                    }
                    system {
                        id
                        type
                        codename
                    }
                }
        }
    }
    `)
    return (
        <div>
            {categories &&
                categories.allKontentItemCategory.nodes.map(category => {
                return (
                    <Link to={`/${category.elements.url.value}`} key={category.system.id}>
                        <h1>{category.elements.title.value}</h1>
                    </Link>)
                })
            }
        </div>
    )
}