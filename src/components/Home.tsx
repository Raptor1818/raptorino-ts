import React from 'react'
import css from '../styles/home.module.css'
import TypewriterComponent from './TypewriterComponent';
import { typewriterStrings } from '../assets/typewriterStrings';


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
            <TypewriterComponent stringArray={typewriterStrings}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home