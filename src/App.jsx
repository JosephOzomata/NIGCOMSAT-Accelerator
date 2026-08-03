import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import Spacefest from './pages/Spacefest'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
<<<<<<< HEAD
import ScrollToTop from './components/ScrollToTop'
import Apply from './pages/Apply'
=======
import Apply from './pages/Apply'
import Upload from './pages/Upload'
import Gallery from './pages/Gallery'
import ScrollToTop from './components/ScrollToTop'
<<<<<<< HEAD
import Hackathon from './pages/Hackathon'
import Events from './pages/Events'
=======
>>>>>>> a80a70405789da037bd118dbd04e8bea79933456
>>>>>>> 715e13098d8c489ba33c6468eb24c4ac381763bc

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spacefest" element={<Spacefest />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path='/apply' element={<Apply />} />
=======
          <Route path="/apply" element={<Apply />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
<<<<<<< HEAD
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/events" element={<Events />} />
=======
>>>>>>> a80a70405789da037bd118dbd04e8bea79933456
>>>>>>> 715e13098d8c489ba33c6468eb24c4ac381763bc
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App