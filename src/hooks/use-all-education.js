import { graphql, useStaticQuery } from 'gatsby'

export const useAllEducation = () => {
    const { allKontentItemEducation } = useStaticQuery(graphql`
      query {
        allKontentItemEducation {
          nodes {
            system {
              codename
              id
              type
            }
            elements {
              establishment {
                value {
                  ... on kontent_item_company {
                    id
                    elements {
                      name {
                        value
                      }
                      logo {
                        value {
                          ... on kontent_item_media {
                            id
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
              achievement {
                value
              }
              completion_date {
                value(formatString: "MMMM YYYY")
              }
            }
          }
        }
      }
    `);

    return allKontentItemEducation
}
