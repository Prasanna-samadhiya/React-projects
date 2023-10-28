import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Gallery/store/store1'
import Main1 from './main1'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <Main1/>
    </Provider>
  </React.StrictMode>,
)
