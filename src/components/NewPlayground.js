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
        <Box
            bg="canvas.subtle"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
        >
            <Box
                display="flex"
                gridGap={[1, 4, 10]}
                bg="canvas.default"
                border="1px solid"
                borderColor="border.default"
                borderRadius={2}
                p={3}
            >
                <Button
                    variant="primary"
                    onClick={() => {
                        setButtonCount(buttonCount + 1)
                        console.log(buttonCount)
                    }}
                >
                    View List {buttonCount}
                </Button>
                <form>
                    <FormControl>
                        <Checkbox id="default-checkbox" />
                        <FormControl.Label>Default checkbox</FormControl.Label>
                    </FormControl>
                    <FormControl>
                        <Checkbox id="always-checked-checkbox" checked />
                        <FormControl.Label>Always checked</FormControl.Label>
                    </FormControl>
                    <FormControl>
                        <Checkbox id="always-unchecked-checkbox" />
                        <FormControl.Label>Always unchecked</FormControl.Label>
                    </FormControl>
                    <FormControl disabled>
                        <Checkbox id="inactive-checkbox" checked />
                        <FormControl.Label>Inactive</FormControl.Label>
                    </FormControl>
                </form>
                <ActionMenu>
                    <ActionMenu.Button>Menu</ActionMenu.Button>

                    <ActionMenu.Overlay>
                        <ActionList>
                            <ActionList.Item
                                onSelect={(event) => console.log('New file')}
                            >
                                New file
                            </ActionList.Item>
                            <ActionList.Item>Copy link</ActionList.Item>
                            <ActionList.Item>Edit file</ActionList.Item>
                            <ActionList.Divider />
                            <ActionList.Item variant="danger">
                                Delete file
                            </ActionList.Item>
                        </ActionList>
                    </ActionMenu.Overlay>
                </ActionMenu>
            </Box>
        </Box>
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
