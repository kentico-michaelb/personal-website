import React from 'react'
import { Link } from 'gatsby'
import { RichTextElement, ImageElement } from "@kentico/gatsby-kontent-components"
import Media from './Media'

export default function RichTextComponent({richTextElement}){
return (
<RichTextElement
      value={richTextElement.value}
      images={richTextElement.images}
      links={richTextElement.links}
      linkedItems={richTextElement.modular_content}
      resolveImage={image => {
        return (
          <ImageElement
            image={image}
            alt={image.description ? image.description : image.name}
            width={200}
          />
        )
      }}
      resolveLink={(link, domNode) => {
        return (
          <Link to={`/${link.type}/${link.url_slug}`}>
            {domNode.children[0].data}
          </Link>
        )
      }}
      resolveLinkedItem={linkedItem => {
        if(linkedItem.system.type === 'media') {
            // return <h1>{linkedItem.elements.title.value}</h1>
            return <Media media={linkedItem} />    
        }
        return <pre>{JSON.stringify(linkedItem, undefined, 2)}</pre>
      }}
    //   resolveDomNode={(domNode, domToReact) => {
    //     if (domNode.name === "table") {
    //       // For options - check https://www.npmjs.com/package/html-react-parser#options
    //       return (
    //         <div className="table-responsive">
    //           {domToReact([domNode])}
    //         </div>
    //       );
    //     }
    //   }}
    />
    )
}