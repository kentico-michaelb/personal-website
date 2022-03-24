import React from 'react'
import Source from './Source'

export default function References( { references }){
    return (
        <>
            {references.value.map(ref => {
                return (
                <div key={ref.system.id}>
                    <div>
                        {ref.elements.author.value.map(author => (
                            <span key={author.system.id}>
                                {author.elements.first_name.value}
                                &nbsp;
                                {author.elements.middle_name.value && author.elements.middle_name.value}
                                &nbsp;
                                {author.elements.last_name.value}
                            </span>
                        ))}
                    </div>
                    <div>{ref.elements.title.value}</div>
                    <div>
                        {ref.elements.source.value.map(src => {
                            console.log(src)
                            return (
                                <Source source={src} key={src.system.id}/>
                            )
                        })}
                    </div>
                    <div>
                        {ref.elements.date.value}
                    </div>
                </div>

                )
            })}
        </>
    )
}