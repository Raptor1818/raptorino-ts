import { ReactOriginal, JavascriptOriginal, GodotOriginalWordmark,TypescriptOriginal, ElectronOriginal, Html5Original, Css3Original, TailwindcssOriginal, BlenderOriginal } from 'devicons-react';

import { IoPerson, IoCodeSlash, IoGameController } from "react-icons/io5";

import css from '@/styles/about.module.css'
import Header from '@/components/ui/Header';
import { useEffect, useState } from 'react';
import DocumentATag from './ui/DocumentATag';

type Props = {}

function isMobileDevice() {
  return window.innerWidth < 768;
}

const About = (props: Props) => {

  const mobileDevIconSize = 70
  const defaultDevIconSize = 100

  const [devIconSize, setDevIconSize] = useState(100);

  useEffect(() => {
    const onResize = () => {
      setDevIconSize(isMobileDevice() ? mobileDevIconSize : defaultDevIconSize);
    };
  
    window.addEventListener('resize', onResize);
    onResize();
  
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id='about'>
      <div className={css.aboutContainer}>
        <div className={css.aboutTextContainer}>
          <Header icon={IoPerson}>
            About me
          </Header>
          <p className={css.aboutParagraph}>
            Hi! I'm Francesco, an 18 year old guy from Italy with a passion for web and game development.</p>
          <p className={css.aboutParagraph}>
            I have made various webdev projects, and moving forward I will focus more on learning game development with Godot 4.</p>
          <p className={css.aboutParagraph}>
          <DocumentATag hrefID='projects'>Check out my projects!</DocumentATag></p>
        </div>
      </div>
      <div className={css.aboutMeLangSection}>
        <h2>Tools and languages I use:</h2>
        <div className={css.aboutMeLanguages}>
          <Header icon={IoCodeSlash}>
            Web dev
          </Header>
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
          <Header icon={IoGameController}>
            Game dev
          </Header>
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