import React from 'react'
import ReactDOM from 'react-dom/client'
/* REM */
import 'lib-flexible'

/* ANTD MOBILE */
import {ConfigProvider} from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

/* Style */
import './index.less'

/* Redux */
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

/* Handle max width */
(function () {
    const handleMax = function handleMax() {
        let html = document.documentElement,
            root = document.getElementById('root'),
            deviceW = html.clientWidth
        root.style.maxWidth = '750px' 
        if (deviceW >= 750) {
            html.style.fontSize = '75px'
        }
    }
    handleMax()
    window.addEventListener('resize', handleMax)
})()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ConfigProvider locale={enUS}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ConfigProvider>
)

