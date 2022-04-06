import React from 'react'
import { ImageElement } from "@kentico/gatsby-kontent-components"

export default function Media({ media, height, width }){
    const asset = media.elements.asset.value[0]

    return (
        <div>
            <ImageElement
                image={asset}
                alt={media.elements.alt.value ? media.elements.alt.value : asset.name}
                height={height}
                width={width}
            />
                <h2 className='bg-custom-light-gray text-custom-dark-gray'>
                    {media.elements.caption?.value}
                </h2>
                <div>{media.elements.credit?.value}</div>
        </div>
    )
}