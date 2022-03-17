import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Post({ data }) {
  const title = data.kontentItemPost.elements.title.value
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h3>Date</h3>
        <div>
          Intro Block
        </div>
        <div>
          IMG
        </div>
        <div>
          body copy
        </div>
        <div>
          References.
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query{
kontentItemPost(elements: {url: {value: {eq: "fourth-article-title"}}}) {
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
`