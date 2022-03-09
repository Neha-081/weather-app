import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeButton() {
    const {currentTheme,toggleTheme}=useContext(ThemeContext)
    // console.log(currentTheme);
  return (
    <div>
        <button onClick={toggleTheme}>{currentTheme==="light"?"Switch to Dark":"Switch to Light"}</button>
        </div>
  )
}

export default ThemeButton