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

      <div className='text-center'>
        <form onSubmit={handleSubmit}>
          <label className="text-3xl" htmlFor="year">Enter your birth year: </label>
          <input
            type="number"
            value={year}
            onChange={handleYear}
            className='border border-black text-black'
            name="year"
            required
          />
          <button type="submit" className="border border-black font-bold ml-3 py-1 px-4 rounded-full">
            Go
          </button>
        </form>

      {zodiacData && (
        <div></div>
      )}

      </div>

  );
};

export default Mainpage;
