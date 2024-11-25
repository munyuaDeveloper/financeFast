import { IoMdClose } from "react-icons/io"
import iphone from "../assets/images/iPhone13Pro.svg"
import vsImage from "../assets/images/vs.svg"
import horizontalVS from "../assets/images/horizontalVS.svg"
const CrossBorderTransactions = () => {
    return (
        <div className="container mt-20 mx-auto">
            <div className="text-center w-full sm:w-[620px] mx-auto">
                <p className="text-[#563ACC] text-[14px] uppercase">Cross-Border Transactions</p>
                <p className="font-bold text-[24px] sm:text-[40px]">Say Goodbye to International Payment Hassles </p>
                <p className="text-[14px] sm:text-[16px] p-4">Start your journey to hassle free Cross-Border Payments by downloading the FastFinance app from your iOS of Android store.</p>
            </div>

            <div className="flex flex-col sm:flex-row mt-14 justify-between items-center">
                <div className="w-full px-5 sm:px-0">
                    <p className="opacity-20 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Expensive high fees and unfavorable exchange rates</p>
                    <p className="opacity-30 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Transfer delays and inconvenience</p>
                    <p className="opacity-40 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Fraud and loss of funds</p>
                    <p className="opacity-70 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Traditional in-person transactions</p>
                    <p className="bg-[#94949480] w-72 flex items-center rounded-full  text-xl gap-4 p-3 mt-3">
                        <IoMdClose className="text-red-400" />
                        Lack of transparency
                    </p>

                    <p className="opacity-70 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Limited payment methods</p>
                    <p className="opacity-40 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Complex verification process</p>
                    <p className="opacity-30 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Long payment wait times</p>
                    <p className="opacity-20 flex text-lg items-center gap-2 mt-2"><IoMdClose /> Hidden costs</p>
                    <p className="opacity-10 flex text-lg items-center gap-2 mt-2"><IoMdClose /> High currency exchange rates</p>
                </div>
                <div className="flex flex-col sm:flex-row w-full px-5 mt-8 sm:mt-0 sm:px-0 ">
                    <img src={vsImage} alt="vs" className="mr-16 hidden sm:block" />
                    <img src={horizontalVS} alt="vs" className="sm:hidden w-full my-5" />
                    <div className="bg-[#EAE7FFB2] rounded-3xl p-10">
                        <img src={iphone} alt="iphone 13 pro" className="block mx-auto" />
                        <p className="text-[20px] sm:text-5xl font-bold mt-10">Global accounts in minutes</p>
                        <p className="mt-3 text-[#3A3A3A]">FinanceFast solves problems by proving low fees, fast transfers, secure transactions, and a user-friendly platform.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrossBorderTransactions
