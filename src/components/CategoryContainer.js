import React from 'react'
import { Link } from 'gatsby'
import { useAllCategory } from '../hooks/use-all-category'

export default function CategoryContainer(){
    const categories = useAllCategory()
    return (
        <div>
            {categories &&
                categories.nodes.map(category => {
                return (
                    <Link to={`/${category.elements.url.value}`} key={category.system.id}>
                        <h1>{category.elements.title.value}</h1>
                    </Link>)
                })
            }
        </div>
    )
}