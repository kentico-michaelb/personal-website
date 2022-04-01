import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RichTextComponent from "../components/RichTextComponent"
import Media from "../components/Media"
import References from "../components/References"

export default function Post({ data }) {
  const title = data.kontentItemPost.elements.title.value
  const date = data.kontentItemPost.elements.date.value
  const intro = data.kontentItemPost.elements.introduction.value
  const media = data.kontentItemPost.elements.image.value[0]
  const body = data.kontentItemPost.elements.body
  const references = data.kontentItemPost.elements.references

  return (
    <Layout home={false}>
      <div className="bg-white pt-1">
        <h1 className="px-8">{title}</h1>
        <h2 className="text-center">{date}</h2>
          <div className=" flex justify-center jusitfy-items-center">
            <div className="w-full bg-custom-light-gray px-10 lg:px-40 m-4">
              {intro}
            </div>
          </div>
        <div className="flex justify-center p-8">
          <Media 
            media={media}
          />
        </div>
        <div className="p-8">
          <RichTextComponent
            richTextElement={body}
          />
        </div>
        <References references={references} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery($slug: String){
    kontentItemPost(
      elements: { url: { value: { eq: $slug } } }
    ) {
      system {
        codename
        id
        type
      }
      elements {
        body {
          value
        }
        date {
          value(formatString: "MMMM DD YYYY")
        }
        image {
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
                title {
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
              }
            }
          }
        }
        introduction {
          value
        }
        references {
          value {
            ... on kontent_item_references {
              id
              system {
                codename
                id
                type
              }
              elements {
                date {
                  value(formatString: "MMMM DD YYYY")
                }
                source {
                  value {
                    ... on kontent_item_book {
                      id
                      elements {
                        version {
                          value
                        }
                        publisher {
                          value {
                            ... on kontent_item_company {
                              id
                              elements {
                                name {
                                  value
                                }
                              }
                            }
                          }
                        }
                      }
                      system {
                        codename
                        id
                        type
                      }
                    }
                    ... on kontent_item_journal {
                      id
                      elements {
                        number {
                          value
                        }
                        page_end {
                          value
                        }
                        page_start {
                          value
                        }
                        title {
                          value
                        }
                        volume {
                          value
                        }
                      }
                      system {
                        codename
                        id
                        type
                      }
                    }
                    ... on kontent_item_website {
                      id
                      elements {
                        title {
                          value
                        }
                        url {
                          value
                        }
                      }
                      system {
                        codename
                        id
                        type
                      }
                    }
                  }
                }
                title {
                  value
                }
                author {
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
        seo__description {
          value
        }
        seo__robots_follow {
          value {
            codename
          }
        }
        seo__robots_index {
          value {
            codename
          }
        }
        seo__title {
          value
        }
        title {
          value
        }
        url {
          value
        }
      }
    }
  }
`;