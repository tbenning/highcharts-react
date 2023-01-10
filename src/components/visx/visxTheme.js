import { buildChartTheme } from '@visx/xychart'
import primitives from '@primer/primitives'

const color = primitives.colors.light
export default buildChartTheme({
    backgroundColor: color.canvas.default,
    colors: [color.scale.blue[4], color.scale.orange[4], color.scale.green[4]],
    gridColor: color.border.muted,
    gridColorDark: color.border.default,
    svgLabelBig: { fill: color.fg.muted },
    svgLabelSmall: { fill: color.fg.muted },
    tickLength: 4,
})
