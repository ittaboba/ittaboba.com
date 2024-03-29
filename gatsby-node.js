const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // create blog post pages
  const posts = result.data.allMdx.edges

  createPage({
    path: `/blog`,
    component: path.resolve(`src/templates/blog.js`),
    // you can use the values in this context in
    // our page layout component
    context: { edges: posts },
  })

  createPage({
    path: `/projects`,
    component: path.resolve(`src/templates/projects.js`),
    // you can use the values in this context in
    // our page layout component
    context: { edges: posts },
  })

  // call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.type === "about" ? "/about" : `/article/${node.frontmatter.slug}`,
      component: node.frontmatter.type === "about" ? path.resolve(`src/templates/about.js`) : path.resolve(`src/templates/post.js`),
      // you can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
};

