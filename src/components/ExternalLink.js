import React from "react";

export default function ExternalLink({ url, label }){
    return (
        <a href={url} target='_blank' rel="noreferrer" className="float">{label}</a>
    )
}