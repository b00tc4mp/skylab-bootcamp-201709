import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './styles/main.css'
import App from './App';
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker'


const store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


registerServiceWorker();
