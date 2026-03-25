import '@mantine/core/styles.css';
import { Container, 
    MantineProvider, 
    Title, 
    Text,
    AppShell
 } from '@mantine/core';
 import { Header } from './components/Header';


export default () => {
    return (

        <AppShell
        header={{height:60}}
        padding="md"
        >
        <Header />
        </AppShell>
        
    )
} 