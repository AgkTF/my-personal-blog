import React from 'react';
import SEO from '../components/seo';
import Logo from '../images/whale.svg';
import PostBox from '../components/post-box';
import Layout from '../components/layout';
// import Bg from '../images/background.svg';

import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
	// the argument of this function is called tagged template literal.
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							publishDate
						}
						excerpt
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="Home" />
			<section
				className="hero is-medium"
				// style={{
				// 	backgroundImage: `url(${Bg})`,
				// 	backgroundSize: 'auto auto'
				// }}
			>
				<div
					className="hero-body"
					style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
				>
					<div className="container has-text-centered">
						<div className="columns">
							<div className="column is-6 is-offset-3">
								<img
									src={Logo}
									style={{
										maxWidth: '300px',
										marginBottom: '2.5rem'
									}}
								/>
								<h1 className="title is-size-1-widescreen is-size-2-desktop is-size-3-touch">
									Welcome to AgkTF's Blog
								</h1>
								<p className="subtitle is-size-4-desktop is-size-6-touch">
									Web Development, Front To Back
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-4 is-offset-4 has-text-centered">
							<div
								className="notification is-warning"
								style={{
									maxWidth: 'fit-content',
									padding: '1.25rem',
									margin: 'auto'
								}}
							>
								<p className="has-text-weight-bold">
									Explore the latest articles
								</p>
							</div>
						</div>
					</div>
					<div className="columns is-multiline">
						{data.allMarkdownRemark.edges.map(edge => {
							return (
								<PostBox
									key={edge.node.frontmatter.title}
									title={edge.node.frontmatter.title}
									excerpt={edge.node.excerpt}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
