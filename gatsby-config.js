require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `AgkTF's Blog`,
		description: `This is the personal blog of AgkTF.`,
		author: `@agktf`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		// `gatsby-plugin-page-progress`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-bulma`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 600,
							linkImagesToOriginal: false,
							loading: 'lazy',
							showCaptions: true
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							aliases: { sh: 'bash', js: 'javascript' }
						}
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `tomato`,
				showSpinner: false
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `AgkTF-Blog`,
				short_name: `Blog`,
				start_url: `/`,
				background_color: `#3D478D`,
				theme_color: `#3D478D`,
				display: `minimal-ui`,
				icon: `src/images/blog-icon.png`
			}
		},
		`gatsby-plugin-offline` // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
	]
};
