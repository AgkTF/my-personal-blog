import React from 'react';
import Logo from '../images/full-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

const footer = () => {
	return (
		<footer className="footer" style={{ paddingBottom: '1.5rem' }}>
			<div className="container">
				<div className="content has-text-centered">
					<div className="columns is-centered">
						<div className="column is-4">
							<figure className="image">
								<img src={Logo} style={{ maxWidth: '200px' }} />
							</figure>
						</div>
						<div className="column is-8">
							<h4 className="title is-4">AgkTF's Blog</h4>
							<p className="subtitle">
								Tutorials, reviews & more. Giving back to the
								community.
							</p>
							<p>Made with 💟 by AgkTF</p>
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
