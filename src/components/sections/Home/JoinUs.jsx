import React from 'react'
import PrimaryBtn from '../../btns/PrimaryBtn'

const JoinUs = () => {
    return (
        <>
            <section id="join" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div className="flex flex-col justify-center content-center mb-[60px] gap-4 ">
                    <h2 className="font-bold text-[32px] self-center text-center">Join the next cohort</h2>
                    <p className="text-center lg:w-[800px] self-center">Step into the future of blockchain with Blockfuse Labs! Our upcoming
                        cohort offers hands-on training, expert mentorship,
                        and a vibrant community to help you build and thrive in Web3. Secure your spot and start your journey today!</p>
                </div>
                <div className="flex flex-col justify-center content-center gap-4">
                    <p className="w-fit self-center">start your journey today</p>
                    <div className='w-[200px] flex self-center  items-center'>
                        <PrimaryBtn text="Apply Now" />
                    </div>
                </div>


            </section>
        </>
    )
}

export default JoinUs