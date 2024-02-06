import { Typewriter } from 'react-simple-typewriter'
import { typewriterStrings } from '../assets/typewriterStrings'

const TypewriterComponent = () => {
  return (
    <Typewriter
      words={typewriterStrings}
      loop={0} // 0 means infinitely
      typeSpeed={80}
      deleteSpeed={60}
      delaySpeed={2500}
      cursor={true}
      cursorStyle='_'
    />
  )
}

export default TypewriterComponent