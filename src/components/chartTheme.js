import React from 'react'
import primitives from '@primer/primitives'

const getChartTheme = (theme = 'light') => {
    const colors = primitives.colors['light']
    return {
        colors: [
            colors.scale.blue[5],
            colors.scale.orange[4],
            colors.scale.green[4],
            colors.scale.gray[4],
            colors.scale.pink[5],
            colors.scale.red[4],
            colors.scale.purple[5],
        ],
        tooltip: {
            backgroundColor: colors.canvas.default,
            borderRadius: 6,
            borderColor: colors.border.default,
        },
        credits: {
            enabled: false,
        },
        title: {
            align: 'left',
            style: { fontWeight: 'bold' },
            useHTML: true,
        },
        chart: {
            spacing: 0,
        },
    }
}

export default getChartTheme
