const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
	// we used this method to attach the slug to each node.
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
