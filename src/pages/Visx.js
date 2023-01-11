import { Box } from '@primer/react'
import { Chart } from 'react-chartjs-2'
import ChartWrapper from '../components/ChartWrapper'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import LineChartMaria from '../components/visx/LineChartMaria'
import { LineChartXY } from '../components/visx/LineChartXY'
import { AreaXY } from '../components/visx/AreaXY'
import { BarXY } from '../components/visx/BarXY'
import { data } from '../components/visx/stats_for_denmark'

import React from 'react'

export default function Visx() {
    return (
        <Box display="flex" flexDirection="column" gridGap={4}>
            <ChartWrapper title="Line Chart" description="description">
                <ParentSize>
                    {({ width, height }) => <LineChartXY height={400} />}
                </ParentSize>
            </ChartWrapper>
            <ChartWrapper title="Stacked Area Chart" description="description">
                <ParentSize>
                    {({ width, height }) => <AreaXY height={400} />}
                </ParentSize>
            </ChartWrapper>
            <ChartWrapper title="Bar Chart" description="description">
                <ParentSize>
                    {({ width, height }) => <BarXY height={400} />}
                </ParentSize>
            </ChartWrapper>
        </Box>
    )
}
