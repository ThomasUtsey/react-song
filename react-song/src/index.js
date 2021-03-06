import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import reducers from './reducer'
// import Provider from ''


ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)