import React from 'react'
import css from '@/styles/navbar.module.css'

import { FaXTwitter  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import NavbarLinkBtn from '@/components/ui/NavbarLinkBtn';
type Props = {}

function Navbar({}: Props) {
  const links = [
    "home",
    "about",
    "projects",
    "links"
  ]

  return (
    <nav className={css.navbar}>
      <h1 className={css.logoTitle}>Raptorino</h1>
      <div className={css.navSectionLinks}>

        {links.map(link => (
          <NavbarLinkBtn link={link}/>
        ))}

      </div>
      <div className={css.navSocialLinks}>
        <a href="https://twitter.com/_Raptorr" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://github.com/Raptor1818" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </nav>
  )
}

export default Navbar