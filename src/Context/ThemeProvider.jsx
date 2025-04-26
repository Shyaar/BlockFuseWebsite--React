import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

const ThemeProvider = ({children}) => {

  let savedTheme = JSON.parse(localStorage.getItem('theme'))||null
  console.log(savedTheme)

    const [theme,setTheme] = useState(savedTheme? savedTheme:false)
    console.log(theme)

    useEffect(()=>{
      localStorage.setItem('theme',theme)
    },[theme])
   
    function toggleTheme (){
        setTheme((curr) => !curr)
    }

    useEffect(()=>{
      theme? document.body.classList.add('dark') : document.body.classList.remove('dark') 
      
    },[theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider