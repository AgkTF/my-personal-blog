import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faExternalLinkAlt,
	faHome
} from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => (
	<Layout view="404">
		<SEO title="404: Not found" />
		<div
			className="hero-body"
			style={{ paddingTop: '2rem', paddingBottom: '0rem' }}
		>
			<div className="container has-text-centered">
				<h1
					className="title is-size-1-widescreen is-size-2-desktop is-size-3-touch"
					style={{
						textShadow: '2px 1px 3px #666'
					}}
				>
					You&#39;ve been 404&#39;d
				</h1>
				<p className="subtitle is-size-4-desktop is-size-5-touch">
					The page you requested doesn&#39;t exist.
				</p>
			</div>
		</div>

		<section className="section" style={{ paddingTop: '0px' }}>
			<div className="container has-text-centered">
				<hr style={{ height: '1px' }} />
				<div className="columns is-multiline">
					<div className="column">
						<div className="content">
							<p className="is-size-5">
								Here&#39;s a list of other things to do:
							</p>
							<div
								className="tags has-addons are-medium"
								style={{ justifyContent: 'center' }}
							>
								<span className="tag is-warning">
									Visit the home page and explore.
								</span>
								<span className="tag is-primary">
									<Link to="/">
										<FontAwesomeIcon
											icon={faHome}
											size="sm"
											style={{ color: '#f7f7f7' }}
										/>
									</Link>
								</span>
							</div>
							<div
								className="tags has-addons are-medium"
								style={{ justifyContent: 'center' }}
							>
								<span className="tag is-warning">
									Take a look at my portfolio.
								</span>
								<span className="tag is-primary">
									<a href="https://agktf.com">
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											size="sm"
											style={{ color: '#f7f7f7' }}
										/>
									</a>
								</span>
							</div>
							<div
								className="tags has-addons are-medium"
								style={{ justifyContent: 'center' }}
							>
								<span className="tag is-warning">
									Just say Hi.
								</span>
								<span className="tag is-primary">
									<a href="mailto:ahmed.agk22@gmail.com">
										<FontAwesomeIcon
											icon={faEnvelope}
											size="sm"
											style={{ color: '#f7f7f7' }}
										/>
									</a>
								</span>
							</div>
							{/* <ul>
								<li>
									Visit <Link to="/">the home page</Link> and
									explore.
								</li>
								<li>
									Take a look at{' '}
									<a href="https://agktf.com">
										my portfolio.
									</a>
									<span className="help">
										<em>Psst.</em>
										<br />
										I&#39;m currently available for
										freelance work.
									</span>
								</li>
								<li>
									Just say Hi.{' '}
									<FontAwesomeIcon
										icon={faEnvelope}
										size="sm"
										style={{ color: '#fcd307' }}
									/>
								</li>
							</ul> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage;
