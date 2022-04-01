import React from 'react'

import { ImageElement } from "@kentico/gatsby-kontent-components"
import RichTextComponent from './RichTextComponent'

export default function EmploymentCard({company, positions}){
    const logo = company.elements.logo.value[0].elements.asset.value[0]

    return (
            <>
            {positions &&
                positions.value.map(pos => (
                    <div key={pos.system.id} className="grid grid-cols-2 border-b-2 gap-8 odd:bg-white even:bg-custom-light-gray">
                        <div className='col-span-2 relative lg:col-span-1 mt-4'>
                            <div className='xl:right-0 xl:top-0 xl:absolute pb-4'>
                                    <ImageElement 
                                        image={logo}
                                        height='100'
                                        width='100'
                                        
                                    />
                                </div>
                                <h2>{company.elements.name.value}</h2>
                                {pos.elements.start_date.value} - {pos.elements.end_date.value ? pos.elements.end_date.value : 'current'}
                            </div>
                        <div className="col-span-2 lg:col-span-1 lg:col-start-2 lg:col-end-2 lg:mt-4">
                            <h2>{pos.elements.title.value}</h2>
                            <div className='p-2'>
                                <RichTextComponent
                                    richTextElement={pos.elements.skills}
                                />
                            </div>
                        </div>
                    </div>

                ))}
            </>
        )
}