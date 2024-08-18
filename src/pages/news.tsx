import React from 'react'
import styled from '@emotion/styled'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/SEO'

export const result = graphql`
    query GetNews {
        allMarkdownRemark(
            filter: {
                frontmatter: {tags: {eq: "News", ne: "Hidden"}}
            }, 
            sort: { frontmatter: { date: DESC } }
        ) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "YYYY.MM.DD")
                }
            }
        }
    }
`

const News = ({ data }: PageProps<Queries.GetNewsQuery>) => {
    const nodes = data.allMarkdownRemark.nodes
    return (
        <>
            <Layout>
                {nodes.map((node) => (
                    <Post node={node} />
                ))}
            </Layout>
        </>
    )
}

export default News


export const Head = () => (
    <SEO post={"新闻"} />
)