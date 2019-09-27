/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import ShareLinks from '../components/share-links';
import PostTags from '../components/post-tags';

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
			<div className="hero">
				<div className="hero-body" style={{ paddingBottom: '0px' }}>
					<div className="container has-text-centered">
						<h1
							className="title is-1"
							style={{
								textShadow: '1px 1px 2px #666'
							}}
						>
							{props.data.markdownRemark.frontmatter.title}
						</h1>
						<p className="subtitle has-text-centered">
							{props.data.markdownRemark.frontmatter.date}
							<br />
							{props.data.markdownRemark.timeToRead} min read
						</p>
						<ShareLinks
							title={props.data.markdownRemark.frontmatter.title}
							slug={props.data.markdownRemark.fields.slug}
						/>
					</div>
				</div>
			</div>

			<hr />
			<section className="section" style={{ paddingTop: '0px' }}>
				<div className="container">
					<div
						id="article-content"
						className="content"
						dangerouslySetInnerHTML={{
							__html: props.data.markdownRemark.html
						}}
					></div>
				</div>

				<PostTags tags={props.data.markdownRemark.frontmatter.tags} />
			</section>
		</Layout>
	);
};

export default post;

// we will export the graphql query so that gatsby can run it
export const pageQuery = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				tags
			}
			html
			timeToRead
			fields {
				slug
			}
		}
	}
`;
