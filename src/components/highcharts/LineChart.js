import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import getChartTheme from './chartTheme'
import primitives from '@primer/primitives'

const chartTheme = getChartTheme()
const colors = primitives.colors.light

const options = {
    ...chartTheme,
    chart: {
        type: 'spline',
        spacing: 0,
    },
    labels: {
        align: 'left',
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        x: -8,
        itemStyle: {
            fontWeight: 'regular',
            font: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
    },
    yAxis: {
        title: {
            text: 'Issues',
        },
        opposite: true,
    },
    title: {
        text: undefined,
        align: 'left',
        style: { fontWeight: 'bold' },
        useHTML: true,
    },
    plotOptions: {
        series: {
            pointStart: 2012,
        },
        spline: {
            marker: {
                enabled: false,
            },
        },
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6, 5, 3, 2, 12],
            lineWidth: 1.5,
            // color: colors.scale.blue[5],
        },
        {
            data: [2, 3, 6, 3, 2, 1, 3, 3, 8, 7],
            lineWidth: 1.5,
            // color: colors.scale.orange[4],
        },
        {
            data: [3, 6, 3, 2, 1, 3, 3, 8, 7, 4],
            lineWidth: 2,
            // color: colors.scale.green[4],
            dashStyle: 'ShortDashDot',
        },
        {
            data: [6, 3, 2, 1, 3, 3, 8, 7, 4, 3],
            lineWidth: 2,
            // color: colors.scale.pink[5],
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
