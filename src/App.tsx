//import { useState } from 'react'
import css from './App.module.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main className={css.mainContainer}>
        <Navbar></Navbar>
        {/*<Footer></Footer>*/}
      </main>
    </>
  )
}

export default App
