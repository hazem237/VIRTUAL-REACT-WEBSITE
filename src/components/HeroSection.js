import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
      <div className='hero-container'>
        <video src='./videos/video-2.mp4' auto loop muted />
        <h1>ADVENTURE TIME</h1>
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
    </div>
  )
}

export default HeroSection
