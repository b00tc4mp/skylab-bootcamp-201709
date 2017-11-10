import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/bootstrap/3.3.7/css/bootstrap.min.css'
import './vendor/bootstrap/3.3.7/css/bootstrap-theme.min.css'
import './styles/main.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
