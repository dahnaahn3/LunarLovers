import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import sheep from '../images/sheep.png'
import dog from '../images/dog.png'
import pig from '../images/pig.png'
import rabbit from '../images/rabbit.png'

const Rabbit = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__slow mt-5 py-5 border border-green-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-green-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/rabbit" className='text-6xl font-bold mr-2'>RABBIT</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={rabbit} alt="rabbit" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>APeople born in a year of the Tiger are brave, competitive, unpredictable, and confident.
    They are very charming and well-liked by others. But sometimes they are likely to be impetuous,
    irritable, and overindulgent.

    With stubborn personalities and tough judgment,
    Tigers work actively and express themselves boldly, doing things in a high-handed manner.
    They are authoritative and never go back on what they have said.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/sheep" className='flex flex-col ml-3'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={sheep} alt="sheep" />
          <p className='text-3xl pl-4'>Sheep</p>
        </Link>

        <Link to="/dog" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={dog} alt="dog" />
          <p className='text-3xl ml-4'>Dog</p>
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

export default Rabbit
