import React from 'react'
import woman from '../../../assets/img/portrait-beautiful-smiling-woman-with-curly-hair-looking-camera.jpg'

const Community = () => {
    return (
        <>
            <section id="join community" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]"> 
                <div className="flex flex-col justify-center content-center mb-[20px] gap-4 ">
                    <h2 className="font-bold text-[32px] self-center text-center">Join our Community</h2>
                    <p className="text-center lg:w-[800px] self-center">Become part of a thriving network of blockchain enthusiasts and
                        professionals.</p>
                </div>
                <div className="flex flex-col gap-2 w-full items-center lg:w-[900px] self-center justify-center">
                    <div
                        className="rounded-full border-2 border-purple-700 bg-gradient-to-r from-purple-900/[50%] to-purple-700/50% flex justify-center content-center self-center w-[80px] p-[20px] h-fit my-4">
                        <img src="src/assets/img/blockfuse-logo-BgIWHfHT.png" alt="" width="30" height="30" className=" self-center" />
                    </div>

                    <div id="carousel" className="flex justify-center w-full items-center relative m-8">
                        <div id="circle1"
                            className="rounded-full border-2 w-[30px] h-[30px] md:w-[60px] md:h-[60px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle2"
                            className="rounded-full border-2 w-[32px] h-[32px] md:w-[70px] md:h-[70px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle3"
                            className="rounded-full border-2 w-[34px] h-[34px] md:w-[80px] md:h-[80px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle4"
                            className="rounded-full border-2 w-[36px] h-[36px] md:w-[90px] md:h-[90px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circleHead"
                            className="rounded-full border-2 w-[38px] h-[38px] md:w-[100px] md:h-[100px]  border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle6"
                            className="rounded-full border-2 w-[36px] h-[36px] md:w-[90px] md:h-[90px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle7"
                            className="rounded-full border-2 w-[34px] h-[34px] md:w-[80px] md:h-[80px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle8"
                            className="rounded-full border-2 w-[32px] h-[32px] md:w-[70px] md:h-[70px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        <div id="circle9"
                            className="rounded-full border-2 w-[30px] h-[30px] md:w-[60px] md:h-[60px] border-purple-700 overflow-hidden">
                            <img src={woman} alt=""
                                className="object-cover" />
                        </div>
                        

                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center content-center gap-4">
                    <p className="w-fit self-center  text-gray-500">Connect with us on Telegram</p>
                    <div className="bg-gradient-to-r from-purple-700 px-[15px] py-[8px] flex to-purple-400 text-white w-fit self-center">
                        <button className="w-fit">Join our Community</button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                        </svg>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Community