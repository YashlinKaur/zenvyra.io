import React from 'react'
import AboutHero from './components/AboutUs/AboutHero'
import Navbar from './components/Navbar/Navbar'
import OurStory from './components/AboutUs/OurStory'
import OurValues from './components/AboutUs/OurValues'

function AboutUs() {
  return (
    <div className='w-full'>
        <Navbar />
        <AboutHero />
        <OurStory />
        <OurValues />
    </div>
  )
}

export default AboutUs