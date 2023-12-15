import React from 'react'
import moon from '../images/moon.gif'
import { useMediaQuery } from 'react-responsive'

const Homepage = () => {

  const isDesktopOrLaptop = useMediaQuery ({
    query: '(min-width: 601px)'
  })
  const isMobile = useMediaQuery ({
    query: '(max-width: 600px)'
  })

  return (
    <div>
    {isDesktopOrLaptop &&
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
    }
  {isMobile &&
    <div>
    <div className='flex justify-center pt-5 pl-3 pr-3'>
    <div className='pr-4'>
    <div className='pt-3 pl-2 text-4xl text-center'>Welcome to </div>
    <div className='text-4xl text-center'>Lunar Lovers!</div>
    </div>
    <img style={{height: "80px", marginTop: "10px"}} src={moon} alt="moon" />
    </div>
    <p style={{marginLeft: "10%", marginRight: "10%",}} className=' p-3 text-center'>
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
    <p className='text-center text-xl font-bold pb-6 '>Enter your birth year above to get started!</p>
    </div>
  }

    </div>
  )
}

export default Homepage
