import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, view }) => {
	return (
		<>
			<Header />
			<>{children}</>
			<Footer view={view} />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
