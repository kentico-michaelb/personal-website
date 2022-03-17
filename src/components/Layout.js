import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Footer from "./Footer";
import Hero from './Hero';
import BasicChunk from './BasicChunk';
import CategoryContainer from './CategoryContainer';
import RecentPosts from './RecentPosts';

export default function Layout({ children }){
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
        <main style={{ width:'100%', backgroundColor:'#F8F8F8'}}>
            <Hero />
            <div className='container' style={{ margin:'auto', width:1366 }}>
                <BasicChunk chunk={whoAmI} />
                <CategoryContainer />
                { children }
                <RecentPosts />
            </div>
            <Footer />
        </main>
    )
}