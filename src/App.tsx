import css from './App.module.css'
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <>
      <main className={css.mainContainer}>
        <Navbar></Navbar>
        <Body></Body>
        {/*<Footer></Footer>*/}
      </main>
    </>
  )
}

export default App
