import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

type Props = {
  stringArray: string[]
}

const TypewriterComponent = (props: Props) => {

  const [shuffledStrings, setShuffledStrings] = useState([]);

    useEffect(() => {
        const shuffled = [...props.stringArray];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledStrings(shuffled);
    }, []);

  return (
    <Typewriter
      options={{
        strings: shuffledStrings,
        autoStart: true,
        loop: true,
        cursor: '_',
        delay: 75
      }}
    />
  )
}

export default TypewriterComponent