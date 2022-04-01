import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet"

import Footer from "./Footer";
import Hero from './Hero';
import BasicChunk from './BasicChunk';
import CategoryContainer from './CategoryContainer';
import RecentPosts from './RecentPosts';

export default function Layout({ children, home = true}){
    let whoAmI = false

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
                system{
                    id
                    codename
                }
            }
        }
    `)
    if(home){
        whoAmI = data.kontentItemChunk
    }
    
    return (
        <main className='bg-custom-canvas-gray'>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Mike Berry's personal site." />
                <title>Mike Berry</title>
                <link rel="canonical" href="http://localhost:8000/" />
                <html lang="en" />
            </Helmet>
            {home &&
                <Hero />
            }
            <div className='flex justify-center'>
                <div className='lg:px-28 xl:px-64'>
                    {whoAmI && <BasicChunk chunk={whoAmI} />}
                    <CategoryContainer />
                    { children }
                    <RecentPosts />
                </div>
            </div>
            <Footer />
        </main>
    )
}