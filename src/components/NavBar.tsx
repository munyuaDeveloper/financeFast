
import { Link } from "react-router-dom"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { IoIosFastforward } from "react-icons/io"
import horizontalLines from "../assets/images/bars-3.svg"
import { useState } from "react"


const NavBar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div>


      <div className='flex justify-between items-center pt-6 px-4 sm:px-8 '>
        <div className="flex items-center gap-2 text-2xl">
          <IoIosFastforward className="text-blue-500" />
          <span>FinanceFast</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-lg items-center">
          <Link to='/'>Blog</Link>
          <Link to='/'>Company</Link>
          <Link to='/'>Products</Link>
          <Link to={''} className="flex items-center bg-[#D8C6FF] py-2 px-5 rounded-full gap-2">
            <IoPhonePortraitOutline className="text-2xl" />
            <span>Download</span>
          </Link>
        </nav>

        <button className="sm:hidden cursor-pointer" onClick={()=> setMenuIsOpen(!menuIsOpen)}>
          <img src={horizontalLines} alt="bars" className="w-10" />
        </button>
      </div>
      {
        menuIsOpen &&
        <nav className="flex flex-col sm:flex w-full bg-[#563ACC] text-white gap-8 text-lg items-center p-5">
          <Link to='/'  onClick={()=> setMenuIsOpen(!menuIsOpen)}>Blog</Link>
          <Link to='/'  onClick={()=> setMenuIsOpen(!menuIsOpen)}>Company</Link>
          <Link to='/'  onClick={()=> setMenuIsOpen(!menuIsOpen)}>Products</Link>
          <Link to={''}  onClick={()=> setMenuIsOpen(!menuIsOpen)} className="flex items-center bg-[#D8C6FF] py-2 px-5 rounded-full gap-2 text-black">
            <IoPhonePortraitOutline className="text-2xl" />
            <span>Download</span>
          </Link>
        </nav>
      }
    </div>
  )
}

export default NavBar
