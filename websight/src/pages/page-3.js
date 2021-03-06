import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <p>testing here ...</p>
    <Link to="/page-2.js">Go back to the Second Page</Link>
  </Layout>
)

export default ThirdPage