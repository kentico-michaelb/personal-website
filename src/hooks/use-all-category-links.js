
import { graphql, useStaticQuery } from 'gatsby'

export const useAllCategoryLinks = () => {
    const { allKontentItemCategory } = useStaticQuery(graphql`
      query {
        allKontentItemCategory {
          nodes {
            elements {
              navigation_menu {
                value {
                  ... on kontent_item_anchor {
                    id
                    elements {
                      label {
                        value
                      }
                      value {
                        value
                      }
                    }
                    system {
                      type
                    }
                  }
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
                      type
                    }
                  }
                }
              }
              title {
                value
              }
            }
            system {
              id
            }
          }
        }
      }
    `);

    return allKontentItemCategory
}



