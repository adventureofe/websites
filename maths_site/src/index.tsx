import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

import Navbar from "./components/navbar"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
      <Navbar/>
      <Latex>{`$\\huge\\frac{1}{5} + \\frac{3}{7} = ?$`}</Latex>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
