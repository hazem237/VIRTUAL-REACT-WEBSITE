import React from 'react'
import '../components/HeroSection.css'
import { Button } from '../components/Button'

const Services = () => {
  return (
 <div>
      <div className='hero-container'>
       
        <h1>Services</h1>
        <p>What are you waiting for ?</p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            Grt Started </Button>
              <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER  </Button>

        </div>
      </div>
    </div> )
}

export default Services
