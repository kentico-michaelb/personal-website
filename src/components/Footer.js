import React from 'react'
import { Link } from 'gatsby'
import FooterLinks from './FooterLinks'
import SubduedLogo from '../components/SubduedLogo'
import { useAllCategoryLinks } from '../hooks/use-all-category-links'

export default function Footer(){
    const allKontentItemCategory = useAllCategoryLinks()
    const categories = allKontentItemCategory.nodes
    return (
        <div className='bg-custom-black text-custom-yellow flex justify-center md:flex-row'>
            <div className='md:inline-flex leading-loose uppercase m-10'>
            {categories &&
                categories.map(cat => (
                    <div key={cat.system.id} className='mt-4 ml-14 w-full'>
                        <div className='text-white'>
                            {cat.elements.title.value}<span className='text-custom-yellow'>.</span>
                        </div>
                        <div className='pl-3'>
                            <FooterLinks 
                                links={cat.elements.navigation_menu} 
                                category={cat.system.codename}
                            />
                        </div>
                    </div>
                    ))
            }
            </div>
            <div className='md:right-0 mt-14'>
                <Link to='/'>
                    <SubduedLogo />
                </Link>
            </div>
        </div>
    )
}