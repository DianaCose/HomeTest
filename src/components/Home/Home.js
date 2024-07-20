import React from 'react';
import './Home.scss';
import './../Typography/Typography.scss';
import { Input } from '../Input/Input';
import search from '../../assets/search.svg';
import { SmallCard } from '../SmallCard/SmallCard';
import { LargeCard } from '../LargeCard/LargeCard';
import { MediumCard } from '../MediumCard/MediumCard';
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
import bar_chart from '../../assets/bar_chart.svg';
import { ChartLine } from '../Graphs/ChartLine';
import { ChartBar } from '../Graphs/ChartBar';
import { dataLine } from '../../data/lineChartData';
import { dataBar } from '../../data/barChartData';

export const Home = () => {
	return (
		<div className="Home">
			<div className="Home__header">
				<div>
					<div className="Home__header_subtitle">Hi Andrei,</div>
					<div className="Home__header_title">Welcome to Venus!</div>
				</div>
				<Input svg={search} label={'Search'} />
			</div>
			<div className="Padding_container">
				<div className="wrapper">
					<SmallCard>
						<div className="spent_container">
							<div>
								<Typography
									label="Spent this month"
									text="$682.5"
									classLabel="label"
									classText="text"
								/>
							</div>
							<ChartBar
								width={90}
								height={60}
								data={dataLine}
								hasAxis={false}
							/>
						</div>
					</SmallCard>
					<SmallCard>
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
							<ChartLine data={dataLine} width={39} height={57} />
						</div>
					</SmallCard>
					<SmallCard>
						<div className="earnings">
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
					</SmallCard>
					<div className="activity">
						<div className="activity_container">
							<div>
								<Typography
									label="Activity"
									text="$540.50"
									classLabel="colored_chart_label"
									classText="colored_chart_text"
								/>
							</div>
							<ChartLine
								data={dataLine}
								width={100}
								height={40}
								className={'activity_chart'}
							/>
						</div>
					</div>
				</div>
				<div className="wrapper">
					<LargeCard>
						<div className="Padding_container">
							<div className="largeChart_header">
								<div>
									<Typography
										label="Total Spent"
										text="$682.5"
										classLabel="label"
										classText="text"
									/>
								</div>
								<div className="small_bar_chart">
									<img src={bar_chart} alt="bar_chart" />
								</div>
							</div>
						</div>
						<div className="largeChart_container">
							<ChartBar
								width={680}
								height={240}
								data={dataBar}
								hasAxis={true}
								barSize={40}
							/>
						</div>
					</LargeCard>
					<MediumCard>
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
					</MediumCard>
				</div>
				<div className="wrapper">
					<MediumCard>
						<div className="track_chart">
							<div className="Padding_container">
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
						<div className="track_chart_graph">
							<ChartBar
								width={350}
								height={180}
								data={dataLine}
								hasAxis={false}
								barSize={30}
							/>
						</div>
					</MediumCard>
					<MediumCard>
						<div className="Padding_container">
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
					</MediumCard>
					<MediumCard>
						<div className="Padding_container">
							<div className="Home__header_title">27 May</div>
							<div className="calendar">
								<div className="calendar_container">
									<img src={rectangle} alt="rectangle" />
									<div>
										<Typography
											label="Meet w/ Simmmple"
											text="01:00 PM - 02:00 PM"
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
											label="Fitness Training"
											text="02:00 PM - 03:00 PM"
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
											label="Reading time"
											text="03:00 PM - 04:00 PM"
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
					</MediumCard>
				</div>
			</div>
		</div>
	);
};
