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
                        <StackedArea />
                        <LineChart />
                        <HorizontalBarChart />
                        <VerticalBarChart />
                    </Box>
                </Box>
                <NewPlayground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
