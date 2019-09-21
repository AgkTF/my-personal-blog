import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

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
			<div className="container">
				<h1 className="title is-1 has-text-centered">
					{props.data.markdownRemark.frontmatter.title}
				</h1>
				<p className="subtitle has-text-centered">
					{props.data.markdownRemark.frontmatter.publishDate}
				</p>

				<hr />
				<p
					dangerouslySetInnerHTML={{
						__html: props.data.markdownRemark.html
					}}
				></p>
			</div>
		</Layout>
	);
};

export default post;
