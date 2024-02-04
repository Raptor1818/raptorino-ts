import React from 'react'
import css from '../styles/home.module.css'


type Props = {}

const Home = (props: Props) => {
  return (
    <div className={css.homeContainer}>
      <div>
      </div>
      <div className={css.homeTitleContainer}>
        <h1 className={css.homeTitle}>Welcome</h1>
        <h1 className={css.homeTitleTwo}>I'm Francesco</h1>
      </div>
      <div className={css.hobbyTitleContainer}>
        <h1>Game dev</h1> {/*On hover the background is animated and glows*/}
        <h1>Web dev</h1>
      </div>
    </div>
  )
}

export default Home