import React from 'react'

export default function PostCard({ post }){
    const title = post.elements.title.value
    const date = post.elements.date.value
    let tags
    if(post.elements.topic){
        tags = post.elements.topic.value.map(topic => (topic.name))
    }
    if(post.elements.host){
        tags = post.elements.host.value.map(host => (host.name))
    }
    

    return (
        <div>
            <div>IMG</div>
            <span>{title}</span>
            <span>{date}</span>
            <span>#{tags && tags}</span>
            <button>Read More</button>
        </div>
    )
}