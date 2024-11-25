import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="w-full sm:container mx-auto mt-20 sm:mt-32 px-5 sm:px-0">
            <div className="flex flex-col sm:flex-row flex-wrap justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-lg">Company</h1>
                    <Link to={''}>About</Link>
                    <Link to={''}>Contact</Link>
                    <Link to={''}>Blog</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-lg">Product</h1>
                    <Link to={''}>Money conversion</Link>
                    <Link to={''}>International transactions</Link>
                    <Link to={''}>International transactions</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-lg">Legal</h1>
                    <Link to={''}>Terms & conditions</Link>
                    <Link to={''}>Privacy policy</Link>
                </div>
                <div>
                    <h1 className="font-bold text-lg">Sign up for our newsletter</h1>

                    <div className='mt-3 sm:mt-10 w-full sm:w-[500px] border-2 mx-auto rounded-full flex p-2 justify-between items-center'>
                        <span className="ml-2">Enter Email</span>
                        <button className="bg-[#563ACC] text-white rounded-full p-2 px-3">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between my-5 sm:my-14">
                <div className="flex gap-14 text-[#563ACC] text-xl">
                    <BiLogoInstagramAlt />
                    <FaTwitter />
                    <FaTiktok />
                    <FaYoutube />
                </div>
                <p className="mt-5">© 2024, FinanaceFast All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
