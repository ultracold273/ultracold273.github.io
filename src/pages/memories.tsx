import React from 'react'
import styled from '@emotion/styled'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/SEO'

export const result = graphql`
    query GetMemories {
        allMarkdownRemark(
            filter: {
                frontmatter: {tags: {eq: "Memories", ne: "Hidden"}}
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

const Memories = ({ data }: PageProps<Queries.GetMemoriesQuery>) => {
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

export default Memories

export const Head = () => (
    <SEO post={"旧事"} />
)