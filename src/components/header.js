import React from 'react';
import brand from '../images/brand.png';
import { Link } from 'gatsby';

const Header = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<Link className="navbar-item" to="/">
				<img
					src={brand}
					alt="Official Blog Logo"
					style={{ maxHeight: '2.5rem' }}
				/>
			</Link>
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
