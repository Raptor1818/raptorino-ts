import css from '@/App.module.css'
import Body from '@/components/Body';
import BackgroundParticles from '@/components/BackgroundParticles';

function App() {
  return (
    <>
      <main className={css.mainContainer}>
        <BackgroundParticles />
        <Body />
      </main>
    </>
  )
}

export default App
