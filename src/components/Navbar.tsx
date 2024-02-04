import React from 'react'
import css from '../styles/navbar.module.css'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className={css.navbar}>
      <h1 className={css.logoTitle}>Raptorino</h1>
      <ul className={css.navLinks}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Links</a></li>
      </ul>
    </nav>
  )
}

export default Navbar