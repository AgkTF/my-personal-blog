import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const postTags = ({ tags }) => {
	return (
		<div className="container" style={{ marginTop: '2.5rem' }}>
			<nav className="level">
				<div className="level-left">
					<div className="level-item">
						<div className="tags are-medium">
							{tags.map(tag => {
								return (
									<span className="tag is-link" key={tag}>
										<Link to={`/tags/${kebabCase(tag)}`}>
											{`#${tag}`}
										</Link>
									</span>
								);
							})}
						</div>
					</div>
				</div>

				<div className="level-right">
					<div className="level-item">
						<span className="tag is-success is-medium">
							<Link to={`/tags`}>All tags</Link>
						</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default postTags;
