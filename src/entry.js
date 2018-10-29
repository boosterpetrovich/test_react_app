import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import App from './containers/App'

import { signIn } from './actions/index'

// logger
const testLogger = ({getState}) => {
    return next => action => {
        console.log(action);
        console.log('this a middleware log');
        console.log(getState());
        return;
    }
}
// store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(testLogger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
