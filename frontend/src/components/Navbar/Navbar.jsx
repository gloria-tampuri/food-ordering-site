import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='py-5 flex justify-between items-center'>
      <img src={assets.logo} alt="logo" className='w-[150px]' />

      <ul className='flex list-none gap-5 text-[#49557e] text-[18px]'>
        {["home", "menu", "mobile-app", "contact us"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer capitalize hover:text-[#ff6347] transition-colors duration-200 bor ${
              menu === item ? "pb-0.5 border-b border-[#49557e]" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className='flex gap-10 items-center'>
        <img src={assets.search_icon} alt="search" />
        <div className="relative">
          <img src={assets.basket_icon} alt="basket" />
        </div>
        <button className='bg-transparent text-[#49557e] border border-[tomato] py-3 px-8 rounded-[50px] transition duration-300 hover:bg-[#fff4f2]'>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
