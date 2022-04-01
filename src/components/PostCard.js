import React from 'react'
import { Link } from 'gatsby'

import Media from './Media'

export default function PostCard({ post }){
    const title = post.elements.title.value
    const date = post.elements.date.value
    const image = post.elements.image.value[0]

    let url
    let tags
    let host
    if (post.system.type === 'external_article'){
        const externalLink = post.elements.external_link.value[0].elements.url.value
        host = post.elements.host.value.map(host => (host.name))
        url = <a href={externalLink} target="_blank" className='text-sm font-semibold text-custom-dark-gray no-underline btn' rel="noopener noreferrer">Read more {host && <span>on {host}</span>}</a>
    }
    else {
        const internalLink = `/posts/${post.elements.url.value}`
        url = <Link to={internalLink} className='text-sm font-semibold text-custom-dark-gray no-underline btn' target='_blank'>Read more</Link>
    }
    if(post.elements.topic){
        tags = post.elements.topic.value.map(topic => (
            <span className='pr-1' key={post.system.id + topic.name}>
                <span className='text-custom-yellow'>#</span>{topic.name}
            </span>
            ))
    }
    

    return (
        <div className='w-72 h-96 bg-custom-dark-gray text-white border relative mb-4'>
            <div className='h-40 flex justify-center items-center overflow-hidden'>
                <Media media={image} />
            </div>
            <div className='p-3'>
                <div className='border-b border-custom-yellow'>
                    <span>{title}</span>
                </div>
                <div className='text-xs pt-2'>{date}</div>
                <div className='text-xs pt-2 uppercase flex flex-wrap'>
                    {tags && tags}
                </div>
                    {url}
            </div>
        </div>
    )
}