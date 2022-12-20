import React from 'react'
import { StyledOcticon, Header, Avatar } from '@primer/react'
import { MarkGithubIcon } from '@primer/octicons-react'

function NavigationBar() {
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

export default NavigationBar
