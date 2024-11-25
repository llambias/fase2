import { useState } from 'react'
import Router from './router'

import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
      
    </>
  )
}
export default App
{/* <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React+hmr</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */}