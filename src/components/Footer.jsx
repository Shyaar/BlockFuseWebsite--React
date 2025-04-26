import React from 'react'
import Community from './sections/Home/Community'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import BFLLogo from '../assets/img/blockfuse-logo-BgIWHfHT.png'

const Footer = () => {
    return (
        <>
            <Community />
            <hr className='my-10' />
            <section id="Footer"
                className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div id="logo" className="flex flex-col gap-4 justify-center text-center items-center">
                    <img src={BFLLogo} alt="bfl logo" width="30px" className="" />
                    <p className='text-center'>support@blockfuselabs.com</p>
                </div>
                <div>
                    <nav className="flex flex-col md:flex-row justify-between py-[10px] items-center gap-6">
                        <ul className="flex gap-3 self-center text-[14px] w-full flex-wrap items-center justify-center">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link to='/teams'>Team</Link></li>
                            <li>Boot camps</li>
                            <li>Events</li>
                            <li>Alumni</li>
                            <li>Blog</li>
                            <li>Open Source</li>
                            <li>Contact us</li>
                            <li>Faucet</li>
                        </ul>
                        <div id="btns" className="flex gap-3">
                            <button className="bg-black border border-purple-600 px-[15px] py-[8px] text-white">
                                Donate
                            </button>
                        </div>
                    </nav>
                </div>
            </section>
            <div className="flex flex-col md:flex-row text-[12px] bg-slate-700 px-[20px] py-[6px] justify-between content-center items-center">
                <div className="flex gap-4 content-center items-center">
                <FiFacebook className='text-white text-2xl' />
                <RiTwitterXFill className='text-white text-2xl' />
                <IoLogoInstagram className='text-white text-2xl' />
                <FaYoutube className='text-white text-2xl' />
                </div>
                <div className="flex flex-col md:flex-row items-center text-center">
                    <div className='flex my-4 text-white'>
                        <p className="px-3 border-r border-white h-fit">Privacy policy</p>
                        <p className="px-3 h-fit">Terms & conditions</p>
                    </div>
                    <p className="px-3 text-gray-500 h-fit">All Copyright &copy; 2024 Reserved </p>
                </div>

            </div>
        </>
    )
}

export default Footer