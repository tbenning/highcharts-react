import { useEffect, useState } from 'react'
import HorizontalBarChart from '../components/highcharts/HorizontalBarChart'
import VerticalBarChart from '../components/highcharts/VerticalBarChart'
import LineChart from '../components/highcharts/LineChart'
import LineChartSingle from '../components/highcharts/LineChartSingle'
import StackedArea from '../components/highcharts/StackedArea'
import { Box, useTheme } from '@primer/react'
import Highcharts from 'highcharts'
import ChartWrapper from '../components/ChartWrapper'
import primitives from '@primer/primitives'
require('highcharts/modules/accessibility')(Highcharts)

export default function HighchartsPg() {
    const theme = useTheme()
    const colors = primitives.colors.light
    console.log(theme)
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
            },
            backgroundColor:
                theme.colorScheme === 'light'
                    ? primitives.colors.light.canvas.default
                    : primitives.colors.dark.canvas.default,
        },
    })
    // to do fix this idk how

    return (
        <>
            <ChartWrapper
                title="Types of issues occurring"
                description="Number of issues by year"
            >
                <LineChartSingle />
            </ChartWrapper>
            <ChartWrapper
                title="Types of issues occurring"
                description="Number of issues by year"
            >
                <LineChart />
            </ChartWrapper>
            <ChartWrapper
                title="Greenhouse gases from Norwegian economic activity"
                description="Million tonnes CO2 equivalents by year"
            >
                <StackedArea />
            </ChartWrapper>
            <ChartWrapper
                title="Types of issues occurring"
                description="Number of issues over time"
            >
                <HorizontalBarChart />
            </ChartWrapper>
            <ChartWrapper
                title="Types of issues occurring"
                description="Number of issues over time"
            >
                <VerticalBarChart />
            </ChartWrapper>
        </>
    )
}
