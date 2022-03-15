import React from 'react'
import RichTextComponent from './RichTextComponent'

export default function BasicChunk({ chunk }){
    const header = chunk.elements.header.value
    const body = chunk.elements.body
    return (
        <>
            <h1>{header}</h1>
            <RichTextComponent
                richTextElement={body}
            />
        </>
    )
}