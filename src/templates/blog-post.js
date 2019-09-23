import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

// we will export the graphql query so that gatsby can run it
export const pageQuery = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				publishDate
			}
			html
			timeToRead
		}
	}
`;

// the result of the above query is passed to the props of the component
// I just de-structured data from it.
const post = props => {
	return (
		<Layout>
			<SEO
				title={props.data.markdownRemark.frontmatter.title}
				description={
					props.data.markdownRemark.frontmatter.description ||
					post.excerpt
				}
			/>
			<div className="section">
				<div className="container">
					<h1 className="title is-1 has-text-centered">
						{/* <h1 className="title is-size-2-desktop is-size-4-touch has-text-centered"> */}
						{props.data.markdownRemark.frontmatter.title}
					</h1>
					<p className="subtitle has-text-centered">
						{props.data.markdownRemark.frontmatter.publishDate}
					</p>
				</div>

				<hr />
				<div className="container">
					<div
						id="article-content"
						className="content"
						dangerouslySetInnerHTML={{
							__html: props.data.markdownRemark.html
						}}
					></div>
				</div>
			</div>
		</Layout>
	);
};

export default post;
