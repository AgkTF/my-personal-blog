import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faRedditAlien
} from '@fortawesome/free-brands-svg-icons';
import kebabCase from 'lodash/kebabCase';

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
								// color: '#f7e8f6'
							}}
						>
							{/* <h1 className="title is-size-2-desktop is-size-4-touch has-text-centered"> */}
							{props.data.markdownRemark.frontmatter.title}
						</h1>
						<p className="subtitle has-text-centered">
							{props.data.markdownRemark.frontmatter.date}
							<br />
							{props.data.markdownRemark.timeToRead} min read
						</p>
						<div className="field is-grouped is-grouped-centered">
							<p className="control">
								<a
									title="Share on Twitter"
									href={`https://twitter.com/intent/tweet?text=Check out this article 👉 ${props.data.markdownRemark.frontmatter.title} on https://blog.agktf.com${props.data.markdownRemark.fields.slug}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										size="2x"
										style={{ color: '#5AA1F2' }}
									/>
								</a>
							</p>
							<p className="control">
								<a
									title="Share On Facebook"
									href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.agktf.com${props.data.markdownRemark.fields.slug}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon
										icon={faFacebook}
										size="2x"
										style={{ color: '#3C5A99' }}
									/>
								</a>
							</p>
							<p className="control">
								<a
									title="Share On Reddit"
									href={`http://www.reddit.com/submit?url=https://blog.agktf.com${props.data.markdownRemark.fields.slug}&title=${props.data.markdownRemark.frontmatter.title}&text=Check out this article 👉 ${props.data.markdownRemark.frontmatter.title}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon
										icon={faRedditAlien}
										size="2x"
										style={{ color: '#EA4302' }}
									/>
								</a>
							</p>
						</div>
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

				<div className="container" style={{ marginTop: '2.5rem' }}>
					<div className="tags are-medium">
						{props.data.markdownRemark.frontmatter.tags.map(tag => {
							{
								/* console.log(tag); */
							}
							return (
								<span className="tag" key={tag}>
									<Link to={`/tags/${kebabCase(tag)}`}>
										{tag}
									</Link>
								</span>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default post;
