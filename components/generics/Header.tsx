import React from 'react'
import { FaBox, FaCircleUser, FaCaretDown } from 'react-icons/fa6'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex bg-tf-secondary text-white items-center justify-between px-5 py-3">
      <div className="flex items-center gap-3">
        <FaBox className="text-xl" />
        <div className="relative h-10 aspect-[1167/509]">
          <Image
            src="/generics/thinkfit-expanded-logo.png"
            alt="Expanded Logo"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <FaCircleUser className="text-xl" />
        <p>Maxell Milay</p>
        <FaCaretDown />
      </div>
    </div>
  )
}

export default Header
