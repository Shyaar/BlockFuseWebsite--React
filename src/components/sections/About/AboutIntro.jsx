import React from 'react'

const AboutIntro = () => {
    return (
        <>
            <section id="intro" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[60px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div id="text">
                    <p className="mx-4 md:ml-[250px] lg:ml-[350px] text-justify my-4">
                        At Blockfuse Labs, we see education as a journey.
                        Whether you're new to blockchain or an experienced developer,
                        we offer resources, expert instructors,and tools for every stage of your growth.
                    </p>
                </div>
                <div id="img" className="sm:mx-4 relative flex flex-col justify-center content-center text-white">
                    <img src="src/assets/img/2bgdownload.svg" alt="" className="absolute -z-1 -top-[100px] md:w-[200px] lg:w-[300px] hidden  md:flex" />
                    <img src="src/assets/img/nen.co.Frame-10-AmuGo1Ak.png" alt="" className="z-0 relative" />
                </div>
                <p className="mx-4 md:mx-[180px] text-justify">
                    From developers and innovators to thought leaders in the Web3 space, our graduates are transforming the future of
                    technology.
                </p>
            </section>
        </>
    )
}

export default AboutIntro