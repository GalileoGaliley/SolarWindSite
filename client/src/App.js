import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import AntiModal from "./AntiModal";




function App() {

    const [state, setState] = useState('unReady');
    const ready = () => setState('ready');

    setTimeout(ready, 3000);
        return (
            <>
                <div className={state}>
                    <AntiModal/>
                </div>
                <Header/>
            </>
        );
}

export default App;
