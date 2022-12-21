import React from 'react'
import { Box, Heading, Text } from '@primer/react'

export default function ChartWrapper({
    children,
    headingComponent = 'h3',
    title,
    description,
}) {
    return (
        <Box
            p={4}
            backgroundColor="canvas.default"
            border="1px solid"
            borderColor="border.default"
            borderRadius="6px"
        >
            <Box mb={4}>
                <Heading sx={{ fontSize: 3, fontWeight: 600, mb: 1 }}>
                    {title}
                </Heading>
                {description && (
                    <Text sx={{ color: 'fg.muted', fontSize: 2 }}>
                        {description}
                    </Text>
                )}
            </Box>
            {children}
        </Box>
    )
}
