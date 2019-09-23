import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const fixedImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderFixedImage: file(relativePath: { eq: "blog-icon.png" }) {
				childImageSharp {
					fixed(width: 150, height: 128) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return <Img fixed={data.placeholderFixedImage.childImageSharp.fixed} />;
};

export default fixedImage;
