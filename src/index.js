import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// 引入路由组件
// 渲染
ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>,
    document.getElementById('root'))