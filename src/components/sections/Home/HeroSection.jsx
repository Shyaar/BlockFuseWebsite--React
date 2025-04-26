import React, { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeProvider'
import PrimaryBtn from '../../btns/PrimaryBtn'

const Hero = () => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <section id="hero" className='mb-[100px] md:mb-[150px] lg:mb-[200px]'>
                <div className="flex relative justify-center">
                    <img src="src/assets/img/zigzag-q2OLhjMn.svg" alt="background image"
                        className="absolute lg:absolute  lg:-top-[200px] opacity-[20%] z-0" />
                </div>

                <div id="hero-text" className="w-full flex flex-col justify-center content-center gap-[24px] lg:mt-[80px]">
                        <h1 className="text-[40px] text-center lg:text-[70px] font-bold w-full px-4">
                        Unlock the Future with <span className="text-purple-700"> Blockchain</span>
                        </h1>
                    <p className="mx-4 lg:mx-[350px] lg:w-[1000px] self-center text-[24px] text-center">
                        Transform your skills and career with comprehensive training designed
                        to lead the digital revolution
                    </p>
                    
                    <PrimaryBtn text="Explore our bootcamps" />

                </div>
            </section>
        </>
    )
}

export default Hero