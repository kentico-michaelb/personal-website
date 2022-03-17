import React from "react"
import Layout from "../components/Layout"
import Posts from "../components/Posts";

const PersonalPage = ({data}) => {
//TODO: Misc. chunks can be dynamically added
    return (
        <Layout>
            <Posts type={'personal'}/>
        </Layout>
    )
    }

export default PersonalPage