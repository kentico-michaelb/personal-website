import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import Employment from "../components/Employment";
import Posts from "../components/Posts";
import Education from "../components/Education";
import RichTextComponent from "../components/RichTextComponent";
import ScrollButton from "../components/ScrollButton";

const ProfessionalPage = ({data}) => {
    const content = data.kontentItemCategory.elements.content.value[0]
    return (
        <Layout home={false}>
            <div className="bg-white border-1 pt-1 pb-3.5 border-1  z-0 relative">
                <h1>{content.elements.title.value}</h1>
                <div className="p-8 lg:px-28 xl:px-48" id="resume">
                    <RichTextComponent 
                        richTextElement={content.elements.mission}
                    />
                </div>
                <Employment />

                <Education />

                <h1 id="articles">Professional Articles</h1>
                <Posts type={'professional'}/>
                
                <ScrollButton />

            </div>
        </Layout>
    )
}

export default ProfessionalPage

export const professionalQuery = graphql`
  query ProfessionalQuery {
    kontentItemCategory(system: { codename: { eq: "professional" } }) {
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
                  modular_content {
                    id
                    system {
                      codename
                      id
                      type
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
                title {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;