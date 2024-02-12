import css from '@/styles/body.module.css';

import Home from '@/components/Home';
import About from '@/components/About';

type Props = {}

function Body({}: Props) {
  return (
    <div className={css.bodyContainer}>
      <Home></Home>
      <About></About>
    </div>
  )
}

export default Body