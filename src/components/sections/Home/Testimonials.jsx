import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section id="testimonials" className="flex items-center gap-6 justify-center content-center md:mx-[40px] lg:mx-[60px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
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
                    <h2 className="font-bold text-[32px] self-center w-fit mb-[80px]">Testimonials</h2>
                    <div className="relative">
                        <img src="src/assets/img/2bgdownload.svg" alt="" width="200" className="absolute z-0 -top-20" />
                        <div className="bg-black border border-purple-700 flex flex-col md:flex-row lg:h-[200px] z-9 relative">
                            <div className='flex gap-4'>
                                <img src="src/assets/img/clementy8e3ygxaccdbenvxzg4w.jpg" alt="" className='w-20 md:w-80' />
                                <div className='my-4 md:hidden'>
                                    <h3 className="text-gray-500">11/11/2011</h3>
                                    <h2 className="font-bold text-white">Clement Raymond</h2>
                                </div>
                            </div>
                            <div className="mx-[20px] flex flex-col my-[10px] gap-4">
                                <div className='my-4 md:flex hidden'>
                                    <h3 className="text-gray-500  ">11/11/2011</h3>
                                    <h2 className="font-bold text-white ">Clement Raymond</h2>
                                </div>
                                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo recusandae accusantium rem voluptates
                                    consequatur placeat animi minus officia, obcaecati voluptatem?</p>
                            </div>
                        </div>
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
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
                            <div className="bg-gray-600 w-[10px] h-[10px] rounded-full"></div>
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

export default Testimonials