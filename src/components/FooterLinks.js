import React from 'react'
import { Link } from 'gatsby'

export default function FooterLinks({ links, category }){
    const internalLinks = links.value.filter(link => link.system.type === 'anchor')
    const externalLinks = links.value.filter(link => link.system.type === 'external_link')
    return (
        <ul>
            {internalLinks.map(item => (
                <li key={item.id}>
                    <Link to={`/${category}#${item.elements.value.value}`}>
                        {item.elements.label.value}
                    </Link>
                </li>
                )
            )}
            {externalLinks.map(item => (
                <li key={item.id}>
                    <a href={item.elements.url.value} target='_blank' rel="noreferrer">
                        {item.elements.label.value}
                    </a>
                </li>
                ))}
        </ul>
    )

}