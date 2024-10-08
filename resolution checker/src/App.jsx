import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const [resizeState, setResizeState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () => {
      setResizeState({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div>

      <div className="parent">
      <h1>Resolution Checker</h1>
      <p>This app checks the window's dimensions every time it resizes.</p>
      <h3>Current window size: {resizeState.width} x {resizeState.height}</h3>
      
       <h3>Cureent Width is {resizeState.width}</h3>
       <h3>Current Height is {resizeState.height}</h3>
      </div>
      
      
      

    </div>
  )
}

export default App
