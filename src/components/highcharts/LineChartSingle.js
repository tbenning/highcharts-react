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
        spacing: 4,
    },
    labels: {
        align: 'left',
    },
    legend: {
        enabled: false,
    },
    yAxis: {
        title: {
            text: 'Issues',
        },
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

const LineChartSingle = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default LineChartSingle
