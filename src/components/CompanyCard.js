import React from 'react'

export default function CompanyCard({name, image, details, date, skills}){
    return (
        <div>
            <div>{name}</div>
            <div>{image}</div>
            <div>{details}</div>
            <div>{date}</div>
            {skills && <div>{skills}</div>}
        </div>
    )
}