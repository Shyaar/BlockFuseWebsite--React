import React from 'react'

const AboutOurJourney = () => {
    return (
        <>
            <section id="our-Journey" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px] text-white">
                <div className="grid border gap-6 my-[20px] lg:grid-cols-2 lg:gap-10 lg:my-[40px]">
                    <div id="card1" className="bg-black border border-purple-600 p-[20px] gap-6 flex flex-col">
                        <div className="flex gap-2 content-center">
                            <div className="bg-purple-700 rounded-full w-7 h-7"></div>
                            <h2 className="font-bold text-[25px]">Vision</h2>
                        </div>
                        <p>
                            To be the leading global hub for blockchain innovation, where creativity, knowledge, and technology intersect to create
                            solutions that change the world.
                        </p>
                    </div>

                    <div id="card2" className="bg-black border border-purple-600 p-[20px] gap-6 flex flex-col">
                        <div className="flex gap-2 content-center">
                            <div className="bg-purple-700 rounded-full w-7 h-7"></div>
                            <h2 className="font-bold text-[25px]"> Mission </h2>
                        </div>
                        <p>
                            To cultivate a thriving community of skilled blockchain developers and pioneers in Nigeria, equipped to drive the future
                            of technology in our region and beyond.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutOurJourney