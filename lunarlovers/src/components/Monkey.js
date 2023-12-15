import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import monkey from '../images/monkey.png'
import dragon from '../images/dragon.png'
import dog from '../images/dog.png'
import rat from '../images/rat.png'

const Monkey = () => {
  return (
    <div className=' animate__animated animate__fadeIn mb-10  mt-5 py-5 border border-orange-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-orange-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/monkey" className='text-6xl font-bold mr-2'>MONKEY</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={monkey} alt="monkey" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}>People born in a year of the Monkey have magnetic
    personalities and are witty and intelligent. Personality traits
    like mischievousness, curiosity, and cleverness make them very naughty.

    Monkeys are masters of practical jokes, because they like playing most of the time.
    Although they don't have bad intentions, their pranks sometimes hurt other people's feelings.
    Monkeys are fast learners and crafty opportunists. They have many
    interests and need partners who are capable of stimulating them.
    While some like the eccentric nature of Monkeys, others don't
    trust their sly, restless, and inquisitive nature.</p>
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

        <Link to="/rat" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rat} alt="rat" />
          <p className='text-3xl ml-4'>Rat</p>
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

export default Monkey
