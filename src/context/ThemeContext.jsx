import { createContext, useState } from "react";

const ThemeContext=createContext();

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
  const value={currentTheme}
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export {ThemeContext,ThemeContextProvider}

