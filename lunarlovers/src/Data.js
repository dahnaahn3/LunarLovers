import Rat from "./components/Rat"
import Ox from "./components/Ox"
import Tiger from "./components/Tiger"
import Rabbit from "./components/Rabbit"
import Dragon from "./components/Dragon"
import Snake from "./components/Snake"
import Horse from "./components/Horse"
import Sheep from "./components/Sheep"
import Monkey from "./components/Monkey"
import Rooster from "./components/Rooster"
import Dog from "./components/Dog"
import Pig from "./components/Pig"

const generateYears = (startYear, numberOfYears, increment) => {
    const years = [];
    for (let i = 0; i <= numberOfYears; i++) {
      years.push(startYear + i * increment);
    }
    return years;
  };



export const Data = [
    {
      name: "rat",
      year: generateYears(1900, 1000, 12),
      description: "year of the rat",
      page: <Rat />,
    },
    {
        name:"ox",
        year: generateYears(1901, 1000, 12),
        description:"year of the ox",
        page: <Ox />,
    },
    {
        name: "tiger",
        year: generateYears(1902, 1000, 12),
        description: "year of the tiger",
        page: <Tiger />,
    },
    {
        name: "rabbit",
        year: generateYears(1903, 1000, 12),
        description: "year of the rabbit",
        page: <Rabbit />,
    },
    {
        name: "dragon",
        year: generateYears(1904, 1000, 12),
        description: "year of the dragon",
        page: <Dragon />,
    },
    {
        name: "snake",
        year: generateYears(1905, 1000, 12),
        description: "year of the snake",
        page: <Snake />,
    },
    {
        name: "horse",
        year: generateYears(1906, 1000, 12),
        description: "year of the horse",
        page: <Horse />,
    },
    {
        name:"sheep",
        year: generateYears(1907, 1000, 12),
        description: "year of the sheep",
        page: <Sheep />,
    },
    {
        name: "monkey",
        year: generateYears(1908, 1000, 12),
        description: "year of the monkey",
        page: <Monkey />,
    },
    {
        name: "rooster",
        year: generateYears(1909, 1000, 12),
        description: "year of the rooster",
        page: <Rooster />,
    },
    {
        name: "dog",
        year: generateYears(1910, 1000, 12),
        description: "year of the dog",
        page: <Dog />,
    },
    {
        name: "pig",
        year: generateYears(1911, 1000, 12),
        description: "year of the pig",
        page: <Pig />,
    },




]
