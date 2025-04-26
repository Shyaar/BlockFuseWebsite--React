import React from 'react'
import PrimaryBtn from '../../btns/PrimaryBtn'

const AboutHero = () => {
    return (
        <>
            <section id="hero" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div id="text" className="text-3xl flex flex-col gap-4 lg:text-7xl">
                    <h2 className="text-center my-16 md:my-16">
                        About <span className="text-purple-600 font-bold text-center"> Blockchain</span>
                    </h2>

                    <p className="text-center mx-[16px] lg:mx-[200px] text-xl">At Blockfuse Labs, we provide expert training and resources to advance blockchain education. Since our founding,
                        Blockfuse Labs has grown into a leading educational platform, trusted by developers and enthusiasts alike. Today, we're
                        proud to be driving blockchain education and innovation across Africa, helping learners at all levels build their skills
                        and confidence.
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

export default AboutHero