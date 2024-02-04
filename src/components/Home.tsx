import React from 'react'
import css from '../styles/home.module.css'


type Props = {}

const Home = (props: Props) => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Welcome</h1>
    </div>
  )
}

export default Home