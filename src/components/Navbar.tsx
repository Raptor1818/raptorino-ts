import React from 'react'
import css from '../styles/navbar.module.css'

import { FaXTwitter  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
type Props = {}

function Navbar({}: Props) {
  return (
    <nav className={css.navbar}>
      <h1 className={css.logoTitle}>Raptorino</h1>
      <div className={css.navSectionLinks}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Links</a>
      </div>
      <ul className={css.navSocialIcons}>
        <li><a href="https://twitter.com/_Raptorr" target="_blank" rel="noopener noreferrer"></a><FaXTwitter  /></li>
        <li><a href="https://github.com/Raptor1818" target="_blank" rel="noopener noreferrer"></a><FaGithub /></li>
      </ul>
    </nav>
  )
}

export default Navbar