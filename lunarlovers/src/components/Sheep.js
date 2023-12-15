import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import sheep from '../images/sheep.png'
import rabbit from '../images/rabbit.png'
import horse from '../images/horse.png'
import pig from '../images/pig.png'

const Sheep = () => {
  return (
    <div className='mb-10 animate__animated animate__fadeIn mt-5 py-5 border border-yellow-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-yellow-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/sheep" className='text-6xl font-bold mr-2'>SHEEP</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={sheep} alt="sheep" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>People born in a year of the sheep are generally believed to be gentle,
    mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of
    kindheartedness and justice.
    They have very delicate thoughts, strong creativity,
    and perseverance, and acquire professional skills well.
    Although they look gentle on the surface, they are tough on the inside, always
     insisting on their own opinions in their minds. They have strong inner resilience
     and excellent defensive instincts.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/rabbit" className='flex flex-col ml-3'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rabbit} alt="rabbit" />
          <p className='text-3xl pl-4'>Rabbit</p>
        </Link>

        <Link to="/horse" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={horse} alt="horse" />
          <p className='text-3xl ml-4'>Horse</p>
        </Link>

        <Link to="/pig" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={pig} alt="pig" />
          <p className='text-3xl ml-5'>Pig</p>
        </Link>

    </div>
  </div>
  </div>
  )
}

export default Sheep
