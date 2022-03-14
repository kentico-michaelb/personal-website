import * as React from 'react'

export default function BasicChunk({ chunk }){
    const header = chunk.elements.header.value
    const body = chunk.elements.body.value
    return (
        <>
            <h1>{header}</h1>
            <p>{body}</p>
        </>
    )
}