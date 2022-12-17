
import { useState } from "react";
import { navLinks } from '../constants';
import { NavLogo, NavMenu, NavSign } from '../constants/images';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('Marketplace');
  const [toggle, setToggle] = useState(true);

  return (
    <nav className='w-full flex justify-between items-center py-6'>
      <div className="flex flex-row justify-start items-center">
        <img className='w-[32px] h-[32px] mr-2 text-purple'
          src={NavLogo}
          alt="logo" />
        <h1 className="text-[19px] text-white font-bold">
          NFT Marketplace
        </h1>
      </div>

      <div className="md:flex hidden flex-row justify-start items-center">
        <ul className="list-none flex justify-center items-center flex-1">
          {navLinks.map((link,index) => (
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mx-3 ${active === link.id ? 'text-purple' : 'text-white'}`}
              key={link.id}
              onClick={() => setActive(link.id)}>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
            </li>
          ))}
        </ul>
        <button className="bg-purple px-[1.4rem] py-[.5rem] text-white rounded-full">
          Sign Up
        </button>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center">
            {toggle ? <HiMenuAlt3 className="text-white w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}/> : <AiOutlineCloseSquare className="text-white w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}/>}
            <div className={`${toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-center items-start flex-1">
                {navLinks.map((link,index) => (
                  <li className={`font-poppins font-normal cursor-pointer text-[16px] mx-3 ${active === link.id ? 'text-purple' : 'text-white'}`}
                    key={link.id}
                    onClick={() => (
                      setToggle(!toggle),
                      setActive(link.id)
                    )}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </nav>
  )
}

export default Navbar