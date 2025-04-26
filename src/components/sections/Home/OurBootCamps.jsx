import React, { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeProvider'
import PrimaryBtn from '../../btns/PrimaryBtn'
import web3Bg  from '../../../assets/img/web2-bg-DXeHHdR8.jpeg'
import web2Bg  from '../../../assets/img/web3-bg-DsK_wXrN.jpeg'


const OurBootCamps = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
    return (
        <>
            <section id="our-bootcamps" style={theme? {color:'white'}:{color:'black'}} className="flex flex-col justify-center content-center my-[80px] md:text-[15px] lg:text-[24px] text-center">
                <h2 className="font-bold text-[32px] self-center w-fit">Our bootcamps</h2>

                <div className="grid md:grid-cols-2 mx-4 md:mx-[60px] md:gap-5 gap-10  my-[40px]">
                    <div id="card1" className="bg-black border border-purple-600 p-[10px] md:p-[20px]">
                        <div  style={{ backgroundImage: `url(${web3Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="flex justify-center content-center py-[70px] mb-[40px] border corder-white h-[200px] items-center">
                            <h2 className="font-bold text-[25px] text-center text-white">
                                Web2 for Web3 Preparatory Bootcamp
                            </h2>
                        </div>
                        <p className='text-center text-white h-[180px]'>
                            Learn the essentials of modern web development in HTML, CSS,
                            Tailwind CSS, JavaScript, and Node.js/React. This program guides you
                            through creating interactive, responsive websites, providing the
                            skills and confidence to start building real-world projects. Perfect
                            for beginners ready to launch their web journey!
                        </p>

                        <div className="flex flex-col justify-center content-center gap-9 mt-[120px]">
                            <div
                                className="self-center">
                                <PrimaryBtn text="Join the Waitlist" />
                                
                            </div>

                            <p className="font-bold text-blue-500 self-center text-center">
                                NOTE: Registration for Cohort III will start on March 1st.
                            </p>
                        </div>
                    </div>

                    <div id="card2" className="bg-black border border-purple-600 p-[10px] md:p-[20px]">
                        <div
                        style={{ backgroundImage: `url(${web2Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="flex justify-center content-center py-[70px] mb-[40px] border corder-white h-[200px] items-center">
                            <h2 className="font-bold text-[25px] text-center text-white">Web3 Bootcamp</h2>
                        </div>
                        <p className='text-center text-white h-[180px]'>
                            Unlock the future of the internet with our Web3 Bootcamp! Learn
                            blockchain fundamentals, smart contracts, and dApps to build
                            decentralized applications. Ideal for beginners eager to explore
                            Web3 technology and launch into the world of blockchain development!
                        </p>

                        <div className="flex flex-col justify-center content-center gap-9 mt-[120px]">
                            <div
                                className="self-center">
                                <PrimaryBtn text="Join the Waitlist" />
                                
                            </div>

                            <p className="font-bold text-blue-500 self-center text-center">
                                NOTE: Registration for Cohort III will start on March 1st.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurBootCamps