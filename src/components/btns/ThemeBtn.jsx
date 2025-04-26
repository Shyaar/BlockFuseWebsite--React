import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

const ThemeBtn = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [isLight,setIsLight] = useState(true)


    useEffect(()=>{
        setIsLight(theme === 'light'? true:false)
    })

    return (
        <>
            <button onClick={toggleTheme}  className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center  text-white" aria-label="Toggle theme">
                {isLight? <MdLightMode />:<CiLight />}
            </button>
            <p>{theme}</p>
        </>
    )
}

export default ThemeBtn