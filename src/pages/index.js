import React from 'react';
import SEO from '../components/seo';
import Logo from '../images/whale.svg';
import PostBox from '../components/post-box';
import Layout from '../components/layout';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="hero is-medium">
			<div
				className="hero-body"
				style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
			>
				<div className="container has-text-centered">
					<div className="columns">
						<div className="column is-6 is-offset-3">
							<img
								src={Logo}
								style={{ width: '75%', marginBottom: '2.5rem' }}
							/>
							<h1 className="title">Welcome to AgkTF's Blog</h1>
							<h2 className="subtitle">
								Web Development, Front To Back
							</h2>
							<div
								className="notification is-warning"
								style={{
									margin: 'auto',
									maxWidth: '40%',
									paddingLeft: '1rem',
									paddingRight: '1rem'
								}}
							>
								<strong>Explore the latest articles</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<PostBox />
					<PostBox />
					<PostBox />
					<PostBox />
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
