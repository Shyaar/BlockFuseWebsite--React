import React from 'react'

const Faqs = () => {
    return (
        <>
            <section id="faqs" className="flex flex-col justify-center content-center md:mx-[40px] lg:mx-[90px] mx-4 my-[20px] md:my-[40px] lg:my-[80px]">
                <div className="flex flex-col justify-center content-center mb-[60px] gap-4 ">
                    <h2 className="font-bold text-[32px] self-center">FAQ's</h2>
                    <p className="text-center lg:w-[800px] self-center">SEverything you need to know about Blockfuse Labs! Can’t find the
                        answer you’re looking for? Please chat with our friendly team, or <span className="text-purple-400 underline">reach
                            out to us on our Telegram channel here.</span></p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">What is Blockfuse Labs?</h2>
                    <p>+</p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">Who can join Blockfuse Labs Cohort?</h2>
                    <p>+</p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">What programs does Blockfuse Labs offer?</h2>
                    <p>+</p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">How do I enroll in a Blockfuse Labs cohort?</h2>
                    <p>+</p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">How can Blockfuse Labs help with my career?</h2>
                    <p>+</p>
                </div>
                <div className="flex justify-center items-center content-center gap-4 border-b border-purple-700">
                    <h2 className="font-bold w-full text-[16px] my-5">Is there a community I can join?</h2>
                    <p>+</p>
                </div>
            </section>
        </>
    )
}

export default Faqs