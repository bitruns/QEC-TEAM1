import React from 'react';

const PageNotFound = (props) => {
	return (
		<div className="PageNotFound">
			{process.env.REACT_APP_PAGES_TITLE_PAGENOTFOUND}
		</div>
	);
}

export default PageNotFound;