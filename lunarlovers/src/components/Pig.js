import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import pig from '../images/pig.png'
import tiger from '../images/tiger.png'
import rabbit from '../images/rabbit.png'
import sheep from '../images/sheep.png'

const Pig = () => {
  return (
    <div className='animate__animated animate__fadeIn animate__slow mt-5 py-5 border border-blue-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-blue-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/pig" className='text-6xl font-bold mr-2'>PIG</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={pig} alt="pig" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}
    >Pigs are diligent, compassionate, and generous. They have great concentration:
    once they set a goal, they will devote all their energy to achieving it.
    Though Pigs rarely seek help from others, they will not refuse to give others a hand.
    Pigs never suspect trickery, so they are easily fooled.
    Generally speaking, Pigs are relatively calm when facing trouble.
     No matter how difficult the problems are Pigs encounter, they can handle
     things properly and carefully. They have a great sense of
     responsibility to finish what they are engaged in.</p>
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

        <Link to="/sheep" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={sheep} alt="sheep" />
          <p className='text-3xl pl-4'>Sheep</p>
        </Link>
    </div>
  </div>

    </div>
  )
}

export default Pig
