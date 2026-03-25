import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Input } from '@mantine/core';


export default () => {
    return (
        <MantineProvider>
            <div>
                O que você quer comprar
                <Input placeholder="Input component" />;
            </div>  
        </MantineProvider>
    )
} 