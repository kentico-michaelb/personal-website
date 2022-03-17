import React from 'react'
import Media from './Media'
import RichTextComponent from './RichTextComponent'

export default function Hobby({ hobby }){
    return (
        <>
            <Media media={hobby.elements.media.value[0]}/>
            <h2>{hobby.elements.name.value}</h2>
            <RichTextComponent
                richTextElement={hobby.elements.description}
            />
        </>
    )
}