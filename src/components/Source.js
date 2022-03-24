import React from 'react'

export default function Source({ source }){
        const type = source.system.type
        switch(type){
            case 'book':
                return (
                    <div>
                        {source.elements.publisher.value.map(pub => (
                            <span key={source.system.id}>{pub.elements.name.value}</span>
                        ))}

                        {source.elements.version.value && 
                            <div>version {source.elements.version.value}</div>}
                    </div>
                )
            //Exploring the Conceptualization of Augmented Reality and its Implications for the User in the Field of Library and Information Science.” 
            //Information Technology & Libraries, vol. 33, no. 3, 2014, pp. 23-50.
            case 'journal':
                return (
                    <div>
                        <div>
                            {source.elements.title.value}
                        </div>
                        <div>
                            {source.elements.volume.value}
                        </div>
                        <div>
                            {source.elements.number.value}
                        </div>
                        <div>
                            {source.elements.page_start.value} - {source.elements.page_end.value} 
                        </div>
                    </div>
                )
            default:
                return (
                    <div>
                        <div>{source.elements.title.value}</div>
                        <div>{source.elements.url.value}</div>
                    </div>
                )
        }
        
}