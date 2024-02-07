import React from 'react'
import css from '../styles/about.module.css'

type Props = {}

const About = (props: Props) => {
  return (
    <section className={css.aboutContainer}>
      <div></div>
      <div className={css.aboutTextContainer}>
        <h1 className={css.aboutTitle}>About me</h1>
        <p className={css.aboutParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde fuga repudiandae fugiat adipisci deserunt, possimus excepturi cumque illo nobis temporibus, vero incidunt consectetur dolor ex accusantium, ipsa explicabo obcaecati.</p>
      </div>
    </section>
  )
}

export default About