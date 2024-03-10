import React from 'react'
import { FaBox, FaCircleUser, FaCaretDown } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className="flex">
      <FaBox />
      <p>ThinkFit</p>
      <FaCircleUser />
      <p>Maxell Milay</p>
      <FaCaretDown />
    </div>
  )
}

export default Header
