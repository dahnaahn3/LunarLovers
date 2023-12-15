import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ox from '../images/ox.png'
import snake from '../images/snake.png'
import rooster from '../images/rooster.png'

const Rooster = () => {
  return (
<div className='animate__animated animate__fadeIn animate__slow mt-5 py-5 border border-purple-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-purple-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/rooster" className='text-6xl font-bold mr-2'>ROOSTER</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={rooster} alt="rooster" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}
    >Roosters are always active, amusing, and popular within a crowd.
    Roosters are talkative, outspoken, frank, open, honest, and loyal individuals.
    They like to be the center of attention and always appear attractive and beautiful.
    Roosters are happiest when they are surrounded by others, whether at a party or just a social gathering.
    They enjoy the spotlight and will exhibit their charm on any occasion.
    </p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/ox" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={ox} alt="ox" />
          <p className='text-3xl pl-4'>Ox</p>
        </Link>

        <Link to="/snake" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={snake} alt="snake" />
          <p className='text-3xl'>Snake</p>
        </Link>
    </div>
  </div>

    </div>
  )
}

export default Rooster
