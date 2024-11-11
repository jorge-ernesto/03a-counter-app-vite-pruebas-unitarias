import React from 'react'
import ReactDOM from 'react-dom/client'

// import './assets/css/index.css';
// import App from './App';

import './assets/css/MaquetacionCurso/styles.css';
// import { HelloWorldApp } from './components/HelloWorldApp';
// import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <HellowRowldApp /> */}
        {/* <FirstApp title="Hola, soy Goku" subTitle={123} /> */}
        <CounterApp value={10} />
    </React.StrictMode>,
)
