import React from 'react'
import Navbar from './components/Navbar/Navbar'
import InsightHero from './components/Insights/InsightHero'
import FeaturedInsights from './components/Insights/FeaturedInsights'
import FooterInsights from './components/Insights/FooterInsights'

function Insights() {
  return (
    <div className='w-full'>
        <Navbar />
        <InsightHero />    
        <FeaturedInsights />  
        <FooterInsights />
    </div>
  )
}

export default Insights