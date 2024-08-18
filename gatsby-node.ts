import path from "path"
import { createFilePath } from "gatsby-source-filesystem"

import type { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] =  ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
  
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/posts.tsx`)
  
    // Get all markdown blog posts sorted by date
    const result = await graphql<Queries.GetAllMarkdownFilesQuery>(`
        query GetAllMarkdownFiles {
            allMarkdownRemark(
                sort: { frontmatter: { date: ASC } }
                limit: 1000
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    `)
  
    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }
  
    const posts = result.data?.allMarkdownRemark.nodes!
  
    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL
  
    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id
            const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
  
            createPage({
                path: `/posts`.concat(post.fields?.slug!),
                component: blogPost,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId,
                },
            })
        })
    }
}