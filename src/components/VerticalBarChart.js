import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartTheme from './chartTheme'

const options = {
    ...chartTheme,
    chart: {
        type: 'column',
    },
    title: {
        text: 'My chart',
    },
    xAxis: {
        title: { text: 'Dates' },
        categories: ['Sept 3', 'Sept 10', 'Sept 17', 'Sept 24'],
    },
    yAxis: {
        title: {
            text: 'Issues',
        },
    },

    series: [
        {
            data: [1, 2, 1, 4],
        },
    ],
}

const VerticalBarChart = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default VerticalBarChart
