import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CompanyCard from "./CompanyCard";

export default function Employment(){
    const data = useStaticQuery(graphql`
        query{
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
                            name{
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
    `)

    const employment = data.allKontentItemEmployer.nodes.map(emp => (emp.elements))
    const companies = employment.map(emp => {
        const job = {
            company: emp.company.value[0],
            positions: emp.positions
        }
        return job
    })
    // console.log(companies)

    return (
        <div>
            <ul>
                <li>
                    {companies && 
                        companies.map(emp => {
                            return (
                                <CompanyCard 
                                    company={emp.company} 
                                    positions={emp.positions} 
                                   
                                />
                            )
                        })
                    }
                    
                </li>
            </ul>
        </div>
    )
}