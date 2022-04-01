import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function ScrollButton(){
    return (
            <div className="w-full flex justify-center justify-items-center z-10 absolute">
            <AnchorLink to="/professional#professional"
                stripHash              
                className='text-sm font-semibold text-custom-dark-gray bg-custom-yellow top-0 px-6 py-1 hover:drop-shadow-md'>
                Back to top &uarr;
            </AnchorLink>
        </div>
    )
}