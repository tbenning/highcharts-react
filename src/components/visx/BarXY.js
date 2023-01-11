import { useContext } from 'react'
import { Box } from '@primer/react'
import {
    AnimatedAxis,
    AnimatedGrid,
    BarSeries,
    XYChart,
    Tooltip,
    DataContext,
    DataProvider,
} from '@visx/xychart'
import { LegendOrdinal } from '@visx/legend'
import cityTemperature from '@visx/mock-data/lib/mocks/cityTemperature'
import customTheme from './visxTheme'
import { keys, theme } from 'highcharts'

const data = cityTemperature.slice(225, 275)
console.log({ data })

const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
}

export const BarXY = ({ height }) => {
    return (
        <>
            <DataProvider
                xScale={{ type: 'band' }}
                yScale={{ type: 'linear' }}
                theme={customTheme}
            >
                <XYChart height={height}>
                    <AnimatedAxis orientation="bottom" label="Label X" />
                    <AnimatedAxis orientation="left" label="Label Y" />
                    <AnimatedGrid columns={false} numTicks={4} />
                    {console.log('yaccessor', accessors)}
                    <BarSeries
                        dataKey="New York"
                        data={data}
                        xAccessor={accessors.xAccessor}
                        yAccessor={accessors.yAccessor}
                    />
                    <Tooltip
                        snapTooltipToDatumX
                        snapTooltipToDatumY
                        showVerticalCrosshair
                        showSeriesGlyphs
                        renderTooltip={({ tooltipData, colorScale }) => (
                            <Box p={2}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap={2}
                                    mb={1}
                                >
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

                                {accessors.xAccessor(
                                    tooltipData.nearestDatum.datum
                                )}
                                {', '}
                                {accessors.yAccessor(
                                    tooltipData.nearestDatum.datum
                                )}
                            </Box>
                        )}
                    />
                </XYChart>
                <Legend />
            </DataProvider>
        </>
    )
}

function Legend() {
    const { colorScale, theme } = useContext(DataContext)
    return (
        <LegendOrdinal
            style={{ backgroundColor: theme.backgroundColor, display: 'flex' }}
            scale={colorScale}
            direction="row"
            itemMargin="8px 8px 8px 0"
            shape="line"
            labelMargin="0 15px 0 0"
        />
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
        y: 14,
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
