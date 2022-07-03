import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';


import './index.css';
import { App } from './App';
//import Context
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import { reducer } from './context/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>

);

