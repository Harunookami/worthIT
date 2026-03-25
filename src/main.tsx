import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './app';

const rootelement = document.getElementById('root');

const root = createRoot(rootelement)
root.render( <App />)

