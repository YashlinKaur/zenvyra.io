import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Services/HeroSection'
import CoreServices from './components/Services/CoreServices'
import OurProcess from './components/Services/OurProcess'

function Services() {
  return (
    <div className='w-full'>
      <Navbar />
      <HeroSection />
      <CoreServices />
      <OurProcess />
    </div>
 )
}

export default Services