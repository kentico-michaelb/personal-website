import React from 'react'
import PostCard from './PostCard'
import { useAllPosts } from '../hooks/use-all-posts'

export default function Posts({ type }){
    const [ allKontentItemExternalArticle, allKontentItemPost ] = useAllPosts()
    let posts

    if(type === 'professional'){
        posts = allKontentItemExternalArticle.nodes
    }
    else{
        posts = allKontentItemPost.nodes
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
            {posts &&
                posts.map(post => (
                    <div key={post.system.id}>
                        <PostCard post={post} key={post.system.id}/>
                    </div>
                ))}
        </div>
    )
}