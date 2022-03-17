import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"
import { useAllOverviewHero } from '../hooks/use-all-overview-hero'

export default function Hero() {
    const allKontentItemOverview = useAllOverviewHero()

    const hero = allKontentItemOverview.nodes[0].elements.hero.value[0]
    const banner = hero.elements.background_image.value[0]
    const logo = hero.elements.logo.value[0]

    return (
        <div style={{margin:'auto', backgroundColor: '#393E46'}}>
            <ImageElement 
                image={logo} 
                height='160'
                width='248'
                style={{zIndex:'1', position:'absolute', margin: 20}} 
            />
            <ImageElement 
                image={banner} 
                width='1366'
                height='500'
            />
        </div>
    )
}