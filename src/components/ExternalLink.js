import React from "react";

export default function ExternalLink({ url, label }){
    return (
        <a href={url} target='_blank' className="float">{label}</a>
    )
}