require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `AgkTF's Blog`,
		description: `This is my personal blog.`,
		author: `@agktf`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `AgkTF-Blog`,
				short_name: `Blog`,
				start_url: `/`,
				background_color: `#3D478D`,
				theme_color: `#3D478D`,
				display: `minimal-ui`,
				icon: `src/images/blog-icon.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`
	]
};
