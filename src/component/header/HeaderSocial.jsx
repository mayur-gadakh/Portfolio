import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import  {BsGithub} from 'react-icons/bs'
import {FaSquareXTwitter } from 'react-icons/fa6'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href='https://www.linkedin.com/in/mayur-gadakh-b007371b2/'><BsLinkedin/></a>
        <a href='https://github.com/mayur-gadakh'><BsGithub/></a>
        <a href='https://twitter.com/MayurGadakh1311'><FaSquareXTwitter/></a>

        </div>
  )
}

export default HeaderSocial