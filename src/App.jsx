import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import Pricing from './Sections/Pricing'
import FAQ from './Sections/FAQ'
import Testimonials from './Sections/Testimonials'
import Footer from './Sections/Footer'


function App() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
