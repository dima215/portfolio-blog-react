import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import recipesLikeReducer from './redux/recipesLikeReducer'

const store = createStore(recipesLikeReducer)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
