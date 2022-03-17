import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"

export default function EmploymentCard({company, positions}){
    const logo = company.elements.logo.value[0].elements.asset.value[0]

    return (
        <div>
            <h4>{company.elements.name.value}</h4>
            <ImageElement 
                image={logo}
                height='100'
                width='100'
            />
            {positions &&
                positions.value.map(pos => (
                    <div key={pos.system.id}>
                        <div>
                            {pos.elements.title.value}
                        </div>
                        <div>
                            {pos.elements.start_date.value} - {pos.elements.end_date.value ? pos.elements.end_date.value : 'current'}
                        </div>
                    </div>
                ))}
        
        </div>
        )
}