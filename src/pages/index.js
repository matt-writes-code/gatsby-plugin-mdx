import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const demo = { backgroundColor: "#333399", padding: "5px", color: "white", textDecoration: "none", fontSize: "1.3em" }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="demo" style={demo}>Demo</Link>
    <br /><br />
  </Layout>
)

export default IndexPage
