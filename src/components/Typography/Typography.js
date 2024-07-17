import React from 'react';
import './Typography.scss';

export const Typography = (props) => {
	return (
		<>
			<div className={props.classLabel}>{props.label}</div>
			<div className={props.classText}>{props.text}</div>
		</>
	);
};
