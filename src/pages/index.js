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
    <hr />
    <h1>gatsby-plugin-mdx</h1>
    <Link to="demo" style={demo}>Demo</Link>
    <br /><br />
    <p>How to install gatsby-plugin-mdx</p>
    <li>npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
</li>
    <li>add this configuration in gatsby-config.js
</li>
    <pre>{`plugins:[
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
        defaultLayouts: {
            default : require.resolve('./src/components/layout.js')
                        }
                  }
      }
      ]`}</pre>
    <li>Create an .mdx file in the pages folder.</li>
    <li>Import and write React!</li>
  </Layout>
)

export default IndexPage
