import { useStaticQuery, graphql } from "gatsby"

export const useAllEmployer = () => {
  const { allKontentItemEmployer } = useStaticQuery(graphql`
    query {
      allKontentItemEmployer {
        nodes {
          system {
            codename
            id
            type
          }
          elements {
            company {
              value {
                ... on kontent_item_company {
                  id
                  system {
                    codename
                    id
                    type
                  }
                  elements {
                    name {
                      value
                    }
                    logo {
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
                  }
                }
              }
            }
            positions {
              value {
                ... on kontent_item_position {
                  id
                  system {
                    codename
                    id
                    type
                  }
                  elements {
                    end_date {
                      value(formatString: "MMMM YYYY")
                    }
                    skills {
                      value
                    }
                    start_date {
                      value(formatString: "MMMM YYYY")
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
    }
  `);
  return allKontentItemEmployer
}