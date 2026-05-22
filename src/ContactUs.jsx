import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroContact from './components/ContactUs/HeroContact'
import FooterContact from './components/ContactUs/FooterContact'
import SendMessege from './components/ContactUs/SendMessege'

function ContactUs() {
  return (
    <div className='w-full'>
      <Navbar />
      <HeroContact />
      <SendMessege />
      <FooterContact />
    </div>
  )
}

export default ContactUs