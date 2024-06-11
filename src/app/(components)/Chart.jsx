"use client";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart({ stock }) {
	const prices = Object.values(stock["Time Series (Daily)"])
		.splice(0, 30)
		.map((data) => data["4. close"])
		.reverse();

	const data = {
		labels: Object.keys(stock["Time Series (Daily)"]).splice(0, 30).reverse(),
		datasets: [
			{
				label: "Price",
				data: prices,
				fill: true,
				tension: 0.1,
				backgroundColor: (context) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 400);
					gradient.addColorStop(0, "rgba(0,0,0,0.5");
					gradient.addColorStop(1, "rgba(0,0,128,0");
					return gradient;
				},
				borderColor: "rgba(0,0,0,0.2)",
				pointBackgroundColor: "rgba(0,0,0,0.2)",
				pointBorderColor: "transparent",
				pointHoverBackgroundColor: "rgba(0,0,0,0.7)",
				pointHoverBorderColor: "transparent",
				pointRadius: 4,
			},
		],
	};

	const options = {
		scales: {
			x: {
				grid: {
					display: true,
					borderDash: [5, 5],
					color: "rgba(128,128,128,0.1)",
				},
			},
			y: {
				grid: {
					display: true,
					borderDash: [5, 5],
					color: "rgba(128,128,128,0.1)",
				},
				ticks: {
					callback: function (value, index, values) {
						return "$" + value.toFixed(2);
					},
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		layout: {
			padding: {
				top: 20,
				bottom: 20,
			},
		},
		responsive: true,
		maintainAspectRatio: true,
		backgroundColor: "rgba(245, 245, 245, 0.5)",
		borderRadius: 10,
		title: {
			display: true,
			text: "Stock Price Over Time",
			font: {
				size: 18,
			},
			padding: {
				top: 30,
				bottom: 30,
			},
		},
		animation: {
			duration: 1000,
		},
	};

	return <Line data={data} options={options} />;
}
