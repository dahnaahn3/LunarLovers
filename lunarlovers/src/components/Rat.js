import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import rat from '../images/rat.png'
import dragon from '../images/dragon.png'
import monkey from '../images/monkey.png'
import ox from '../images/ox.png'

const Rat = () => {
  return (
    <div className='mb-10 animate__animated animate__fadeIn mt-5 py-5 border border-purple-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-purple-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/rat" className='text-6xl font-bold mr-2'>RAT</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={rat} alt="rat" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>People born in the Year of the Rat are very optimistic, nothing can fear them down.
    This nature attracts a lot of pursuers following behind. When they settle for a stable relationship,
    the other may think them careless and lack of courage.
In fact, their inner side is tender and delicate, and they usually show mercy and
understanding as well as tolerance to the people they love.</p>
    </div>

    <div>
      <p className='py-2 flex justify-center'>You are most compatible with:</p>
      <div className='flex justify-center'>

        <Link to="/dragon" className='flex flex-col ml-3'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={dragon} alt="dragon" />
          <p className='text-3xl pl-4'>Dragon</p>
        </Link>

        <Link to="/monkey" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={monkey} alt="monkey" />
          <p className='text-3xl'>Monkey</p>
        </Link>

        <Link to="/ox" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={ox} alt="ox" />
          <p className='text-3xl ml-5'>Ox</p>
        </Link>

    </div>
  </div>
  </div>
  )
}

export default Rat
