import { graphql, useStaticQuery } from 'gatsby'

export const useAllOverviewHero = () => {
    const { allKontentItemOverview } = useStaticQuery(graphql`
      query {
        allKontentItemOverview {
          nodes {
            elements {
              hero {
                value {
                  ... on kontent_item_hero {
                    elements {
                      background_image {
                        value {
                          url
                          description
                          height
                          name
                          size
                          width
                        }
                        name
                        type
                      }
                      logo {
                        value {
                          url
                          description
                          height
                          name
                          size
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
    `);

    return allKontentItemOverview
}