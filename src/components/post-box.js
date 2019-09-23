import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const postBox = ({ title, excerpt, path }) => {
	return (
		<div className="column is-8 is-offset-2">
			<div className="box">
				{/* <div className="ribbon">
					<span>POPULAR</span>
				</div> */}
				<article className="media">
					<div className="media-content">
						<div className="content has-text-centered">
							<h5 className="title is-5 has-text-link">
								<Link to={path}>{title}</Link>
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
	excerpt: PropTypes.string,
	path: PropTypes.string
};

export default postBox;
