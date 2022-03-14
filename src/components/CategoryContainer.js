import * as React from 'react'

export default function CategoryContainer({ category }){
    return (
        <div>
            <h1>{category.elements.title.value}</h1>
        </div>
    )
}