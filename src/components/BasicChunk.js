import * as React from 'react'

export default function BasicChunk({ title, body }){
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    )
}