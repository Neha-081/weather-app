import {  useState } from "react";
import React from "react";

const ThemeContext=React.createContext();

const themeData={
    light:{
        textColor:"black",
        background:"#f5f5f5"
    },
    dark:{
        textColor:"white",
        background:"#424242"
    }
}
const ThemeContextProvider=({children})=>{


  const [currentTheme,setCurrentTheme]=useState("light");
  const toggleTheme=()=>{
      setCurrentTheme(currentTheme==="light"?"dark":"light")
  }
  const value={currentTheme,toggleTheme,theme:themeData[currentTheme]}
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {ThemeContext,ThemeContextProvider}

