import React from 'react'
import Media from './Media'
import RichTextComponent from './RichTextComponent'

export default function Hobby({ hobby }){
        return (
            <div className='grid grid-cols-3 w-10/12 mt-8'>
                <div className='flex justify-end mr-8'>
                    <Media media={hobby.elements.media.value[0]}/>
                </div>
                <div className='col-span-2'>
                    <h2 className='font-bold'>{hobby.elements.name.value}</h2>
                    <RichTextComponent
                        richTextElement={hobby.elements.description}
                    />
                </div>
            </div>
        )
}