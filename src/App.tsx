import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Streams from './components/Streams'
import About from './components/About'
import Stats from './components/Stats'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream paper">
      <Navbar />
      <Hero />
      <Streams />
      <About />
      <Stats />
      <Connect />
      <Footer />
    </div>
  )
}

export default App
