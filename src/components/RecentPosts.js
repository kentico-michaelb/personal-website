import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import PostCard from './PostCard'

export default function RecentPosts(){
    const data = useStaticQuery(graphql`
        query{
            allKontentItemExternalArticle(sort: {fields: elements___date___value}) {
                nodes {
                elements {
                    title {
                    value
                    }
                    date {
                    value
                    }
                    host {
                    value {
                        name
                    }
                    }
                }
                system {
                    id
                    type
                }
            }
            }
            allKontentItemPost(sort: {fields: elements___date___value}) {
                nodes {
                elements {
                    category {
                    value {
                        name
                    }
                    }
                    date {
                        value(formatString: "MMMM Do, YYYY")
                    }
                    title {
                    value
                    }
                    topic {
                    value {
                        name
                    }
                    }
                }
                system {
                    id
                    type
                }
                }
            }
        }
    `)

    const personalPosts = data.allKontentItemPost.nodes
    const professionalPosts = data.allKontentItemExternalArticle.nodes
    const recentPosts = professionalPosts.concat(personalPosts)

    recentPosts.sort((pro, per) => pro.elements.date.value - per.elements.date.value).reverse()
    const latest = recentPosts.slice(0,3)

    return (
        <div>
            <h1>Recent Posts</h1>
            {latest &&
                latest.map((post) =>(
                    <div key={post.system.id}>
                        <PostCard post={post}/>
                    </div>
                    )
                )
            }
        </div>
    )
}