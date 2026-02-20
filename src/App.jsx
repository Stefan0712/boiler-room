import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Gallery from './pages/Gallery/Gallery'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev=> prev === 'en' ? 'de' : 'en');
  }

  return (
    <div className='App'>
      <Navigation changePage={setCurrentPage} toggleLang={toggleLang} lang={lang} />
      <div className='page'>
        {
          currentPage === 'home' ? <Home changePage={setCurrentPage} lang={lang} /> :
          currentPage === 'menu' ? <Menu changePage={setCurrentPage} lang={lang} /> :
          currentPage === 'gallery' ? <Gallery changePage={setCurrentPage} lang={lang} /> : 
          <Home changePage={setCurrentPage} lang={lang} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default App
