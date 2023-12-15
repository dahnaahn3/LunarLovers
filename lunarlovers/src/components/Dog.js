import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import dog from '../images/dog.png'
import rabbit from '../images/rabbit.png'
import tiger from '../images/tiger.png'

const Dog = () => {
  return (
    <div className='animate__animated animate__fadeIn mt-5 py-5 mb-10 border border-green-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-green-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/dog" className='text-6xl font-bold mr-2'>DOG</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={dog} alt="dog" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}
    >Dogs are loyal and honest, amiable and kind, cautious and prudent.
    Due to having a strong sense of loyalty and sincerity,
     Dogs will do everything for the person who they think is most important.
     As Dogs are not good at communication, it is difficult for them to convey their thoughts to others.
     Therefore, Dogs tend to leave others with the impression that they have a stubborn personality.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/rabbit" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rabbit} alt="rabbit" />
          <p className='text-3xl pl-4'>Rabbit</p>
        </Link>

        <Link to="/tiger" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={tiger} alt="tiger" />
          <p className='text-3xl'>Tiger</p>
        </Link>
    </div>
  </div>

    </div>
  )
}

export default Dog
