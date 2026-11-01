import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './component/Header.jsx'
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx'
import ServicesPage from './pages/services.jsx'
import PackagesPage from './pages/packages.jsx'
import InstallationPage from './pages/installation.jsx'
import NotFoundPage from './pages/notFound.jsx'
import HomePage from './pages/home'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <main className='container'>
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/packages' element={<PackagesPage />} />
          <Route path='/installations' element={<InstallationPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
       </Routes>
    </main>
    </BrowserRouter >
  )
}

export default App
