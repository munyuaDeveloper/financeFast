import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import messageIcon from '../assets/images/messageIcon.svg'
import iphone from "../assets/images/iPhone13Pro.svg"
import appStore from "../assets/images/appStore.svg"
import playStore from "../assets/images/playStoreBadge.svg"
import linesBg from "../assets/images/linesBg.png"

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="container mt-20  sm:mt-32 mx-auto px-4 sm:px-0">
            <div className="text-center w-full sm:w-[620px] mx-auto px-4 sm:px-0">
                <p className="text-[#563ACC] text-[14px] uppercase">FAQ’S</p>
                <p className="font-bold text-[24px] sm:text-[40px]">Got questions? </p>
                <p className="text-[16px]">Get the answers to your questions about FastFinance.</p>
            </div>

            <div className="mt-12 px-4 sm:px-0">
                <div className="w-full sm:w-[720px] mx-auto ">
                    <div className="border-b-2 border-[#94949480] mb-2">
                        <button onClick={() => toggleAccordion(1)} className="w-full px-4 py-3 text-lg sm:text-xl font-semibold flex justify-between items-center">
                            <span>How does FinanceFast work?</span>
                            <IoIosArrowDown />
                        </button>
                        {openIndex === 1 && (
                            <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndex === 1 ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'
                                }`}>
                                <div className="px-4 py-2 ">
                                    <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
                                </div>

                            </div>
                        )}
                    </div>
                    <div className="border-b-2 border-[#94949480] mb-2">
                        <button onClick={() => toggleAccordion(2)} className="w-full px-4 py-3 text-lg sm:text-xl font-semibold flex justify-between items-center">
                            <span>Is it safe to use FinanceFast?</span>
                            <IoIosArrowDown />
                        </button>
                        {openIndex === 2 && (
                            <div className="px-4 py-2 ">
                                <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
                            </div>
                        )}
                    </div>
                    <div className="border-b-2 border-[#94949480] mb-2">
                        <button onClick={() => toggleAccordion(3)} className="w-full px-4 py-3 text-lg sm:text-xl font-semibold flex justify-between items-center">
                            <span>Can I track my transfer?</span>
                            <IoIosArrowDown />
                        </button>
                        {openIndex === 3 && (
                            <div className="px-4 py-2 ">
                                <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
                            </div>
                        )}
                    </div>
                    <div className="border-b-2 border-[#94949480] mb-2">
                        <button onClick={() => toggleAccordion(4)} className="w-full px-4 py-3 text-lg sm:text-xl font-semibold flex justify-between items-center">
                            <span>Are there any hidden fees with FinanceFast?</span>
                            <IoIosArrowDown />
                        </button>
                        {openIndex === 4 && (
                            <div className="px-4 py-2 ">
                                <p>FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${linesBg})` }}
                className="bg-cover bg-center sm:min-h-[400px] flex flex-col sm:flex-row justify-center items-center sm:justify-between my-20 rounded-3xl pt-5 sm:pt-20 px-4 sm:px-20">
                <div className="w-full sm:w-[566px]">
                    <p className="font-bold text-white text-[24px] sm:text-[40px]">One Solution for All Your Cross-Border Payments</p>
                    <div className="flex gap-5 sm:gap-10 mt-10">
                        <img src={appStore} className="" />
                        <img src={playStore} />
                    </div>
                </div>
                <div className="mt-12 sm:mt-auto relative w-full sm:w-[494px]">
                    <div className="sm:flex relative sm:items-center">
                        <img src={messageIcon} className="w-24 sm:w-fit sm:hidden absolute -top-7 -left-1" />
                        <img src={messageIcon} className="w-24 sm:w-fit hidden sm:block" />
                        <img src={iphone} className="block mx-auto w-64 sm:w-fit" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQs
