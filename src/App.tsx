import css from './App.module.css'
import Body from './components/Body';
import StarsCanvas from './components/StarBackground';

function App() {
  return (
    <>
      <main className={css.mainContainer}>
        <StarsCanvas></StarsCanvas>
        <Body></Body>
      </main>
    </>
  )
}

export default App
