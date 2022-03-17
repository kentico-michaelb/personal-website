import React from 'react'
import FooterLinks from './FooterLinks'
import { useAllCategoryLinks } from '../hooks/use-all-category-links'

export default function Footer(){
    const allKontentItemCategory = useAllCategoryLinks()
    const categories = allKontentItemCategory.nodes
    return (
        <>
            {categories &&
                categories.map(cat => (
                    <div key={cat.system.id}>
                        <h3>{cat.elements.title.value}</h3>
                        <FooterLinks links={cat.elements.navigation_menu}/>
                    </div>
                    ))
            }
        </>
    )
}