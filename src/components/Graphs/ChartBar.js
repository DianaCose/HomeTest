import React from 'react';
import { BarChart, Bar, XAxis, ReferenceLine, YAxis } from 'recharts';

export const ChartBar = (props) => {
	return (
		<BarChart width={props.width} height={props.height} data={props.data}>
			{props.hasAxis && <XAxis dataKey="name" />}
			{props.hasAxis && (
				<ReferenceLine
					y={4000}
					stroke="#4318FF"
					strokeDasharray="5 5"
					label={{
						position: 'left',
						value: '$179',
						fill: '#4318FF',
						fontSize: 12,
					}}
				/>
			)}
			<Bar
				dataKey="uv"
				fill="#4318FF"
				radius={15}
				background={{ fill: '#eee', radius: 15 }}
				barSize={props.barSize}
			/>
		</BarChart>
	);
};
