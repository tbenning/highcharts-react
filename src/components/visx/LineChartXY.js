import { Box } from '@primer/react'
import {
    AnimatedAxis,
    AnimatedGrid,
    AnimatedLineSeries,
    XYChart,
    Tooltip,
} from '@visx/xychart'
import customTheme from './visxTheme'
const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
}

export const LineChartXY = ({ height }) => {
    return (
        <XYChart
            height={height}
            xScale={{ type: 'band' }}
            yScale={{ type: 'linear' }}
            theme={customTheme}
        >
            <AnimatedAxis orientation="bottom" />
            <AnimatedAxis orientation="left" />
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Line 1" data={data1} {...accessors} />
            <AnimatedLineSeries dataKey="Line 2" data={data2} {...accessors} />
            <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showVerticalCrosshair
                showSeriesGlyphs
                renderTooltip={({ tooltipData, colorScale }) => (
                    <Box>
                        <Box display="flex" alignItems="center" gap={2} mb={1}>
                            <div
                                style={{
                                    backgroundColor: colorScale(
                                        tooltipData.nearestDatum.key
                                    ),
                                    width: 8,
                                    height: 8,
                                    borderRadius: 10,
                                    marginRight: 4,
                                }}
                            />
                            <div
                                style={{
                                    color: colorScale(
                                        tooltipData.nearestDatum.key
                                    ),
                                }}
                            >
                                {tooltipData.nearestDatum.key}
                            </div>
                        </Box>

                        {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                        {', '}
                        {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                    </Box>
                )}
            />
        </XYChart>
    )
}

const data1 = [
    {
        x: '2018-03-01',
        y: 30,
    },
    {
        x: '2018-04-01',
        y: 16,
    },
    {
        x: '2018-05-01',
        y: 17,
    },
    {
        x: '2018-06-01',
        y: 24,
    },
    {
        x: '2018-07-01',
        y: 47,
    },
    {
        x: '2018-08-01',
        y: 32,
    },
    {
        x: '2018-09-01',
        y: 8,
    },
    {
        x: '2018-10-01',
        y: 27,
    },
    {
        x: '2018-11-01',
        y: 31,
    },
    {
        x: '2018-12-01',
        y: 105,
    },
    {
        x: '2019-01-01',
        y: 66,
    },
    {
        x: '2019-02-01',
        y: 181,
    },
    {
        x: '2019-03-01',
        y: 32,
    },
    {
        x: '2019-04-01',
        y: 24,
    },
    {
        x: '2019-05-01',
        y: 96,
    },
    {
        x: '2019-06-01',
        y: 111,
    },
]

const data2 = [
    {
        x: '2018-03-01',
        y: 20,
    },
    {
        x: '2018-04-01',
        y: 26,
    },
    {
        x: '2018-05-01',
        y: 27,
    },
    {
        x: '2018-06-01',
        y: 24,
    },
    {
        x: '2018-07-01',
        y: 27,
    },
    {
        x: '2018-08-01',
        y: 22,
    },
    {
        x: '2018-09-01',
        y: 2,
    },
    {
        x: '2018-10-01',
        y: 27,
    },
    {
        x: '2018-11-01',
        y: 21,
    },
    {
        x: '2018-12-01',
        y: 25,
    },
    {
        x: '2019-01-01',
        y: 26,
    },
    {
        x: '2019-02-01',
        y: 48,
    },
    {
        x: '2019-03-01',
        y: 142,
    },
    {
        x: '2019-04-01',
        y: 14,
    },
    {
        x: '2019-05-01',
        y: 106,
    },
    {
        x: '2019-06-01',
        y: 11,
    },
]
