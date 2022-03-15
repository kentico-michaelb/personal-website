import React from 'react'

export default function FooterLinks({ links }){
    return (
        <ul>
            {links.value.map(item => (
                <li key={item.id}>
                    {item.elements.label.value}
                </li>
                )
            )}
        </ul>
    )

}