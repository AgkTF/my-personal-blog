import React from 'react';
import brand from '../images/brand.png';

const Header = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<a className="navbar-item" href="/">
				<img
					src={brand}
					alt="Official Blog Logo"
					style={{ maxHeight: '2.5rem' }}
				/>
			</a>
		</div>
		<div className="navbar-menu">
			{/* <div className="navbar-end">
				<div className="navbar-item">
					<input
						className="input is-rounded is-small"
						type="text"
						placeholder="Search the blog..."
					></input>
				</div>
			</div> */}
		</div>
	</nav>
);

export default Header;
