import React from 'react'
import Home from './Home';
import css from '../styles/body.module.css';

type Props = {}

function Body({}: Props) {
  return (
    <div className={css.bodyContainer}>
      <Home></Home>
    </div>
  )
}

export default Body