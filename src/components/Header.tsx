import { Group, Flex, Title, Avatar, ActionIcon, Container } from '@mantine/core';
import { IconReportMoney, IconBell } from '@tabler/icons-react';

export function Header() {
    return (
        <Group
            justify="flex-start"
            align="center"
            h="100%"
            px="md"
            bg={'dark'}
            >

            {/* <div color='blue' radius={10} w={48} h={48} opacity={1}>
            <IconReportMoney size={40} color='white' />
            </div> */}
            <Flex direction={'column'}>
                <Title order={3} c={'blue'}>
                    WorthIt?!

                </Title>
                <Title order={6} c={'gray'}>
                    Decisões financeiras inteligentes
                </Title>
            </Flex>

        </Group>

    )
}