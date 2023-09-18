import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

	const studentMarksData = [
		{ id: 1, name: 'John Smith', math: 85, physics: 78, chemistry: 90 },
		{ id: 2, name: 'Emma Johnson', math: 78, physics: 85, chemistry: 88 },
		{ id: 3, name: 'Michael Davis', math: 92, physics: 88, chemistry: 94 },
		{ id: 4, name: 'Olivia Wilson', math: 88, physics: 90, chemistry: 87 },
		{ id: 5, name: 'William Brown', math: 76, physics: 70, chemistry: 79 },
		{ id: 6, name: 'Sophia Jones', math: 95, physics: 92, chemistry: 96 },
		{ id: 7, name: 'Liam Martinez', math: 70, physics: 65, chemistry: 72 },
		{ id: 8, name: 'Emily Anderson', math: 89, physics: 86, chemistry: 91 },
		{ id: 9, name: 'James Taylor', math: 93, physics: 89, chemistry: 95 },
		{ id: 10, name: 'Ava White', math: 82, physics: 75, chemistry: 84 }
	];


	return (
		<div>
			<LChart width={800} height={400} data={studentMarksData}>
				<XAxis dataKey={"name"}/>
				<YAxis></YAxis>
				<Line dataKey={"math"} stroke='blue'></Line>
				<Line dataKey={"physics"} stroke='purple'></Line>

			</LChart>
		</div>
	);
};

export default LineChart;