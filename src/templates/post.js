import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PageTransition from 'gatsby-plugin-page-transitions';

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>

                <PageTransition
                defaultStyle={{
                    transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                    left: '100%',
                    position: 'absolute',
                    width: '100%',
                    top: '170px',
                }}
                transitionStyles={{
                    entering: { left: '0%' },
                    entered: { left: '0%' },
                    exiting: { left: '100%' },
                }}
                transitionTime={500}
                >
                    <div
                    css={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        clear: 'both',
                    }}>
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                </PageTransition>

            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`