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
import avatar from '../../assets/avatar.svg';
import location from '../../assets/location.svg';
import onTrack from '../../assets/onTrack.svg';
import arrow_up from '../../assets/arrow_up.svg';
import transport from '../../assets/transport.svg';
import grocery from '../../assets/grocery.svg';
import subscription from '../../assets/subscription.svg';
import arrow_back from '../../assets/arrow_back.svg';
import rectangle from '../../assets/rectangle.svg';

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
								<Typography
									label="Spent this month"
									text="$682.5"
									classLabel="label"
									classText="text"
								/>
							</div>
						</SmallChart>
					</div>
					<SmallChart>
						<div className="new_client">
							<img src={newClient} alt="clients icon" />
							<div>
								<Typography
									label="New clients"
									text="321"
									classLabel="label"
									classText="text"
								/>
							</div>
						</div>
					</SmallChart>

					<SmallChart>
						<div className="new_client">
							<img src={earnings} alt="earnings icon" />
							<div>
								<Typography
									label="Earnings"
									text="$350.40"
									classLabel="label"
									classText="text"
								/>
							</div>
						</div>
					</SmallChart>
					<div className="activity">
						<div className="chart_container">
							<Typography
								label="Activity"
								text="$540.50"
								classLabel="colored_chart_label"
								classText="colored_chart_text"
							/>
						</div>
					</div>
				</div>
				<div className="wrapper">
					<LargeChart>
						<div className="chart_container">
							<Typography
								label="Total Spent"
								text="$682.5"
								classLabel="label"
								classText="text"
							/>
						</div>
					</LargeChart>
					<MediumChart>
						<div className="user_chart">
							<img src={avatar} alt="avatar" />
							<div>
								<div className="user_chart_text">Charles Robbie</div>
								<div className="location">
									<img
										src={location}
										alt="location"
										className="user_chart_svg"
									/>
									<div className="user_chart_label">New York, USA</div>
								</div>
							</div>
							<div className="details">
								<div className="user_details">
									<Typography
										label="Projects"
										text="28"
										classLabel="small_label"
										classText="text"
									/>
								</div>
								<div className="user_details">
									<Typography
										label="Followers"
										text="643"
										classLabel="small_label"
										classText="text"
									/>
								</div>
								<div className="user_details">
									<Typography
										label="Following"
										text="76"
										classLabel="small_label"
										classText="text"
									/>
								</div>
							</div>
						</div>
					</MediumChart>
				</div>
				<div className="wrapper">
					<MediumChart>
						<div className="track_chart">
							<div className="chart_container">
								<Typography
									label="Spent this month"
									text="$682.5"
									classLabel="small_label"
									classText="text"
								/>
								<div className="onTrack">
									<img src={onTrack} alt="on track" />
									<div>On track</div>
								</div>
							</div>
							<div className="percentage">
								<img src={arrow_up} alt="arrow_up" />
								<div>+2.45%</div>
							</div>
						</div>
					</MediumChart>
					<MediumChart>
						<div className="chart_container">
							<div className="transaction_title">Your transactions</div>
							<div className="transaction">
								<img src={transport} alt="transport" />
								<div>
									<Typography
										label="Public Transport"
										text="22 September 2020"
										classLabel="medium_text"
										classText="small_label"
									/>
								</div>
							</div>
							<div className="transaction">
								<img src={grocery} alt="grocery" />
								<div>
									<Typography
										label="Grocery Store"
										text="18 September 2020"
										classLabel="medium_text"
										classText="small_label"
									/>
								</div>
							</div>
							<div className="transaction">
								<img src={subscription} alt="subscription" />
								<div>
									<Typography
										label="Public Transport"
										text="22 September 2020"
										classLabel="medium_text"
										classText="small_label"
									/>
								</div>
							</div>
							<div className="back_container ">
								<a href="#" className="view_all">
									View all
								</a>
								<img src={arrow_back} alt="arrow-back" />
							</div>
						</div>
					</MediumChart>
					<MediumChart>
						<div className="chart_container">
							<div className="Home__header_title">27 May</div>
							<div className="calendar">
								<div className="calendar_container">
									<img src={rectangle} alt="rectangle" />
									<div>
										<Typography
											label="Public Transport"
											text="22 September 2020"
											classLabel="medium_text"
											classText="small_label"
										/>
									</div>
								</div>
							</div>
							<div className="calendar">
								<div className="calendar_container">
									<img src={rectangle} alt="rectangle" />
									<div>
										<Typography
											label="Grocery Store"
											text="18 September 2020"
											classLabel="medium_text"
											classText="small_label"
										/>
									</div>
								</div>
							</div>
							<div className="calendar">
								<div className="calendar_container">
									<img src={rectangle} alt="rectangle" />
									<div>
										<Typography
											label="Public Transport"
											text="22 September 2020"
											classLabel="medium_text"
											classText="small_label"
										/>
									</div>
								</div>
							</div>
							<div className="back_container ">
								<a href="#" className="view_all">
									View all Tasks
								</a>
								<img src={arrow_back} alt="arrow-back" />
							</div>
						</div>
					</MediumChart>
				</div>
			</div>
		</div>
	);
};
