import React from 'react';
import './Home.scss';
import { Input } from '../Input/Input';
import search from '../../assets/search.svg';
import { SmallChart } from '../SmallChart/SmallChart';
import { LargeChart } from '../LargeChart/LargeChart';
import { MediumChart } from '../MediumChart/MediumChart';
import { Typography } from '../Typography/Typography';
import newClient from '../../assets/newClient.svg';
import earnings from '../../assets/earnings.svg';

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
			<div className="Home_content">
				<div className="wrapper">
					<div>
						<SmallChart>
							<div className="chart_container">
								<Typography label="Spent this month" text="$682.5" />
							</div>
						</SmallChart>
					</div>

					<SmallChart>
						<div className="new_client">
							<img src={newClient} alt="clients icon" />
							<div>
								<Typography label="New clients" text="321" />
							</div>
						</div>
					</SmallChart>

					<SmallChart>
						<div className="new_client">
							<img src={earnings} alt="earnings icon" />
							<div>
								<Typography label="Earnings" text="$350.40" />
							</div>
						</div>
					</SmallChart>
					<div className="four">
						<SmallChart>
							<div className="chart_container">
								<Typography label="Activity" text="$540.50" />
							</div>
						</SmallChart>
					</div>
				</div>
				<div className="wrapper">
					<div className="five">
						<LargeChart />
					</div>
					<div className="six">
						<MediumChart />
					</div>
				</div>

				<div className="wrapper">
					<div className="seven">
						<MediumChart />
					</div>
					<div className="eight">
						<MediumChart />
					</div>
					<div className="nine">
						<MediumChart />
					</div>
				</div>
			</div>
		</div>
	);
};
