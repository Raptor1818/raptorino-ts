import React from 'react'
import css from '../styles/footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <p>{currentYear} | All rights reserved.</p>
    </footer>
  )
}

export default Footer