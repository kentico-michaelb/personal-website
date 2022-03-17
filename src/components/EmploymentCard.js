import React from 'react'

export default function EmploymentCard({company, positions}){
    return (
        <div>
            <h4>{company.elements.name.value}</h4>
            <div>IMG</div>
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