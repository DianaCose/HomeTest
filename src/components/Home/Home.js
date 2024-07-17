import React from 'react';
import './Home.scss';
import { Input } from '../Input/Input';
import search from '../../assets/search.svg';
import { SmallChart } from '../SmallChart/SmallChart';
import { LargeChart } from '../LargeChart/LargeChart';
import { MediumChart } from '../MediumChart/MediumChart';
import { Typography } from '../Typography/Typography';

export const Home = () => {
	return (
		<div className="Home">
			<div className="Home__header">
				<div>
					<div className="Home__header_small">Hi Andrei,</div>
					<div className="Home__header_title">Welcome to Venus!</div>
				</div>
				<Input svg={search} label={'Search'} />
			</div>
			<div>
				<SmallChart>
					<div className="chart_container">
						<Typography label="Spent this month" text="$682.5" />
					</div>
				</SmallChart>
				<LargeChart />
				<MediumChart />
			</div>
		</div>
	);
};
