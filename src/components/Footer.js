import React, { useState } from 'react'
import {
    ActionMenu,
    ActionList,
    Box,
    Text,
    Link,
    StyledOcticon,
    Button,
    Header,
    Avatar,
    FormControl,
    Checkbox,
} from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
} from '@primer/octicons-react'

function NewPlayground() {
    const [buttonCount, setButtonCount] = React.useState(0)
    return (
        <>
            <Header>
                <Header.Item>
                    <Header.Link href="#" fontSize={2}>
                        <StyledOcticon
                            icon={MarkGithubIcon}
                            size={32}
                            sx={{ mr: 2 }}
                        />
                        <span>GitHub</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item full>Menu</Header.Item>
                <Header.Item mr={0}>
                    <Avatar
                        src="https://github.com/octocat.png"
                        size={20}
                        square
                        alt="@octocat"
                    />
                </Header.Item>
            </Header>
        </>
    )
}

function Footer() {
    return (
        <Box textAlign="center">
            <Box mr={2} display="inline-block">
                <StyledOcticon
                    icon={MortarBoardIcon}
                    size={16}
                    color="attention.fg"
                    sx={{ mr: 1 }}
                />
                <Text color="attention.fg">Tip</Text>
            </Box>
            <Text>
                Before you get started check out our{' '}
                <Link href="https://primer.style/react" target="_blank">
                    Primer React Documentation
                </Link>
            </Text>
        </Box>
    )
}

export default NewPlayground
