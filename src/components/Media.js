import React from 'react'
import { ImageElement } from "@kentico/gatsby-kontent-components"

export default function Media({ media }){
    const asset = media.elements.asset.value[0]

    return (
        <div>
            <ImageElement
                    image={asset}
                    alt={media.elements.alt.value ? media.elements.alt.value : asset.name}
                />
            {media.elements.caption.value && 
                <div>Caption: {media.elements.caption.value}</div>}

            {media.elements.caption.value && 
                <div>Credit: {media.elements.caption.value}</div>}
        </div>
    )
}