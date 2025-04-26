import React from 'react'
import PrimaryBtn from '../../btns/PrimaryBtn'

const Newsletter = () => {
    return (
        <>
            <div className='bg-[#2F2E34] py-10'>
                <section id="Subscribe" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                    <div className="flex flex-col justify-center content-center mb-[20px] gap-4 ">
                        <h2 className="font-bold text-[32px] text-center self-center">Subscribe to Our Newsletter</h2>
                        <p className="text-center lg:w-[800px] self-center">Stay ahead in the world of blockchain! Get the latest updates,
                            insights, and exclusive resources from BlockTate Labs delivered straight to your inbox. Don't miss out—subscribe
                            today!</p>
                    </div>
                    <div className="flex flex-col gap-2 lg:w-[900px] justify-center content-center self-center">
                        <input type="text" className="w-full bg-slate-900 p-[10px] border border-white/[50%]"
                            placeholder="Enter your email here" />
                        <div className='w-full border'>
                            <PrimaryBtn text="Apply Now" className="" />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Newsletter