
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import profileImage from "../assets/images/profile.svg"
import { useRef, useState } from 'react';


const Testimonials = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const totalItems = 3;
    const cardWidth = 650; 
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - 1));
    };
  
    const translateX = -currentIndex * (cardWidth + 16); 
  



    return (
        <div className='container mx-auto mt-20 sm:mt-32 px-4 sm:px-0'>
            <div className="text-center w-full sm:w-[620px] mx-auto">
                <p className="text-[#563ACC] text-[14px] uppercase">Testimonials</p>
                <p className="font-bold text-[24px] sm:text-[40px]">What Our Customers are Saying </p>

            </div>

            <div className="relative w-full overflow-hidden mt-4 sm:mt-12">

                <div ref={sliderRef} style={{ transform: `translateX(${translateX}px)` }} className="flex gap-10 transition-transform duration-500 ease-in-out">
                    <div className="min-w-full sm:min-w-[650px] sm:min-h-[350px] bg-[#EAE7FFB2] rounded-3xl shadow-lg flex flex-col justify-center items-center my-10">
                        <div className='flex justify-center items-center self-center h-full px-5 sm:px-20'>
                            <p className="text-gray-600">“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”</p>
                        </div>

                        <div className='bg-[#E5DBFB] border-2 border-t-[#94949480] flex w-full items-center justify-center mt-auto rounded-b-3xl gap-5 py-4'>
                            <img src={profileImage} alt='profile image' />
                            <div>
                                <p className='font-semibold'>Carl Rowan</p>
                                <p>Aglets Inc</p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[650px] min-h-[350px] bg-[#E5DBFBB2] rounded-3xl shadow-lg flex flex-col justify-center items-center my-10">
                        <div className='flex justify-center items-center self-center h-full px-20'>
                            <p className="text-gray-600">“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”</p>
                        </div>

                        <div className='bg-[#E5DBFB] border-2 border-t-[#94949480] flex w-full items-center justify-center mt-auto rounded-b-3xl gap-5 py-4'>
                            <img src={profileImage} alt='profile image' />
                            <div>
                                <p className='font-semibold'>Carl Rowan</p>
                                <p>Aglets Inc</p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[650px] min-h-[350px] bg-[#F6DDFDB2] rounded-3xl shadow-lg flex flex-col justify-center items-center my-10">
                        <div className='flex justify-center items-center self-center h-full px-20'>
                            <p className="text-gray-600">“I've been using FinanceFast for a few months now and it's completely transformed the way I send money to my family abroad. The platform is so easy to use and transfers are always fast and secure.”</p>
                        </div>

                        <div className='bg-[#E5DBFB] border-2 border-t-[#94949480] flex w-full items-center justify-center mt-auto rounded-b-3xl gap-5 py-4'>
                            <img src={profileImage} alt='profile image' />
                            <div>
                                <p className='font-semibold'>Carl Rowan</p>
                                <p>Aglets Inc</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={goToPrevSlide}
                    disabled={currentIndex === 0 ? true : false}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full w-[40px] h-[40px] text-lg shadow-lg flex justify-center items-center"
                >
                    <IoIosArrowBack />
                </button>
                <button
                disabled={currentIndex === totalItems - 1 ? true : false}
                    onClick={goToNextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full w-[40px] h-[40px] text-lg shadow-lg flex justify-center items-center"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>


    )
}

export default Testimonials
