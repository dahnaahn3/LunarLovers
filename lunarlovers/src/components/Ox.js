import React from 'react'
import ox from '../images/ox.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import rat from '../images/rat.png'
import snake from '../images/snake.png'
import rooster from '../images/rooster.png'

const Ox = () => {
  return (
    <div className='animate__animated animate__fadeIn  mb-10 mt-5 py-5 border border-blue-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-blue-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/ox" className='text-6xl font-bold mr-2'>OX</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={ox} alt="ox" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>Known as "the good helper" in Chinese farming,
    the Ox is a symbol of diligence, strength, honesty, down-to-earth persistence, and wealth.
    Having great patience and a desire to make progress, Oxes can achieve their goals by consistent effort.
    They are not much influenced by others or the environment, but persist in doing things according to
    their ideas and capabilities.
Before taking any action, Oxes will have a definite plan with detailed steps,
to which they apply their strong faith and physical strength. As a result, people of the Ox
zodiac sign often enjoy great success.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/rat" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rat} alt="rat" />
          <p className='text-3xl pl-4'>Rat</p>
        </Link>

        <Link to="/rooster" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rooster} alt="rooster" />
          <p className='text-3xl'>Rooster</p>
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

export default Ox
