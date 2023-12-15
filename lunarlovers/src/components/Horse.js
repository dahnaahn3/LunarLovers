import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import horse from '../images/horse.png'
import tiger from '../images/tiger.png'
import sheep from '../images/sheep.png'
import dog from '../images/dog.png'

const Horse = () => {
  return (
    <div className='mt-5 py-5 border border-blue-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-blue-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/horse" className='text-6xl font-bold mr-2'>HORSE</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={horse} alt="horse" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>People born in a year of the Horse are extremely animated, active and energetic. Horses love to be in a crowd, and they can usually be seen on such occasions as concerts, theater performances, meetings, sporting events, and parties.

    With a deft sense of humor, Horses are masters of repartee. They love to take center stage and delight audiences everywhere.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/tiger" className='flex flex-col ml-3'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={tiger} alt="tiger" />
          <p className='text-3xl pl-4'>Tiger</p>
        </Link>

        <Link to="/sheep" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={sheep} alt="sheep" />
          <p className='text-3xl'>Sheep</p>
        </Link>

        <Link to="/dog" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={dog} alt="dog" />
          <p className='text-3xl ml-5'>Dog</p>
        </Link>

    </div>
  </div>
  </div>
  )
}

export default Horse
