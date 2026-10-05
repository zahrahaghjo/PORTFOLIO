import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Focus } from './components/Focus'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Focus />
        <Skills />
        <Background />
      </main>
      <Contact />
    </>
  )
}
