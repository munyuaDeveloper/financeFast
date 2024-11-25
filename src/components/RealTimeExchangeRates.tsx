
import { FaTurkishLiraSign } from "react-icons/fa6"
import vsImage from "../assets/images/vs.svg"
import selectPurposeImage from "../assets/images/zero-hidden-fee.svg"
import { FaWonSign } from "react-icons/fa"
import { MdCurrencyYuan } from "react-icons/md"
import horizontalVS from "../assets/images/horizontalVS.svg"


const RealTimeExchangeRates = () => {
    return (
        <div className="container mt-20 sm:mt-32 mx-auto px-3 sm:px-0">
            <div className="text-center sm:w-[620px] mx-auto px-3 sm:px-0">
                <p className="text-[#563ACC] text-[14px] uppercase">Real-time exchange rate</p>
                <p className="font-bold text-[24px] sm:text-[40px]">Effortlessly Convert Currency </p>
                <p className="text-[16px]">Convert your currency from Pounds to Naira or Naira to Dollars. Convert Currency Anytime, Anywhere with FinanceFast's Seamless and Efficient Service.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 mt-14 justify-between items-center">
                <div className="bg-[#F1DDFFB2] rounded-3xl p-10 w-full">
                    <img src={selectPurposeImage} alt="Select purpose" className="block mx-auto" />
                    <p className="text-[20px] sm:text-5xl font-bold mt-10">Zero Hidden Fees</p>
                    <p className="mt-3 text-[#3A3A3A]">Get the Best Exchange Rates with FinanceFast: Convert Currency Hassle-Free, Instantly and Without Fees.</p>
                </div>

                <img src={vsImage} alt="vs" className="mx-20 hidden sm:block" />
                <img src={horizontalVS} alt="vs" className="sm:hidden w-full my-5" />
                <div className="w-full">
                    <div className="flex gap-5">
                        <span className="bg-[#EAE7FF] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <FaTurkishLiraSign className="text-[#C0C0C0]" />
                        </span>
                        <div>
                            <h1 className="font-bold">Turkish Lira</h1>
                            <p>₦‎ 340 to ₺1 + ₦2,500 hidden conversion fee </p>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-5">
                        <span className="bg-[#EAE7FF] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <span className="text-[#C0C0C0]">R</span>
                        </span>
                        <div>
                            <h1 className="font-bold">South Africa Rand</h1>
                            <p>₦‎ 470 to R1 + ₦3,100 hidden conversion fee </p>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-5">
                        <span className="bg-[#563ACC] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <span className="text-white">$</span>
                        </span>
                        <div>
                            <h1 className="font-bold">United States</h1>
                            <p>₦‎ 770 to $1 + ₦‎ 3,000 hidden conversion fee </p>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-5">
                        <span className="bg-[#EAE7FF] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <FaWonSign className="text-[#C0C0C0]" />
                        </span>
                        <div>
                            <h1 className="font-bold">South Korea Won</h1>
                            <p>₦‎ 470 to ₩1 + ₦‎ 5,000 hidden conversion fee </p>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-5">
                        <span className="bg-[#EAE7FF] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                            <MdCurrencyYuan className="text-[#C0C0C0]" />
                        </span>
                        <div>
                            <h1 className="font-bold">China Yuan</h1>
                            <p>₦‎ 470 to  ¥1 + ₦‎ 3,200 hidden conversion fee  </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RealTimeExchangeRates
