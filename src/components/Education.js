import React from 'react'

import { useAllEducation } from '../hooks/use-all-education'
import { ImageElement } from "@kentico/gatsby-kontent-components"

export default function Education(){
    const allKontentItemEducation = useAllEducation()

    const education = allKontentItemEducation.nodes.map(edu => {
        const educationItem = {
            elements: edu.elements,
            id: edu.system.id
        }
        return educationItem
    })
    const merits = education.map(edu => {
         const merit = {
            id: edu.id,
            establishment: edu.elements.establishment.value[0],
            achievement: edu.elements.achievement.value,
            date: edu.elements.completion_date.value
        }
        return merit
    })

    return (
        <>
            <h1>Education</h1>
            <div className="flex justify-center text-center mb-4">
                {merits &&
                    merits.map(merit => (
                        <div key={merit.id}>
                            <h2>{merit.establishment.elements.name.value}</h2>
                            <ImageElement 
                                image={merit.establishment.elements.logo.value[0].elements.asset.value[0]}
                                height='100'
                                width='100'
                            />
                            <h4>{merit.achievement}</h4>
                            <h4>{merit.date}</h4>
                        </div>
                        ))}
            </div> 
        </>
    )
}