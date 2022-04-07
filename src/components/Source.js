import React from 'react'

export default function Source({ source }){
        const type = source.system.type
        switch(type){
            case 'book':
                return (
                    <div>
                        {source.elements.publisher.value.map(pub => (
                            <span key={source.system.id}>{pub.elements.name.value},&nbsp;</span>
                        ))}

                        {source.elements.version.value && 
                            <span>version {source.elements.version.value}</span>}
                    </div>
                )
            //Exploring the Conceptualization of Augmented Reality and its Implications for the User in the Field of Library and Information Science.” 
            //Information Technology & Libraries, vol. 33, no. 3, 2014, pp. 23-50.
            case 'journal':
                return (
                    <div>
                        <div>
                            {source.elements.title.value},&nbsp; 
                            {source.elements.volume.value},&nbsp;
                            {source.elements.number.value},&nbsp;
                            pp. {source.elements.page_start.value} - {source.elements.page_end.value} 
                        </div>
                    </div>
                )
            default:
                return (
                    <div>
                        <div className='italic'>{source.elements.title.value}</div>
                        <a href={source.elements.url.value} target='_blank' rel="noreferrer">{source.elements.url.value}</a>
                    </div>
                )
        }
        
}