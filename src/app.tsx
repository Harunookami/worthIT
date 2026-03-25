import '@mantine/core/styles.css';
import { Container, 
    MantineProvider, 
    Title, 
    Text
 } from '@mantine/core';
import { Input } from '@mantine/core';


export default () => {
    return (
        <MantineProvider  defaultColorScheme='dark'>
           <Container size="sm" py = "xl">
                <Title order={1} ta="center" c="blue">
                    Worth IT?!
                </Title>
                <Text ta="center" c="dimmed" mb="sm">
                    Descubra o verdadeiro custo das suas compras em tempo de vida.
                </Text>
           </Container>
        </MantineProvider>
    )
} 