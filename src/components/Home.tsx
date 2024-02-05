import React from 'react'
import css from '../styles/home.module.css'
import TypewriterComponent from './TypewriterComponent';

type Props = {}

const Home = (props: Props) => {

  return (
    <div className={css.homeContainer}>
      <div>
      </div>
      <div className={css.homeTitleContainer}>
        <div>
          <h1 className={css.homeTitle}>Welcome</h1>
          <h1 className={css.homeTitleTwo}>I'm Francesco</h1>
          <div className={css.homeTypewriter}>
            <TypewriterComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home