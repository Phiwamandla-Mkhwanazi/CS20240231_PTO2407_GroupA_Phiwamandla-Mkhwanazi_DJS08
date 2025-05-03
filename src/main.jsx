import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
  </Routes>
  <Routes>
    <Route path="/about" element={<About />}/>
  </Routes>
</BrowserRouter>
)
