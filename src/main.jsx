import ReactDOM from 'react-dom/client'
import './assets/css/styles.css';
// import { HelloWorldApp } from './components/HelloWorldApp';
// import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title="Hola, soy Goku" subTitle={123} /> */}
        <CounterApp value={10} />
    </>
)
