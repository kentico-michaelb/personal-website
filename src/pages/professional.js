import React from "react"
import { graphql } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";

// import BasicChunk from "../components/BasicChunk"
import Layout from "../components/Layout"
import Employment from "../components/Employment";
import Posts from "../components/Posts";
import Education from "../components/Education";
import RichTextComponent from "../components/RichTextComponent";

const ProfessionalPage = ({data}) => {
    const content = data.kontentItemCategory.elements.content.value[0]
    return (
        <Layout>
            <div className="bg-white border-1 pt-1 pb-3.5 border-1  z-0 relative">
                <h1>{content.elements.title.value}</h1>
                <div className="flex jusifty-center items-center text-center lg:px-28 xl:px-60">
                    <RichTextComponent 
                        richTextElement={content.elements.mission}
                    />
                </div>
                <Employment />
                <Education />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                    <Posts type={'professional'}/>
                </div>
                
                <div className="w-full flex justify-center justify-items-center z-10 absolute">
                    <AnchorLink to="/professional#professional"
                        stripHash              
                        className='text-sm font-semibold text-custom-dark-gray bg-custom-yellow top-0 px-6 py-1 hover:drop-shadow-md'>
                        Back to top &uarr;
                    </AnchorLink>
                </div>
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