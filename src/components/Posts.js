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
        <div>
            {posts &&
                posts.map(post => (
                    <PostCard post={post} key={post.system.id}/>
                ))}
        </div>
    )
}