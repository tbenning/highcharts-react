import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import chartTheme from './chartTheme'

const options = {
    ...chartTheme,
    chart: {
        type: 'area',
    },
    title: {
        text: 'Greenhouse gases from Norwegian economic activity',
    },
    subtitle: {
        text:
            'Source: ' +
            '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
            'target="_blank">SSB</a>',
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Million tonnes CO<sub>2</sub>-equivalents',
        },
    },
    tooltip: {
        shared: true,
        headerFormat:
            '<span style="font-size:12px"><b>{point.key}</b></span><br>',
        backgroundColor: '#fff',
    },
    plotOptions: {
        series: {
            pointStart: 2012,
        },
        area: {
            stacking: 'normal',
            lineColor: '#fff',
            lineWidth: 1,
            //   marker: {
            //     lineWidth: 1.5,
            //     lineColor: "#fff",
            //   },
        },
    },
    series: [
        {
            name: 'Ocean transport',
            data: [
                13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214,
            ],
            lineColor: '#0969DA',
            lineWidth: 1.5,
            marker: {
                enabled: false,
                fillColor: '#0969DA',
            },
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                stops: [
                    [0, '#DDF4FF'],
                    [1, 'rgba(255,255,255,0)'],
                ],
            },
        },
        {
            name: 'Households',
            data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039],
            lineColor: '#E16F24',
            lineWidth: 1.5,
            marker: {
                enabled: false,
                fillColor: '#E16F24',
            },
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                stops: [
                    [0, '#FFF1E5'],
                    [1, 'rgba(255,255,255,0)'],
                ],
            },
        },
        {
            name: 'Agriculture and hunting',
            data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913],
            lineColor: '#2DA44E',
            lineWidth: 1.5,
            marker: {
                enabled: false,
                fillColor: '#2DA44E',
            },
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                stops: [
                    [0, '#DAFBE1'],
                    [1, 'rgba(255,255,255,0)'],
                ],
            },
        },
        {
            name: 'Air transport',
            data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550],
            lineColor: '#BF3989',
            lineWidth: 1.5,
            marker: {
                enabled: false,
                fillColor: '#BF3989',
            },
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                stops: [
                    [0, '#FFEFF7'],
                    [1, 'rgba(255,255,255,0)'],
                ],
            },
        },
        {
            name: 'Construction',
            data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186],
            lineColor: '#57606A',
            lineWidth: 1.5,
            marker: {
                enabled: false,
                fillColor: '#57606A',
            },
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.5 },
                stops: [
                    [0, '#C9D1D9'],
                    [1, 'rgba(255,255,255,0)'],
                ],
            },
        },
    ],
}

const StackedArea = () => (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
)

export default StackedArea
