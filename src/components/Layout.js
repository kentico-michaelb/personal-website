import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Footer from "./Footer";
import Hero from './Hero';
import BasicChunk from './BasicChunk';
import CategoryContainer from './CategoryContainer';
import RecentPosts from './RecentPosts';

export default function Layout({ children, showWhoChunk = true}){
    const data = useStaticQuery(graphql`
        query{
            kontentItemChunk(system: {codename: {eq: "who_am_i"}}) {
                elements {
                    header {
                        value
                    }
                    body {
                        value
                    }
                }
            }
        }
    `)
    const whoAmI = data.kontentItemChunk
    return (
        <main className='bg-custom-canvas-gray w-full'>
            <Hero />
            <div className='flex justify-center'>
                <div className='lg:px-28 xl:px-64'>
                    {showWhoChunk && <BasicChunk chunk={whoAmI} />}
                    <CategoryContainer />
                    { children }
                    <RecentPosts />
                </div>
            </div>
            <Footer />
        </main>
    )
}