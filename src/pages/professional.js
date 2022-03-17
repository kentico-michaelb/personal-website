import React from "react"
import { graphql } from 'gatsby';

// import BasicChunk from "../components/BasicChunk"
import Layout from "../components/Layout"
import Employment from "../components/Employment";
import Posts from "../components/Posts";
import Education from "../components/Education";
import RichTextComponent from "../components/RichTextComponent";

const ProfessionalPage = ({data}) => {
    const content = data.kontentItemCategory.elements.content.value[0]
//TODO: Misc. chunks can be dynamically added
    return (
        <Layout>
            <h1>{content.elements.title.value}</h1>
            <RichTextComponent 
                richTextElement={content.elements.mission}
            />
            <Employment />
            <Education />
            <Posts type={'professional'}/>
            
            <div>
                collapse button.
            </div>
        </Layout>
    )
}

export default ProfessionalPage

export const professionalQuery = graphql`
    query ProfessionalQuery {
        kontentItemCategory(system: {codename: {eq: "professional"}}) {
        elements {
        content {
            value {
            ... on kontent_item_resume {
                id
                elements {
                mission {
                    value
                    links {
                    codename
                    link_id
                    type
                    url_slug
                    }
                }
                title {
                    value
                }
                }
            }
            }
        }
        navigation_menu {
            value {
            ... on kontent_item_anchor {
                id
                system {
                codename
                id
                type
                }
                elements {
                label {
                    value
                }
                value {
                    value
                }
                }
            }
            ... on kontent_item_external_link {
                id
                system {
                codename
                id
                type
                }
                elements {
                label {
                    value
                }
                url {
                    value
                }
                }
            }
            }
        }
        url {
            value
        }
        }
    }
}
`