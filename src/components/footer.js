import React from 'react';
import Logo from '../images/brand.png';

const footer = () => {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<div className="columns">
					<div className="column is-4">
						<img src={Logo} />
					</div>
					<div className="column is-8"></div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
