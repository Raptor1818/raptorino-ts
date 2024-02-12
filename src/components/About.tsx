import { ReactOriginal, JavascriptOriginal, GodotOriginalWordmark,TypescriptOriginal, ElectronOriginal, Html5Original, Css3Original, TailwindcssOriginal, BlenderOriginal } from 'devicons-react';

import { IoPerson, IoCodeSlash, IoGameController } from "react-icons/io5";

import css from '@/styles/about.module.css'
import Header from '@/components/ui/Header';

type Props = {}

const About = (props: Props) => {
  const devIconSize = 100

  return (
    <section id='about'>
      <div className={css.aboutContainer}>
        <div></div>
        <div className={css.aboutTextContainer}>
          <Header 
            text='About me' 
            icon={IoPerson} />
          <p className={css.aboutParagraph}>
            Hi! I'm Francesco, an 18 year old guy from Italy with a passion for web and game development.</p>
          <p className={css.aboutParagraph}>
            I have made various webdev projects, and moving forward I will focus more on learning game development with Godot 4.</p>
          <p className={css.aboutParagraph}><a href="#projects">
            Check out my projects!</a></p>
        </div>
      </div>
      <div className={css.aboutMeLangSection}>
        <h2>Here are tools and languages I use:</h2>
        <div className={css.aboutMeLanguages}>
          <Header 
            text='Web dev' 
            icon={IoCodeSlash} />
          <div className={css.devIconsContainer}>
            <Html5Original size={devIconSize}/>
            <Css3Original size={devIconSize}/>
            <JavascriptOriginal size={devIconSize}/>
            <TypescriptOriginal size={devIconSize}/>
          </div>

          <div className={css.devIconsContainer}>
            <TailwindcssOriginal size={devIconSize}/>
            <ReactOriginal size={devIconSize}/>
            <ElectronOriginal size={devIconSize}/>
          </div>

        </div>

        <div className={css.aboutMeLanguages}>
          <Header 
            text='Game dev' 
            icon={IoGameController} />
          <div className={css.devIconsContainer}>
            <GodotOriginalWordmark size={devIconSize}/>
            <BlenderOriginal size={devIconSize}/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About