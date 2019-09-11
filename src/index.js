import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Mainapp} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mainapp />, document.getElementById('root'));
registerServiceWorker();
