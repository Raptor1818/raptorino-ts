import Home from './Home';
import css from '../styles/body.module.css';
import About from './About';

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