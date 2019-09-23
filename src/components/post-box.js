import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Image from '../components/fixed-image';

const postBox = ({ title, excerpt, path, imageUrl }) => {
	return (
		// <div className="column is-4-desktop is-6-tablet is-12-mobile">
		<div className="column is-8 is-offset-2">
			<div className="box">
				{/* <div className="ribbon">
					<span>POPULAR</span>
				</div> */}

				<article className="media">
					<div className="media-left" style={{ margin: 'auto' }}>
						<figure className="image is-128x128">
							<Image />
						</figure>
					</div>
					<div className="media-content">
						<div className="content has-text-centered">
							<h5 className="title is-5 has-text-link">
								{/* <Link to={path}>{title}</Link> */}
								{title}
							</h5>
							<p>{excerpt}</p>
							<nav className="level is-mobile">
								<div className="level-left"></div>
								<div className="level-right">
									{' '}
									<p>
										<Link className="level-item" to={path}>
											Read more
										</Link>
									</p>
								</div>
							</nav>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
};

postBox.propTypes = {
	title: PropTypes.string,
	excerpt: PropTypes.string
};

export default postBox;
