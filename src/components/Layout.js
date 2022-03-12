import * as React from 'react'
import Footer from "./Footer";
import Hero from './Hero';

export default function Layout({ children }){
    return (
        <main>
            <Hero />
            <h1>Layout.</h1>
            { children }
            <Footer />
        </main>
    )
}