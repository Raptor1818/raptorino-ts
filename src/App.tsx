import css from './App.module.css'
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Body from './components/Body';
import StarsCanvas from './components/StarBackground';

function App() {
  return (
    <>
      <main className={css.mainContainer}>
        <StarsCanvas></StarsCanvas>
        <Navbar></Navbar>
        <Body></Body>
        {/*<Footer></Footer>*/}
      </main>
    </>
  )
}

export default App
