import React from "react"

import BasicChunk from "../components/BasicChunk"
import Layout from "../components/Layout"
import Employment from "../components/Employment";

const ProfessionalPage = ({data}) => {
//TODO: Misc. chunks can be dynamically added
    return (
        <Layout>
           <Employment />
           <div>
                <div>
                    Education
                </div>
                <div>
                    Pro Articles
                </div>
            </div>
            <div>
                collapse button.
            </div>
        </Layout>
    )
}

export default ProfessionalPage