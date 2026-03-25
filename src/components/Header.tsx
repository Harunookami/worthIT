import { Group, Title, Avatar, ActionIcon } from '@mantine/core';
import { IconReportMoney, IconBell } from '@tabler/icons-react';

export function Header () {
    return (
<Group 
justify="space-between" 
align="center" 
h="100%"
 px="md">

<Group gap="sm">
    <IconReportMoney size={28} color="var(--mantine-color-blue-filled)" />
    <Title order={3} c={'blue'} px="md">
        Worth IT?!
    </Title> 
</Group>

</Group>

    )
}