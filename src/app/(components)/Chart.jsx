"use client";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart({ stock }) {
	const prices = Object.values(stock["Weekly Adjusted Time Series"])
		.splice(0, 30)
		.map((data) => data["4. close"])
		.reverse();

	const data = {
		labels: Object.keys(stock["Weekly Adjusted Time Series"])
			.splice(0, 30)
			.reverse(),
		datasets: [
			{
				label: "Price",
				data: prices,
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	return <Line data={data} />;
}
