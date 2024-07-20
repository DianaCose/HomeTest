import React from 'react';
import '../Home/Home.scss';
import './../Typography/Typography.scss';
import { Input } from '../Input/Input';
import search from '../../assets/search.svg';
import './Header.scss';

export const Header = (props) => {
	return (
		<div className="Home__header">
			<div>
				<div className="Home__header_subtitle">Hi {props.name},</div>
				<div className="Home__header_title">Welcome to Venus!</div>
			</div>
			<Input svg={search} label={'Search'} />
		</div>
	);
};
