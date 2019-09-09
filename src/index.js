import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Dennis,Form} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Dennis />, document.getElementById('myFav'));
ReactDOM.render(<Form />, document.getElementById('Form'));
registerServiceWorker();
