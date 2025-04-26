import React from 'react'

const OurJourney = () => {
    return (
        <>
            <section id="our-Journey" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[60px] mx-4 my-[20px] md:my-[40px] lg:my-[80px] ">
                <h2 className="font-bold text-[32px] self-center w-fit">Our Journey</h2>

                <div className="grid lg:grid-cols-3 gap-5 my-[40px] text-white">
                    <div id="card1" className="bg-black border border-purple-600 p-[20px] gap-6 flex flex-col">
                        <div className="flex gap-2 content-center">
                            <div className="bg-purple-700 rounded-full w-7 h-7"></div>
                            <h2 className="font-bold text-[25px]"> The Leap </h2>
                        </div>
                        <p>
                            Blockfuse Labs was established with a mission to empower developers through both remote and onsite training.
                            Our primary
                            agenda is to build a sustainable blockchain economy by fostering innovation, technical expertise, and
                            community
                            development across Africa and beyond
                        </p>
                    </div>

                    <div id="card2" className="bg-black border border-purple-600 p-[20px] gap-6 flex flex-col">
                        <div className="flex gap-2 content-center">
                            <div className="bg-purple-700 rounded-full w-7 h-7"></div>
                            <h2 className="font-bold text-[25px]"> Our today </h2>
                        </div>
                        <p>
                            Today, Blockfuse Labs stands as a beacon of blockchain education, offering cutting-edge courses that cover
                            everything
                            from basic blockchain principles to advanced development, helping learners master the future of technology.
                        </p>
                    </div>

                    <div id="card3" className="bg-black border border-purple-600 p-[20px] gap-6 flex flex-col">
                        <div className="flex gap-2 content-center">
                            <div className="bg-purple-700 rounded-full w-7 h-7"></div>
                            <h2 className="font-bold text-[25px]"> Our tomorrow </h2>
                        </div>
                        <p>
                            As we look to the future, we aim to expand our reach and impact, continually adapting to the evolving needs of
                            the
                            blockchain ecosystem. Our commitment is to provide unmatched training and comprehensive support across to
                            blockchain
                            enthusiasts across Africa and beyond.
                        </p>
                    </div>


                </div>

                <div className="flex flex-col justify-center content-center gap-4">
                    <p className="w-fit self-center">start your journey today</p>
                    <div className="bg-gradient-to-r from-purple-700 px-[15px] py-[8px] flex to-purple-400 text-white w-fit self-center">
                        <button className="w-fit">Join our community</button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                        </svg>
                    </div>
                </div>
            </section>
        </>

    )
}

export default OurJourney