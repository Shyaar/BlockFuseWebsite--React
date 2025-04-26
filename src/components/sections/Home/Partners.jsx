import React from 'react'
import Partner1 from '../../../assets/img/download.svg'

const Partners = () => {
    return (
        <>
            <section id="partners" className="flex items-center gap-6 justify-center content-center md:mx-[40px] lg:mx-[60px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">

                <div className="hidden lg:flex justify-end mt-12">
                    <div className="bg-purple-500 ml-8 rounded-full w-10 h-10 flex justify-center pt-2 pb-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center content-center ">
                    <h2 className="font-bold text-[32px] self-center w-fit mb-[80px]">Our Partners</h2>
                    <div className="">
                        <img src={[Partner1]} alt="" width="500" className="" />
                    </div>
                    <div id="counter" className="flex gap-2 my-[32px] justify-center items-center self-center">

                        <div className="flex lg:hidden ">
                            <div className="bg-purple-500 ml-8 rounded-full w-10 h-10 flex justify-center pt-2 pb-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2 '>
                            <div className="bg-purple-700 w-[10px] h-[10px] rounded-full"></div>
                            {/* <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div> */}
                        </div>

                        <div className="lg:hidden flex  mr-8">
                            <div className="bg-purple-500  rounded-full w-10 h-10 flex justify-center pt-2 pb-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-end  mr-8 mt-12">
                    <div className="bg-purple-500  rounded-full w-10 h-10 flex justify-center pt-2 pb-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Partners