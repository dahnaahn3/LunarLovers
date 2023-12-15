import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import dragon from '../images/dragon.png'
import rat from '../images/rat.png'
import monkey from '../images/monkey.png'
import rooster from '../images/rooster.png'


const Dragon = () => {
  return (
    <div className='animate__animated animate__fadeIn mb-10  mt-5 py-5 border border-red-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-red-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/dragon" className='text-6xl font-bold mr-2'>Dragon</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={dragon} alt="dragon" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>Among the Chinese zodiac animals, the dragon is the sole imaginary animal.
     The Chinese dragon is the most vital and powerful beast in the Chinese zodiac, although
      Dragons have an infamous reputation for being a hothead and possessing a sharp tongue.
    In ancient times, people thought that Dragons were best suited to be leaders of the world
    with their character traits of dominance and ambition.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/rat" className='flex flex-col ml-3'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rat} alt="rat" />
          <p className='text-3xl pl-4'>Rat</p>
        </Link>

        <Link to="/monkey" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={monkey} alt="monkey" />
          <p className='text-3xl'>Monkey</p>
        </Link>

        <Link to="/rooster" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rooster} alt="rooster" />
          <p className='text-3xl ml-5'>Rooster</p>
        </Link>

    </div>
  </div>
  </div>
  )
}

export default Dragon
