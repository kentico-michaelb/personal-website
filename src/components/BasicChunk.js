import React from 'react'
import RichTextComponent from './RichTextComponent'

export default function BasicChunk({ chunk }){
    const header = chunk.elements.header.value
    const body = chunk.elements.body
    return (
        <div className='px-20'>
            <h1 id={chunk.system.codename}>{header}</h1>
            <RichTextComponent
                richTextElement={body}
            />
        </div>
    )
}