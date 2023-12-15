import React from 'react'
import moon from '../images/moon.gif'
import { fadeIn } from 'react-animations'

const Homepage = () => {
  return (
    <div>
    <div className='flex justify-center pt-10'>
    <div className='p-4 pt-7 text-4xl text-center'>Welcome to Lunar Lovers! </div>
    <img style={{height: "80px"}} src={moon} alt="moon" />
    </div>
    <p style={{marginLeft: "35%", marginRight: "35%",}} className=' p-3 text-center'>
    Long ago in ancient China,
    the Jade Emperor, ruler of the heavens,
    organized a race among twelve animals to establish a measurement of time for the people.
    The order in which they finished this grand
    race created the Chinese Zodiac calendar.
    With Lunar Lovers, uncover the mysteries of the Chinese Zodiac
    and delve into the celestial wonders of your personality.
    Explore your compatibility with other signs and take a look at the harmonious
     connections that can illuminate your relationships.
    </p>

    <p className='text-center text-2xl p-3'>Enter your birth year above to get started!</p>
    
    </div>
  )
}

export default Homepage
