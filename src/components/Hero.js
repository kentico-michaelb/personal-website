import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"
import { useAllOverviewHero } from '../hooks/use-all-overview-hero'
import { Link } from 'gatsby'

export default function Hero() {
    const allKontentItemOverview = useAllOverviewHero()

    const hero = allKontentItemOverview.nodes[0].elements.hero.value[0]
    const banner = hero.elements.background_image.value[0]
    const logo = hero.elements.logo.value[0]

    return (
        <div className='flex justify-center bg-custom-black relative w-full'>
            <Link to='/' title="Home" className='z-10 md:absolute left-0 w-64 ml-5 mt-5'>
                <ImageElement 
                    image={logo} 
                    height='160'
                    width='248'
                />
            </Link>
            <div className='hidden md:block relative'>
                <ImageElement 
                    image={banner}
                />
            </div>
        </div>
    )
}