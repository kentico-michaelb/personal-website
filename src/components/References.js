import React from 'react'
import Source from './Source'

export default function References( { references }){
    return (
        <>
        <h1>References</h1>
        <div className='flex justify-center p-4 flex-wrap'>
            {references.value.map((ref, index) => {
                return (
                    <div key={ref.system.id} className='flex border-2 bg-custom-light-gray m-4'>
                        <div className='text-4xl flex items-center p-4'>
                            {index+1}
                        </div>
                        <div className='w-80'>
                            {ref.elements.author.value.map(author => (
                                <span key={author.system.id}>
                                    {author.elements.first_name.value}
                                    &nbsp;
                                    {author.elements.middle_name.value && author.elements.middle_name.value}
                                    &nbsp;
                                    {author.elements.last_name.value}
                                </span>
                            ))}
                        
                            <div>{ref.elements.title.value}</div>
                            <div>
                                {ref.elements.source.value.map(src => {
                                    return (
                                        <Source source={src} key={src.system.id}/>
                                    )
                                })}
                            </div>
                            <div>
                                {ref.elements.date.value}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}