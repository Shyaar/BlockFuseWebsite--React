import React from 'react'
import icon1  from '../../../assets/img/globe-Frame-3704-BDzRpwN3.svg'
import icon2  from '../../../assets/img/hands-Frame-3703-B-g3x3F1.svg'
import icon3  from '../../../assets/img/pen-Frame-3702-CXfKDzyq.svg'
import icon4  from '../../../assets/img/people-Frame-3701-CvA-aC47.svg'


const MoreThan = () => {
    return (
        <>
            <section id="more than..." className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <h2 className="font-bold text-[32px] self-center w-fit text-center">
                    More Than Just the Basics
                </h2>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-2 my-[40px]">
                    <div id="card1" className=" flex">
                        <div className="flex gap-2 items-center">
                            <div className='w-20 md:w-30 lg:w-40 h-fit '>
                                <img src={icon1} className='w-20 md:w-30 lg:w-40 ' alt="icon" />
                            </div>
                            <div className="flex gap-2">
                                <div className="border-b border-purple-600 p-[20px]">
                                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[24px] ">REAL WORLD EXPERIENCE</h2>
                                    <p className="text-[16px] lg:text-[20px]">
                                        Apply your skills to solve real-world problems and see
                                        immediate results.
                                    </p>
                                </div>

                                {/* <!-- <img src=""  classNameName='w-20 md:w-30 lg:w-40' alt="icon"> --> */}
                            </div>
                        </div>
                    </div>
                    <div id="card2" className=" flex">
                        <div className="flex gap-2 items-center">
                            <div className='w-20 md:w-30 lg:w-40 h-fit '>
                                <img src={icon2} className='w-20 md:w-30 lg:w-40' alt="icon" />
                            </div>
                            <div className="flex gap-2">
                                <div className="border-b border-purple-600 p-[20px]">
                                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">HANDS-ON LEARNING</h2>
                                    <p className="text-[16px] lg:text-[20px]">
                                        Dive into projects and learn by doing, transforming theory into practice.
                                    </p>
                                </div>

                                {/* <!-- <img src=""  classNameName='w-20 md:w-30 lg:w-40' alt="icon"> --> */}
                            </div>
                        </div>
                    </div>
                    <div id="card3" className=" flex">
                        <div className="flex gap-2 items-center">
                            <div className='w-20 md:w-30 lg:w-40 h-fit '>
                                <img src={icon3} className='w-10 md:w-20 lg:w-40' alt="icon" />
                            </div>

                            <div className="flex gap-2">
                                <div className="border-b border-purple-600 p-[20px]">
                                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">INTERACTIVE LEARNING</h2>
                                    <p className="text-[16px] lg:text-[20px]">
                                        Engage actively with hands-on activities that bring concepts to life.
                                    </p>
                                </div>

                                {/* <!-- <img src=""  classNameName='w-10 md:w-20 lg:w-40' alt="icon"> --> */}
                            </div>
                        </div>
                    </div>
                    <div id="card4" className=" flex">
                        <div className="flex gap-2 items-center">
                            <div className='w-50 md:w-20 lg:w-40 h-fit '>
                                <img src={icon4} className  ='w-50 md:w-20 lg:w-40' alt="icon" />
                            </div>

                            <div className="flex gap-2">
                                <div className="border-b border-purple-600 p-[20px]">
                                    <h2 className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">COLLABORATIVE LEARNING</h2>
                                    <p className="text-[16px] lg:text-[20px]">
                                        Collaborate with peers to share insights, tackle challenges, and grow together.
                                    </p>
                                </div>

                                {/* <!-- <img src=""  classNameName='w-10 md:w-20 lg:w-40' alt="icon"> --> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default MoreThan