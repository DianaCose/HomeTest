import './Sidebar.scss';
import logo from '../../assets/logo.svg';
import dashboard from '../../assets/dashboard.svg';
import activity from '../../assets/activity.svg';
import library from '../../assets/library.svg';
import security from '../../assets/security.svg';
import schedule from '../../assets/schedule.svg';
import payouts from '../../assets/payouts.svg';
import settings from '../../assets/settings.svg';
import sign_out from '../../assets/sign_out.svg';

const MenuItems = [
	{
		icon: activity,
		name: 'Activity',
	},
	{
		icon: library,
		name: 'Library',
	},
	{
		icon: security,
		name: 'Security',
	},
	{
		icon: schedule,
		name: 'Schedules',
	},
	{
		icon: payouts,
		name: 'Payouts',
	},
	{
		icon: settings,
		name: 'Settings',
	},
];

export const Sidebar = () => {
	return (
		<div className="Sidebar">
			<div className="Sidebar__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="Sidebar__menu">
				<div className="Sidebar__selected_item">
					<img src={dashboard} alt={dashboard} />
					<p>Dashboard</p>
				</div>
				{MenuItems.map((item, index) => (
					<div key={index} className="Sidebar__item">
						<img src={item.icon} alt={item.name} />
						<p>{item.name}</p>
					</div>
				))}
			</div>
			<div className="log_out">
				<div className="Sidebar__item">
					<img src={sign_out} alt="sign out" />
					<p>Log out</p>
				</div>
			</div>
		</div>
	);
};
