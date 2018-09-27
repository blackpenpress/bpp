import React, {Component} from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

import Layout from '../components/layout'



class IndexPage extends Component {
  render() {
    const currentPage = this.props.data.allWordpressPage.edges[0].node
    console.log(currentPage)
    return (
      <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
      
    )
  }
}


export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPage(filter:{wordpress_id:{eq:7}}){
      edges{
        node{
          wordpress_id
          title
          content
          date
        }
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    } 
  }
`