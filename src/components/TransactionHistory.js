import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
    },
};
const TransactionHistory = ({ coinsHistroy }) => {
    const data = {
        labels: coinsHistroy.map((item) => item.newAddress),
        datasets: [
            {
                label: 'Jobcoin transactions',
                data: coinsHistroy.map((item) => item.balance),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <>
            <Line options={options} data={data} />
            <div className='table-data'>
                <table>
                    <thead>
                        <tr>
                            <th>Jobcoin ID</th>
                            <th>Jobcoin Name</th>
                            <th>Jobcoin new Address</th>
                            <th>Jobcoin price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsHistroy.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.newAddress}</td>
                                <td>{item.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TransactionHistory;
