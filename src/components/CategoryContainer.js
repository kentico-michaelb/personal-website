import React from 'react'
import { useAllCategory } from '../hooks/use-all-category'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ShortLogo from './ShortLogo'

export default function CategoryContainer(){
    const categories = useAllCategory()
    return (
        <div className='md:flex justify-center relative'>
            <div className='hidden md:block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25 hover:opacity-100'>
                <AniLink paintDrip hex='#F8B500' to='/' title='Home' >
                    <ShortLogo />
                </AniLink>
            </div>
            {categories &&
                categories.nodes.map(category => {
                return (
                    <AniLink cover to={`/${category.elements.url.value}`}
                        bg='#F8B500'
                        key={category.system.id}
                        className='h-36 md:h-80 w-full bg-custom-dark-gray 
                        opacity-25 hover:opacity-100
                        cursor-pointer flex items-center justify-center'>
                        <div id={category.system.codename}>
                            <h1 className='text-white'>{category.elements.title.value}</h1>
                        </div>
                    </AniLink>)
                })
            }
        </div>
    )
}