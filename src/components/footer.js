import React from 'react';
import Logo from '../images/brand.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

const footer = ({ view }) => {
	return (
		<footer
			className={
				'footer' +
				(view === 'tags' || view === 'singleTag' || view === '404'
					? ' fixed-footer'
					: '')
			}
		>
			<div className="container">
				<div className="content has-text-centered">
					<div className="columns is-centered">
						<div className="column is-4" id="footer-brand">
							<figure className="image">
								<img src={Logo} style={{ maxWidth: '200px' }} />
							</figure>
						</div>
						<div className="column is-8">
							<h4 className="title is-size-4 is-size-5-touch">
								AgkTF&#39;s Blog
							</h4>
							<p className="subtitle is-size-7-touch">
								Everything{' '}
								<span
									className="has-text-weight-bold"
									style={{ color: '#fcd307' }}
								>
									JavaScript
								</span>
								. Giving back to the community.
							</p>
							<p className="subtitle is-size-7-mobile">
								Made with 💟 by{' '}
								<a href="https://agktf.com">AgkTF</a>
							</p>
							<div className="field is-grouped is-grouped-centered">
								<p className="control">
									<a
										href="https://twitter.com/agkTF"
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
										href="https://www.facebook.com/agk2022"
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
										href="http://github.com/AgkTF"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											size="2x"
											style={{ color: '#000' }}
										/>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
