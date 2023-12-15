import React from 'react';
import s from '../images/snake.png'
import ox from '../images/ox.png'
import rooster from '../images/rooster.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Snake = () => {
  return (
  <div className='mb-10 animate__animated animate__fadeIn  mt-5 py-5 border border-yellow-400 mx-auto w-3/4 lg:w-1/2 xl:w-1/3 bg-yellow-200 rounded-lg shadow-lg'>
    <div className='flex flex-col items-center'>
        <p>Year of the </p>
        <div className='flex items-center'>
        <Link to="/snake" className='text-6xl font-bold mr-2'>SNAKE</Link>
        <motion.img
        whileHover={{ scale: 1.2, rotate: 360}}
        style={{height: "60px"}} src={s} alt="snake" />
    </div>
    <p className='px-8 py-5'
    style={{textAlign: "center"}}
    >People born in a year of the Snake are usually calm observers with excellent intuition,
      as serene as snakes, and generally demonstrate intelligence, wisdom, and creativity.
      Snake is usually regarded as a dark, insidious, sly and ruthless being.
      Both in western countries and China, there are many legend stories about the animal.
       And most of the time, it is labeled with a dark image.
       Actually, the animal is also the symbol of wisdom.
       People born in the Year of the Snake according to Chinese zodiac are
       usually well-educated, decent, smart and humorous. </p>
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

        <Link to="/rooster" className='flex flex-col ml-5'>
          <motion.img
          whileHover={{ scale: 1.1 }}
          style={{height: "80px", width: "80px"}} src={rooster} alt="rooster" />
          <p className='text-3xl'>Rooster</p>
        </Link>
    </div>
  </div>

    </div>
  );
};

export default Snake;
