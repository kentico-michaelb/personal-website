import { graphql, useStaticQuery } from "gatsby";

export const useAllPosts = () => {
    const { allKontentItemExternalArticle, allKontentItemPost } =
      useStaticQuery(graphql`
        query {
          allKontentItemExternalArticle(
            sort: { fields: elements___date___value, order: DESC }
          ) {
            nodes {
              elements {
                title {
                  value
                }
                topic {
                  value {
                    name
                  }
                }
                date {
                  value
                }
                host {
                  value {
                    name
                  }
                }
                image {
                  value {
                    system {
                      codename
                      id
                      type
                    }
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
                      }
                    }
                  }
                }
                external_link {
                  value {
                    ... on kontent_item_external_link {
                      id
                      elements {
                        label {
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
                category {
                  value {
                    name
                    codename
                  }
                }
              }
              system {
                id
                type
              }
            }
          }
          allKontentItemPost(
            sort: { fields: elements___date___value, order: DESC }
          ) {
            nodes {
              elements {
                category {
                  value {
                    name
                    codename
                  }
                }
                date {
                  value
                }
                title {
                  value
                }
                topic {
                  value {
                    name
                  }
                }
                image {
                  value {
                    system {
                      codename
                      id
                      type
                    }
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
                      }
                    }
                  }
                }
                url {
                  value
                }
              }
              system {
                id
                type
              }
            }
          }
        }
      `);
    return [allKontentItemExternalArticle, allKontentItemPost]
}

