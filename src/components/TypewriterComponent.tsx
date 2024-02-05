import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { typewriterStrings } from '../assets/typewriterStrings'

const TypewriterComponent = () => {
  return (
    <Typewriter
      words={typewriterStrings}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
      cursor={true}
    />
  )
}

export default TypewriterComponent