import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const postBox = ({ title, excerpt, path, publishDate }) => {
	return (
		<div className="column is-8 is-offset-2">
			<div className="box">
				<article className="media">
					<div className="media-content">
						<div className="content has-text-centered">
							<h4 className="title is-4">
								<Link to={path}>{title}</Link>
								{/* {title} */}
							</h4>
							<p>{excerpt}</p>
							<nav className="level is-mobile">
								<div className="level-left">
									<p className="help">{publishDate}</p>
								</div>
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
	path: PropTypes.string,
	publishDate: PropTypes.string
};

export default postBox;
