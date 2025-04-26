import React from 'react'
import bgImg  from '../../../assets/img/2bgdownload.svg'
import nenCo  from '../../../assets/img/nen.co.Frame-10-AmuGo1Ak.png'


const Intro = () => {
    return (
        <>
            <section id="intro" className=" ">
                <div id="text">
                    <p className="mx-4 lg:ml-[450px] mb-[20px] text-center md:text-left md:text-2xl md:ml-40">
                        At Blockfuse Labs, we see education as a journey. <br />
                        Whether you're new to blockchain or an experienced developer, <br />
                        we offer resources, expert instructors,and tools for every stage of
                        <br />
                        your growth.
                    </p>
                </div>
                <div id="img" className="relative flex flex-col justify-center content-center text-white mx-4 lg:mx-[90px]">
                    <img src={bgImg} alt="" className="absolute -z-1 -top-7 md:-top-[100px] w-[100px] lg:w-[300px]" />
                    <img src={nenCo} alt="" className="z-0 relative " />

                </div>
            </section>
        </>
    )
}

export default Intro