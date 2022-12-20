import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartTheme from './chartTheme'

const options = {
    ...chartTheme,
    chart: {
        type: 'spline',
        spacing: 50,
    },
    labels: {
        align: 'left',
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        x: -8,
        title: {
            style: { fontWeight: 'normal' },
        },
    },
    yAxis: {
        title: {
            text: 'Issues',
        },
        opposite: true,
    },
    title: {
        text: 'My chart',
        align: 'left',
        style: { fontWeight: 'bold' },
        useHTML: true,
    },
    plotOptions: {
        series: {
            pointStart: 2012,
        },
    },
    subtitle: { text: 'Number of issues in my chart', align: 'left' },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6, 5, 3, 2, 12],
            lineWidth: 1.5,
            dashStyle: 'longdashdot',
        },
        {
            data: [2, 3, 6, 3, 2, 1, 3, 3, 8, 7],
            lineWidth: 1.5,
        },
        {
            data: [3, 6, 3, 2, 1, 3, 3, 8, 7, 4],
            lineWidth: 1.5,
        },
    ],
}

// Possible Line Styles
// 'Solid',
// 'ShortDash',
// 'ShortDot',
// 'ShortDashDot',
// 'ShortDashDotDot',
// 'Dot',
// 'Dash',
// 'LongDash',
// 'DashDot',
// 'LongDashDot',
// 'LongDashDotDot'

const LineChart = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default LineChart
