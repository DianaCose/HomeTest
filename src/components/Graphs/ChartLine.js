import { LineChart, Line } from 'recharts';

export const ChartLine = (props) => {
	return (
		<LineChart width={props.width} height={props.height} data={props.data}>
			<Line
				type="monotone"
				dataKey="pv"
				stroke="#8884d8"
				strokeWidth={2}
				dot={false}
			/>
		</LineChart>
	);
};
