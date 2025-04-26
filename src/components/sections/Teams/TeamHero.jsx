import React from 'react'

const TeamHero = () => {
    return (
        <>
            <section id="hero" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div id="text" className="text-3xl flex flex-col gap-4 lg:text-7xl">
                    <h2 className="text-center my-16 md:my-16">
                        Meet Our Team At Blockfuse Labs <span class="text-purple-600 font-bold text-center"> At Blockfuse Labs</span>
                    </h2>

                    <p className="text-center mx-[16px] lg:mx-[200px] text-xl">Discover the bright minds shaping the blockchain space! Our Team are pioneers, creators, and leaders who drive
                        innovation and inspire the next generation in the world of decentralized technology. Blockfuse Labs team continues to
                        drive the future of decentralized technology across the globe.
                    </p>

                    <div className="bg-gradient-to-r from-purple-600 px-[15px] py-[8px] flex to-purple-400 text-white text-base lg:text-xl w-fit gap-4 self-center">
                        <button className="">Apply now</button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamHero