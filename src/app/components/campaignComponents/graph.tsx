
import React, { useState } from 'react';
import { Box, Card } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const CHART_DATA = [
    {
        year: 2019,
        data: [
            { name: 'Total Income', data: [1000, 2500, 2000, 5000, 3000, 4000,] },
        ],
    },
    ];
export default function EcommerceYearlySales() {
    const [seriesData, setSeriesData] = useState(2019);
    const chartOptions = {
        xaxis: {
            categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        },
        yaxis: {
            categories: ['1K', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
        },
        chart: {
            toolbar: {
                show: false,
            }
        }
    };
    return (
        <Card>
            {CHART_DATA.map((item) => (
                <Box key={item.year}>
                    {item.year === seriesData && (
                        <ReactApexChart type="area" series={item.data} options={chartOptions} height={249} />
                    )}
                </Box>
            ))}
        </Card>
    );
}



