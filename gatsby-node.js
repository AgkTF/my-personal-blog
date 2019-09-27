const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

// we used this method to attach the slug to each node.
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const relativeFilePath = createFilePath({
			node,
			getNode,
			trailingSlash: false
		});

		createNodeField({
			node,
			name: 'slug',
			value: relativeFilePath
		});
	}
};

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve('src/templates/blog-post.js');
	const tagTemplate = path.resolve('src/templates/tags.js');
	const result = await graphql(`
		{
			postsRemark: allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 2000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							date
							tags
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
		}
	`);

	// handle errors
	if (result.error) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	// Create a page for each blog post
	const posts = result.data.postsRemark.edges;

	posts.map(post => {
		createPage({
			path: post.node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: post.node.fields.slug
			}
		});
	});
	// Extract tag data from query
	const tags = result.data.tagsGroup.group;
	// Make tag pages
	tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue
			}
		});
	});
};
