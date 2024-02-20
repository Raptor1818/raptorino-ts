import React from 'react'
import css from '@/styles/home.module.css'
import TypewriterComponent from '@/components/ui/TypewriterComponent';
import { typewriterStrings } from '@/assets/typewriterStrings';


type Props = {}

const Home = (props: Props) => {

  return (
    <section className={css.homeContainer} id='home'>
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
    </section>
  )
}

export default Home