import '@mantine/core/styles.css';
import {
    Container,
    MantineProvider,
    Title,
    Text,
    AppShell
} from '@mantine/core';
import { Header } from './components/Header';


export default () => {
    return (

        <MantineProvider>

            <AppShell
                header={{ height: 60 }}
                padding="md"
            >
                <AppShell.Header >
                    <Header />
                </AppShell.Header>
            </AppShell>



        </MantineProvider>

    )
} 