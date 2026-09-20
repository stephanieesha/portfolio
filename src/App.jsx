import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Writing from './components/Writing'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Work />
        <Writing />
      </main>
      <Footer />
    </>
  )
}
