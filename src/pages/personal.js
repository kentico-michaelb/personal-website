import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import Posts from "../components/Posts";
import BasicChunk from "../components/BasicChunk";

const PersonalPage = ({data}) => {
    const content = data.kontentItemCategory.elements.content.value
    const chunks = content.filter(item => (item.system.type === 'chunk'))

    return (
        <Layout>
            <h1>Personal Blog</h1>
            <Posts type={'personal'}/>
            {chunks &&
                chunks.map(chunk => {
                return <BasicChunk chunk={chunk} key={chunk.system.id}/>
                })  
            }
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