import { ThemeProvider, BaseStyles } from '@primer/react'
import NewPlayground from './components/NewPlayground'
import ColorModeSwitcher from './ColorModeSwitcher'
import NavigationBar from './components/NavBar'
import HorizontalBarChart from './components/HorizontalBarChart'
import VerticalBarChart from './components/VerticalBarChart'
import LineChart from './components/LineChart'
import StackedArea from './components/StackedArea'
import { Box } from '@primer/react'
import Highcharts from 'highcharts'
import ChartWrapper from './components/ChartWrapper'
import ShopifyCharts from './components/ShopifyCharts'
require('highcharts/modules/accessibility')(Highcharts)

function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <NavigationBar />
                <ColorModeSwitcher />
                <Box bg="canvas.subtle">
                    <Box
                        maxWidth="960px"
                        m="auto"
                        p={4}
                        display="flex"
                        flexDirection="column"
                        gridGap={5}
                    >
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
                        <VerticalBarChart />
                        <ShopifyCharts />
                    </Box>
                </Box>
                <NewPlayground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
