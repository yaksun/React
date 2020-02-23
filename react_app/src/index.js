import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/app'
//2.使用BrowserRouter或者HashRouter包裹  管理路由组件

render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
document.getElementById('root'))