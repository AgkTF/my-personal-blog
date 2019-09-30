import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`;
	return (
		<Layout view="singleTag">
			<div className="hero">
				<div className="hero-body" style={{ paddingBottom: '0px' }}>
					<div className="container has-text-centered">
						<h1 className="title is-size-1-widescreen is-size-2-desktop is-size-3-touch">
							{tag}
						</h1>
						<p className="subtitle is-size-4-desktop is-size-5-touch">
							{tagHeader}
						</p>
					</div>
				</div>
			</div>

			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-6 is-offset-3 has-text-centered">
							<div
								className="box"
								style={{ marginBottom: '5rem' }}
							>
								<article className="media">
									<div className="media-content">
										<div className="content has-text-centered">
											{edges.map(({ node }) => {
												const { slug } = node.fields;
												const {
													title
												} = node.frontmatter;
												return (
													<h4
														className="title is-4"
														key={slug}
													>
														<Link to={slug}>
															{title}
														</Link>
													</h4>
												);
											})}
										</div>
									</div>
								</article>
							</div>

							<Link
								to="/tags"
								className="button is-success is-medium is-outlined"
							>
								Explore All tags
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired
						})
					})
				}).isRequired
			)
		})
	})
};

export default Tags;

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
