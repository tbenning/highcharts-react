import React from 'react'
import { StyledOcticon, Header, Avatar, Link } from '@primer/react'
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
                        <span>GitHub Charts</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item full sx={{ display: 'flex', gap: 2 }}>
                    <Link href="/">Highcharts</Link>
                    <Link href="/polaris">Polaris</Link>
                    <Link href="/visx">Visx</Link>
                    <Link href="/carbon">Carbon</Link>
                </Header.Item>
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
