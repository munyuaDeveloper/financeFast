import { IoChevronDown } from "react-icons/io5"
import flagImage from "../assets/images/flag.svg"
import heroImage from '../assets/images/heroImage.svg'
import cLogo1 from '../assets/images/company1.svg'
import cLogo2 from '../assets/images/company2.svg'
import cLogo3 from '../assets/images/company3.svg'
import cLogo4 from '../assets/images/company4.svg'
import cLogo5 from '../assets/images/company5.svg'
const HeroSection = () => {
  const images = [cLogo1, cLogo2, cLogo3, cLogo4, cLogo5]
  return (
    <div className="sm:px-0 mx-0 overflow-x-hidden">
      <div className="px-3 sm:px-0">
        <div className='w-full sm:w-[928px] mx-auto mt-20 sm:px-10 text-center'>
          <p className='font-bold text-[40px] sm:text-[48px]'>Simplify Your International Transactions with <span className="bg-gradient-to-r from-[#6364FF] to-[#563ACC] bg-clip-text text-transparent">One Platform</span></p>
          <p className='text-lg py-1 px-5'>Say Goodbye to the Hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.</p>
        </div>
        <div className='mt-10 w-full sm:w-[500px] border-2 mx-auto rounded-full flex p-2 justify-between items-center'>
          <div className="flex items-center gap-2">
            <img src={flagImage} alt="flag" />
            <IoChevronDown className="text-2xl my-2" />+234
          </div>

          <button className="bg-[#563ACC] text-white rounded-full p-2 px-3 hidden sm:block">Download Now</button>
        </div>

        <button className="bg-[#563ACC] text-white rounded-full px-3 sm:hidden w-full mt-4 py-4">Download Now</button>
      </div>

      <div className="w-full mt-24">
        <img className="block mx-auto w-fit" src={heroImage} />
      </div>

      <div className="bg-[#E5DBFB] ">
        <div className="container mx-auto py-12 flex flex-col sm:flex-row items-center justify-between">
          <p className="px-2 sm:px-0 w-full sm:w-[25%]">We're have been recognized by Leading Finance Publications and Organizations.</p>

          <div className="flex justify-around flex-1 overflow-x-hidden gap-4 sm:gap-0 px-1">
            {
              images.map((image) => (
                <img key={image} src={image} className=" animate-pulse" />
              ))
            }

          </div>
        </div>


      </div>
    </div>
  )
}

export default HeroSection
