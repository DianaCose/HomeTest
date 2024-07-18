import React from 'react';

import './Input.scss';

export const Input = (props) => {
	return (
		<div className="Home_input">
			<img src={props.svg} alt={props.label} />
			<input type="text" placeholder={props.label} />
		</div>
	);
};
