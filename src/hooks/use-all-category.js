import { graphql, useStaticQuery } from 'gatsby'

export const useAllCategory = () => {
    const { allKontentItemCategory } = useStaticQuery(graphql`
      query {
        allKontentItemCategory {
          nodes {
            elements {
              title {
                value
              }
              url {
                value
              }
            }
            system {
              id
              type
              codename
            }
          }
        }
      }
    `);

    return allKontentItemCategory
}