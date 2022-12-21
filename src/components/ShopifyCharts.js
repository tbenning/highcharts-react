import { PolarisVizProvider, BarChart } from '@shopify/polaris-viz'
import '@shopify/polaris-viz/build/esm/styles.css'
// Polaris Data Viz Lib
// https://github.com/Shopify/polaris-viz

export default function ShopifyCharts() {
    return (
        <div>
            <div
                style={{
                    height: '500px',
                    marginBottom: '50px',
                }}
            >
                <PolarisVizProvider
                    themes={{
                        Default: {
                            chartContainer: {
                                padding: '20px',
                            },
                        },
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
                    {/* <BarChart
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
                /> */}
                </PolarisVizProvider>
            </div>
            <div
                style={{
                    height: '500px',
                    marginBottom: '50px',
                }}
            >
                <PolarisVizProvider
                    themes={{
                        Default: {
                            chartContainer: {
                                padding: '20px',
                            },
                        },
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
                    {/* <BarChart
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
                /> */}
                </PolarisVizProvider>
            </div>
        </div>
    )
}
