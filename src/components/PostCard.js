import React from 'react'

export default function PostCard({ post }){
    return (
        <div>
            <div>IMG</div>
            <span>{post.elements.title.value}</span>
            <span>{post.elements.date.value}</span>
            <span>#{post.elements.topic.value.map(topic => (topic.name))}</span>
            <button>Read More</button>
        </div>
    )
}