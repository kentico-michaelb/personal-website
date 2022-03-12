import * as React from "react"
import BasicChunk from "../components/BasicChunk"
import CategoryContainer from "../components/CategoryContainer"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"

const IndexPage = () => {
  return (
    <Layout>
      <BasicChunk title="Who Am I?" body="Lorem ipsum" />
      <CategoryContainer />
      <RecentPosts />
    </Layout>
  )
}

export default IndexPage
