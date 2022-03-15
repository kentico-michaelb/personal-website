import React from "react"
import Layout from "../components/layout"

export default function Post({ data }) {
  return (
    <Layout>
      <div>
        <h1>Post Title</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </div>
    </Layout>
  )
}