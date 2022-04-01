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
                <h2 className='bg-custom-light-gray text-custom-dark-gray'>
                    {media.elements.caption?.value}
                </h2>
                <div>{media.elements.credit?.value}</div>
        </div>
    )
}