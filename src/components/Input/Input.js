import React from 'react';

import './Input.scss';

export const Input = (props) => {
	return (
		<div className="Home_input">
			<img src={props.svg} alt={props.label} className="Home__search-icon" />
			<input type="text" placeholder={props.label} />
		</div>
	);
};
