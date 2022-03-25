import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"
import RichTextComponent from './RichTextComponent'

export default function EmploymentCard({company, positions}){
    const logo = company.elements.logo.value[0].elements.asset.value[0]

    return (
            <>
            {positions &&
                positions.value.map(pos => (
                    <div key={pos.system.id} className="grid grid-cols-2 mt-4 border-b-2">
                        <div className='col-span-1 relative'>
                            <h3>{company.elements.name.value}</h3>
                            <div className='xl:right-20 xl:top-0 xl:absolute'>
                                <ImageElement 
                                    image={logo}
                                    height='100'
                                    width='100'
                                    
                                />
                            </div>
                            <h3>{pos.elements.title.value}</h3>
                            {pos.elements.start_date.value} - {pos.elements.end_date.value ? pos.elements.end_date.value : 'current'}
                        </div>
                        <div className="col-start-2 col-end-2">
                            <h3>{pos.elements.title.value}</h3>
                            <RichTextComponent
                                richTextElement={pos.elements.skills}
                            />
                        </div>
                    </div>

                ))}
            </>
        )
}