import React from 'react';
// import classes from './post-box.module.css';

const postBox = () => {
	return (
		<div className="column is-4-desktop is-6-tablet is-12-mobile">
			<div className="box">
				<div className="ribbon">
					<span>POPULAR</span>
				</div>

				<article className="media">
					<div className="media-left" style={{ margin: 'auto' }}>
						<figure className="image is-128x128">
							<img
								src="https://bulma.io/images/placeholders/128x128.png"
								alt="Image"
							/>
						</figure>
					</div>
					<div className="media-content">
						<div className="content has-text-centered">
							<h5 className="title is-5">First Blog Post</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean efficitur sit amet massa
								fringilla egestas. Nullam condimentum luctus
								turpis.
							</p>
							<nav className="level is-mobile">
								<div className="level-left"></div>
								<div className="level-right">
									{' '}
									<p>
										<a className="level-item" href="/">
											Read more
										</a>
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

export default postBox;
