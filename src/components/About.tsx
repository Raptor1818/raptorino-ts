import { ReactOriginal, JavascriptOriginal, GodotOriginalWordmark,TypescriptOriginal, ElectronOriginal, Html5Original, Css3Original, TailwindcssOriginal, BlenderOriginal } from 'devicons-react';

import css from '../styles/about.module.css'

type Props = {}

const About = (props: Props) => {
  return (
    <section>
      <div className={css.aboutContainer}>
        <div></div>
        <div className={css.aboutTextContainer}>
          <h1 className={css.aboutTitle}>About me</h1>
          <p className={css.aboutParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde fuga repudiandae fugiat adipisci deserunt, possimus excepturi cumque illo nobis temporibus, vero incidunt consectetur dolor ex accusantium, ipsa explicabo obcaecati.</p>
        </div>
      </div>
      <div className={css.devIconsContainer}>
        <Html5Original size={100}/>
        <Css3Original size={100}/>
        <TailwindcssOriginal size={100}/>

        <ReactOriginal size={100}/>
        <JavascriptOriginal size={100}/>
        <TypescriptOriginal size={100}/>
        <ElectronOriginal size={100}/>

        <GodotOriginalWordmark size={100}/>
        <BlenderOriginal size={100}/>
      </div>
    </section>
  )
}

export default About