import { graphql, useStaticQuery } from "gatsby";

export const useAllPosts = () => {
    const { allKontentItemExternalArticle, allKontentItemPost } = useStaticQuery(graphql`
    query {
            allKontentItemExternalArticle(sort: {fields: elements___date___value}) {
                nodes {
                elements {
                    title {
                    value
                    }
                    date {
                    value(formatString: "MMMM Do, YYYY")
                    }
                    host {
                    value {
                        name
                    }
                    }
                }
                system {
                    id
                    type
                }
            }
            }
            allKontentItemPost(sort: {fields: elements___date___value}) {
                nodes {
                elements {
                    category {
                    value {
                        name
                    }
                    }
                    date {
                        value(formatString: "MMMM Do, YYYY")
                    }
                    title {
                    value
                    }
                    topic {
                    value {
                        name
                    }
                    }
                }
                system {
                    id
                    type
                }
            }
        }
    }
    
    `)
    return [allKontentItemExternalArticle, allKontentItemPost]
}

