import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import NavigationBar from './components/NavBar'
import { Box } from '@primer/react'
import Polaris from './pages/Polaris'
import HighchartsPg from './pages/Highcharts'
import Visx from './pages/Visx'
import Carbon from './pages/Carbon'
import Highcharts from 'highcharts'
import '@carbon/styles/css/styles.css'

import '@carbon/charts/styles.css'
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
                        <Routes>
                            <Route path="/">
                                <Route index element={<HighchartsPg />} />
                                <Route path="polaris" element={<Polaris />} />
                                <Route path="visx" element={<Visx />} />
                                <Route path="carbon" element={<Carbon />} />
                            </Route>
                        </Routes>
                    </Box>
                </Box>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
