const path = require(`path`);
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

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve('src/templates/blog-post.js');

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___publishDate], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							publishDate
						}
					}
				}
			}
		}
	`);

	if (result.error) {
		throw result.error;
	}

	// Create a page for each blog post
	const posts = result.data.allMarkdownRemark.edges;

	posts.map(post => {
		createPage({
			path: post.node.fields.slug,
			component: blogPostTemplate,
			context: {
				slug: post.node.fields.slug
			}
		});
	});
};
