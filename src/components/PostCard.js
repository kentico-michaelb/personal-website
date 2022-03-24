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
        <div className='w-72 h-72 xl:w-80 xl:h-96 bg-custom-dark-gray text-white border relative mb-4'>
            <div className='h-32 xl:h-48 flex justify-center items-center overflow-hidden'>
                <Media media={image} />
            </div>
            <div className='p-3'>
                <div className='border-b border-custom-yellow'>
                    <span>{title}</span>
                </div>
                <div className='text-xs pt-2'>{date}</div>
                <div className='text-sm pt-2 uppercase'>
                    <span className='text-custom-yellow'>#</span>{tags}
                </div>
                <button className='text-sm text-custom-dark-gray bg-custom-yellow px-2 py-1 absolute bottom-0 left-0 mb-4 ml-4 hover:drop-shadow-md'>
                    Read More
                </button>
            </div>
        </div>
    )
}