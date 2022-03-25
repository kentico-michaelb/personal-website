import React from "react"
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout"
import Posts from "../components/Posts";
import BasicChunk from "../components/BasicChunk";

const PersonalPage = ({data}) => {   
    const content = data.kontentItemCategory.elements.content.value
    const chunks = content.filter(item => (item.system.type === 'chunk'))

    return (
        <Layout>
          <div className="bg-white border-1 pt-1 pb-3.5 border-1  z-0 relative">
            <h1>Personal Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                <Posts type={'personal'}/>
            </div>
            {chunks &&
                chunks.map(chunk => {
                return <BasicChunk chunk={chunk} key={chunk.system.id}/>
                })  
            }
            <div className="w-full flex justify-center justify-items-center z-10 absolute">
              <AnchorLink to="/personal#personal"
                stripHash              
                className='text-sm font-semibold text-custom-dark-gray bg-custom-yellow top-0 px-6 py-1 hover:drop-shadow-md'>
                Back to top &uarr;
              </AnchorLink>
            </div>
          </div>
        </Layout>
    )
    }

export default PersonalPage

export const personalQuery = graphql`
  query PersonalQuery {
    kontentItemCategory(system: {codename: {eq: "personal"}}) {
    system {
      codename
      id
      type
    }
    elements {
      content {
        value {
          ... on kontent_item_chunk {
            id
            system {
              type
              id
              codename
            }
            elements {
              header {
                value
              }
              body {
                value
                modular_content {
                  system {
                    codename
                    id
                    type
                  }
                  ... on kontent_item_media {
                    id
                    elements {
                      alt {
                        value
                      }
                      asset {
                        name
                        type
                        value {
                          description
                          height
                          name
                          size
                          type
                          url
                          width
                        }
                      }
                      caption {
                        value
                      }
                      credit {
                        value {
                          ... on kontent_item_creator {
                            id
                            system {
                              codename
                              id
                              type
                            }
                            elements {
                              first_name {
                                value
                              }
                              last_name {
                                value
                              }
                              middle_name {
                                value
                              }
                            }
                          }
                        }
                      }
                    }
                    system {
                      id
                      codename
                    }
                  }
                  ... on kontent_item_hobby {
                    id
                    system {
                      codename
                      id
                      type
                    }
                    elements {
                      description {
                        value
                      }
                      media {
                        value {
                          ... on kontent_item_media {
                            id
                            system {
                              codename
                              id
                              type
                            }
                            elements {
                              alt {
                                value
                              }
                              asset {
                                value {
                                  description
                                  height
                                  name
                                  size
                                  type
                                  url
                                  width
                                }
                              }
                              caption {
                                value
                              }
                              title {
                                value
                              }
                              credit {
                                value {
                                  ... on kontent_item_creator {
                                    id
                                    system {
                                      codename
                                      id
                                      type
                                    }
                                    elements {
                                      first_name {
                                        value
                                      }
                                      last_name {
                                        value
                                      }
                                      middle_name {
                                        value
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      name {
                        value
                      }
                    }
                  }
                }
                links {
                  url_slug
                  codename
                  type
                }
                images {
                  description
                  height
                  image_id
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
  }
`;