import React from 'react';
import broken from './images/imbroken.gif'

const NoMatch = (props) => {
	return (
		<div className="page-container">
			<div className="bg" style={{ backgroundImage: 'url(' + broken + ')'}}/>
			<h1 className="title">404</h1>
		</div>
	)
};

export default NoMatch;