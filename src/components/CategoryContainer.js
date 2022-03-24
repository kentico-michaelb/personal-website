import React from 'react'
import { Link } from 'gatsby'
import SubduedLogo from '../components/SubduedLogo'
import { useAllCategory } from '../hooks/use-all-category'

export default function CategoryContainer(){
    const categories = useAllCategory()
    return (
        <div className='md:flex justify-center relative mt-5'>
            <div className='hidden md:block z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <SubduedLogo />
            </div>
            {categories &&
                categories.nodes.map(category => {
                return (
                    <div className='h-36 md:h-80 w-full bg-custom-dark-gray 
                        bg-opacity-30 hover:bg-opacity-100
                        cursor-pointer flex items-center justify-center'>
                        <Link 
                            to={`/${category.elements.url.value}`} 
                            key={category.system.id}>
                            <h1 className='text-white'>{category.elements.title.value}</h1>
                        </Link>
                    </div>)
                })
            }
        </div>
    )
}