import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'

const PrimaryBtn = ({text}) => {

    const theme = useContext(ThemeContext)

    return (
        <>
            <div className="bg-gradient-to-r from-purple-700 px-[15px] py-[8px] flex to-purple-400 self-center text-white w-full items-center justify-center">
                <button className="text-nowrap ">{text}</button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
            </div>
        </>
    )
}

export default PrimaryBtn