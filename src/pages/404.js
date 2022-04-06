import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"


const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in src/pages/
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
