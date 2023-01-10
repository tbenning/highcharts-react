import { Box } from '@primer/react'
import { Chart } from 'react-chartjs-2'
import ChartWrapper from '../components/ChartWrapper'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import LineChartMaria from '../components/visx/LineChartMaria'
import { LineChartXY } from '../components/visx/LineChartXY'
import { data } from '../components/visx/stats_for_denmark'

import React from 'react'

export default function Visx() {
    return (
        <Box>
            <ChartWrapper title="chart" description="description">
                <ParentSize>
                    {({ width, height }) => <LineChartXY height={400} />}
                </ParentSize>
            </ChartWrapper>
        </Box>
    )
}
