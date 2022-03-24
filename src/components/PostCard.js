import React from 'react'
import Media from './Media'

export default function PostCard({ post }){
    const title = post.elements.title.value
    const date = post.elements.date.value
    const image = post.elements.image.value[0]
    let tags
    if(post.elements.topic){
        tags = post.elements.topic.value.map(topic => (topic.name))
    }
    if(post.elements.host){
        tags = post.elements.host.value.map(host => (host.name))
    }
    

    return (
        <div>
            <Media media={image} />
            <span>{title}</span>
            <span>{date}</span>
            <span>#{tags && tags}</span>
            <button>Read More</button>
        </div>
    )
}