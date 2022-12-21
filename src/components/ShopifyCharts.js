import {
    PolarisVizProvider,
    BarChart,
    SimpleBarChart,
} from '@shopify/polaris-viz'
import '@shopify/polaris-viz/build/esm/styles.css'

// Polaris Data Viz Lib
// https://github.com/Shopify/polaris-viz

export default function ShopifyCharts() {
    return (
        <PolarisVizProvider
            themes={{
                Default: {
                    chartContainer: {
                        padding: '20px',
                    },
                },
            }}
        >
            <div
                style={{
                    height: '500px',
                }}
            >
                <SimpleBarChart
                    theme="Light"
                    data={[
                        {
                            data: [
                                {
                                    key: 'Womens Leggings',
                                    value: 3,
                                },
                                {
                                    key: 'Mens Bottoms',
                                    value: 0,
                                },
                                {
                                    key: 'Mens Shorts',
                                    value: 4,
                                },
                                {
                                    key: 'Socks',
                                    value: 8,
                                },
                                {
                                    key: 'Hats',
                                    value: 48,
                                },
                                {
                                    key: 'Ties',
                                    value: 1,
                                },
                            ],
                            name: 'BCFM 2019',
                        },
                        {
                            data: [
                                {
                                    key: 'Womens Leggings',
                                    value: 4,
                                },
                                {
                                    key: 'Mens Bottoms',
                                    value: 0,
                                },
                                {
                                    key: 'Mens Shorts',
                                    value: 5,
                                },
                                {
                                    key: 'Socks',
                                    value: 15,
                                },
                                {
                                    key: 'Hats',
                                    value: 8,
                                },
                                {
                                    key: 'Ties',
                                    value: 5,
                                },
                            ],
                            name: 'BCFM 2020',
                        },
                        {
                            data: [
                                {
                                    key: 'Womens Leggings',
                                    value: 7,
                                },
                                {
                                    key: 'Mens Bottoms',
                                    value: 0,
                                },
                                {
                                    key: 'Mens Shorts',
                                    value: 6,
                                },
                                {
                                    key: 'Socks',
                                    value: 12,
                                },
                                {
                                    key: 'Hats',
                                    value: 50,
                                },
                                {
                                    key: 'Ties',
                                    value: 5,
                                },
                            ],
                            name: 'BCFM 2021',
                        },
                    ]}
                    type="stacked"
                />
            </div>
            <div
                style={{
                    height: '500px',
                    marginBottom: '50px',
                }}
            >
                <BarChart
                    theme="Light"
                    data={[
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 3,
                                },
                                {
                                    key: 'Tuesday',
                                    value: -7,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -7,
                                },
                                {
                                    key: 'Thursday',
                                    value: -8,
                                },
                                {
                                    key: 'Friday',
                                    value: 50,
                                },
                                {
                                    key: 'Saturday',
                                    value: 0,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Breakfast',
                        },
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 4,
                                },
                                {
                                    key: 'Tuesday',
                                    value: 0,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -10,
                                },
                                {
                                    key: 'Thursday',
                                    value: 15,
                                },
                                {
                                    key: 'Friday',
                                    value: 8,
                                },
                                {
                                    key: 'Saturday',
                                    value: 50,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Lunch',
                        },
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 7,
                                },
                                {
                                    key: 'Tuesday',
                                    value: 0,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -15,
                                },
                                {
                                    key: 'Thursday',
                                    value: -12,
                                },
                                {
                                    key: 'Friday',
                                    value: 50,
                                },
                                {
                                    key: 'Saturday',
                                    value: 5,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Dinner',
                        },
                    ]}
                />
            </div>
            <div
                style={{
                    height: '500px',
                    marginBottom: '50px',
                }}
            >
                <BarChart
                    data={[
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 3,
                                },
                                {
                                    key: 'Tuesday',
                                    value: -7,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -7,
                                },
                                {
                                    key: 'Thursday',
                                    value: -8,
                                },
                                {
                                    key: 'Friday',
                                    value: 50,
                                },
                                {
                                    key: 'Saturday',
                                    value: 0,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Breakfast',
                        },
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 4,
                                },
                                {
                                    key: 'Tuesday',
                                    value: 0,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -10,
                                },
                                {
                                    key: 'Thursday',
                                    value: 15,
                                },
                                {
                                    key: 'Friday',
                                    value: 8,
                                },
                                {
                                    key: 'Saturday',
                                    value: 50,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Lunch',
                        },
                        {
                            data: [
                                {
                                    key: 'Monday',
                                    value: 7,
                                },
                                {
                                    key: 'Tuesday',
                                    value: 0,
                                },
                                {
                                    key: 'Wednesday',
                                    value: -15,
                                },
                                {
                                    key: 'Thursday',
                                    value: -12,
                                },
                                {
                                    key: 'Friday',
                                    value: 50,
                                },
                                {
                                    key: 'Saturday',
                                    value: 5,
                                },
                                {
                                    key: 'Sunday',
                                    value: 0.1,
                                },
                            ],
                            name: 'Dinner',
                        },
                    ]}
                />
            </div>
        </PolarisVizProvider>
    )
}
