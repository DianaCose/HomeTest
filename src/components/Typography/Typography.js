import React from 'react';
import './Typography.scss';

export const Typography = (props) => {
	return (
		<>
			<div className="label">{props.label}</div>
			<div className="text">{props.text}</div>
		</>
	);
};
