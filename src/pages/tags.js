import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// Utilities
import kebabCase from 'lodash/kebabCase';

const TagsPage = ({
	data: {
		allMarkdownRemark: { group }
	}
}) => (
	<Layout>
		<SEO title={'Tags'} />
		<div
			className="hero-body"
			style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
		>
			<div className="container has-text-centered">
				<h1
					className="title is-size-1-widescreen is-size-2-desktop is-size-3-touch"
					style={{
						textShadow: '2px 1px 3px #666'
					}}
				>
					Tags
				</h1>
				<p className="subtitle is-size-4-desktop is-size-6-touch">
					Explore all the different categories
				</p>
			</div>
			<ul>
				{group.map(tag => (
					<li key={tag.fieldValue}>
						<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</Layout>
);
TagsPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			group: PropTypes.arrayOf(
				PropTypes.shape({
					fieldValue: PropTypes.string.isRequired,
					totalCount: PropTypes.number.isRequired
				}).isRequired
			)
		}),
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				title: PropTypes.string.isRequired
			})
		})
	})
};

export default TagsPage;
export const pageQuery = graphql`
	query {
		allMarkdownRemark(limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;
