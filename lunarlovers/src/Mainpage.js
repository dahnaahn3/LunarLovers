import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Data } from './Data';



const Mainpage = () => {
  const [year, setYear] = useState(""); /* setting state of the year */
  const [zodiacData, setZodiacData] = useState(null); /* setting state of the zodiac data */
  const history = useHistory();


  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


const matchingData = Data.find((item) => item.year.includes(parseInt(year, 10)));

    if (matchingData) {
      setZodiacData(matchingData);
      history.push(`/${matchingData.name.toLowerCase()}`)

    } else {
      setZodiacData(null);
    }
  };


  return (

      <div className='text-center pt-5 '>
        <form onSubmit={handleSubmit}>
          <label className="text-3xl " htmlFor="year">Enter your birth year: </label>
          <input
            type="number"
            value={year}
            onChange={handleYear}
            className='border border-black text-black'
            name="year"
            required
          />
          <button type="submit" className="shadow-inner shadow-slate-400 font-bold ml-3 py-1 px-4 rounded-full hover:bg-red-300 hover:border-red-300 hover:text-white">
            Go
          </button>
        </form>

      {zodiacData && (
        <div></div>
      )}

<a href="https://dahnaahn3.github.io/" target="_blank"
      className="hover:underline hover:text-blue-800 text-lg"
      style={{ position: "fixed", bottom: 0, left: 0, right: 0, textAlign: "center",paddingTop: "10px"}} >Dahna Ahn 2023</a>


      </div>

  );
};

export default Mainpage;
