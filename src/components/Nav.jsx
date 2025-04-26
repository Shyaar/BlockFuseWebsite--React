import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeBtn from './btns/ThemeBtn'
import { ThemeContext } from '../Context/ThemeProvider'
import { StyleContext } from './Color'
import PrimaryBtn from './btns/PrimaryBtn'

const Nav = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const style = useContext(StyleContext)
    const [dropDown, setDropDown] = useState(false)



    return (
        <>
            <nav className={theme ? "flex xl:mx-[90px] lg:mx-[70px] lg:my-[30px] md:m-[30px] m-2 p-2 justify-between items-center bg-[#2F2E34] md:px-[20px] md:py-[6px] z-10 relative text-white border border-white/20"
                :
                "flex lg:mx-[90px] lg:my-[30px] md:m-[30px] m-2 p-2 justify-between items-center bg-[#fff] md:px-[20px] md:py-[6px] z-10 relative text-black border "}>

                <div id="logo" className=''>
                    <img src="src/assets/img/blockfuse-logo-BgIWHfHT.png" alt="bfl logo" width="30px" />
                </div>
                <div id="m-hide" className="hidden lg:flex">
                    <ul className="flex gap-3 self-center text-[14px]">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About us</NavLink></li>
                        <li><NavLink to='/teams'>Team</NavLink></li>
                        <li>Boot camps</li>
                        <li>Events</li>
                        <li>Alumni</li>
                        <li>Blog</li>
                        <li>Open Source</li>
                        <li>Contact us</li>
                        <li>Faucet</li>
                    </ul>

                </div>
                <div id="btns" className="flex gap-3 items-center">

                    <div className='hidden lg:flex gap-4 '>
                        {/* <button className=" bg-black border border-purple-600 px-6 py-[8px] h-fit">
                            <p className='text-white'>Donate</p>
                        </button> */}
                        <div className='border h-fit '>
                            <PrimaryBtn text="Apply Now" />
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <ThemeBtn />
                        <button className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center lg:hidden"
                            aria-label="hamburger menu" onClick={() => setDropDown(prev => !prev)} >&#9776;</button>
                    </div>
                </div>


            </nav>

            {dropDown && (
                <div id="dropDown" style={theme ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }} className='lg:hidden flex flex-col gap-4 w-3/4 -bottom-5 md:w-2/4 md:right-8 md:-bottom-10 border px-6 py-3 absolute right-2 z-10'>
                    <ul className="flex flex-col gap-3 self-center text-[14px]  w-full">
                        <li className='border-b pb-2'><Link onClick={()=>setDropDown(!dropDown)} to='/'>Home</Link></li>
                        <li className='border-b pb-2'><Link onClick={()=>setDropDown(!dropDown)} to='/about'>About us</Link></li>
                        <li className='border-b pb-2'><Link onClick={()=>setDropDown(!dropDown)} to='/teams'>Team</Link></li>
                        <li className='border-b pb-2'>Boot camps</li>
                        <li className='border-b pb-2'>Events</li>
                        <li className='border-b pb-2'>Alumni</li>
                        <li className='border-b pb-2'>Blog</li>
                        <li className='border-b pb-2'>Open Source</li>
                        <li className='border-b pb-2'>Contact us</li>
                        <li className='border-b pb-2'>Faucet</li>
                    </ul>
                    <div className=''>
                        <PrimaryBtn text="Apply now" />
                    </div>
                </div>
            )}

        </>
    )
}

export default Nav