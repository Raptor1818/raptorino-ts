import React from 'react'
import css from '../styles/footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.homeTitleContainer}>
        <p>{currentYear} | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer