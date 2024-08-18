import React from 'react'
import styled from '@emotion/styled'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import SEO from '../components/SEO'

export const pageQuery = graphql`
    query GetAbout {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: {slug: {eq: "/About/"}}) {
            id
            excerpt(pruneLength: 160)
            html
            rawMarkdownBody
            frontmatter {
                title
                tags
                date(formatString: "YYYY.MM.DD")
            }
        }
    }
`

const Title = styled.h1`
    margin: 0px;
    padding-bottom: 20px;
`;

const About = ({ data }: PageProps<Queries.GetAboutQuery>) => {
    const post = data.markdownRemark
    return (
        <>
            <Layout>
                <Markdown source={post?.rawMarkdownBody!} math={false} />
            </Layout>
        </>
    )
}

export default About

export const Head = () => (
    <SEO post={"关于我"} />
)