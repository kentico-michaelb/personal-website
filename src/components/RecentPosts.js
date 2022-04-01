import React from 'react'

import PostCard from './PostCard'
import { useAllPosts } from '../hooks/use-all-posts'

export default function RecentPosts(){
    const [ allKontentItemExternalArticle, allKontentItemPost ] = useAllPosts()

    const personalPosts = allKontentItemPost.nodes
    const professionalPosts = allKontentItemExternalArticle.nodes
    const recentPosts = professionalPosts.concat(personalPosts)

    recentPosts.sort((pro, per) => pro.elements.date.value - per.elements.date.value).reverse()
    const latest = recentPosts.slice(0,3)

    return (
        <div className='mt-8'>
            <h1>Recent Posts</h1>
                <div className='grid md:grid-cols-3 lg:grid-cols-3 lg:gap-8 justify-items-center'>
                {latest &&
                    latest.map((post) =>(
                        <div key={post.system.id}
                        className='lg:col-span-1'
                        >
                            <PostCard post={post}/>
                        </div>
                        )
                    )
                }
                </div>
        </div>
    )
}