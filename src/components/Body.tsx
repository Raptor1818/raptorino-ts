import css from '@/styles/body.module.css';

import Home from '@/components/Home';
import About from '@/components/About';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {}

function Body({}: Props) {
  return (
    <>

      <Navbar />

      <div className={css.bodyContainer}>
        <Home />
        <About />
      </div>

      <Footer />

    </>
  )
}

export default Body