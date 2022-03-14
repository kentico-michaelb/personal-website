import * as React from 'react'
import Footer from "./Footer";
import Hero from './Hero';

export default function Layout({ children, hero }){
    return (
        <main style={{ width:'100%', backgroundColor:'#F8F8F8'}}>
            <Hero />
            <div className='container' style={{ margin:'auto', width:1366 }}>
                { children }
            </div>
            <Footer />
        </main>
    )
}