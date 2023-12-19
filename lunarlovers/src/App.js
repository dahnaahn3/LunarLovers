import './App.css';
import Mainpage from './Mainpage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Snake from './components/Snake.js';
import Dog from './components/Dog.js';
import Dragon from './components/Dragon.js';
import Horse from './components/Horse.js';
import Monkey from './components/Monkey.js';
import Ox from './components/Ox.js';
import Pig from './components/Pig.js';
import Rabbit from './components/Rabbit.js';
import Rat from './components/Rat.js';
import Rooster from './components/Rooster.js';
import Sheep from './components/Sheep.js';
import Tiger from './components/Tiger.js';
import Homepage from './components/Homepage.js';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isDesktopOrLaptop = useMediaQuery ({
    query: '(min-width: 601px)'
  })
  const isMobile = useMediaQuery ({
    query: '(max-width: 600px)'
  })

  return (
    <Router>
    {isDesktopOrLaptop && <div>
      <div className='flex bg-red-100 justify-center border border-pink mx-auto w-3/4 lg:w-1/2 xl:w-1/3 shadow-slate-400 rounded-lg shadow-lg my-4'>
      <Link to="/LunarLovers" className='p-5 text-4xl'>⋆⁺₊⋆ ☁︎ Lunar Lovers ⋆⁺₊⋆ ☾ </Link>
      </div>
      <Mainpage />
    </div> }
      {isMobile &&
      <div>
        <div className='flex bg-red-100 justify-center border border-pink mx-2 rounded-lg shadow-slate-400 shadow-lg my-4'>
        <Link to="/LunarLovers" className='p-5 text-3xl'>⋆⁺₊⋆ ☁︎ Lunar Lovers ⋆⁺₊⋆ ☾ </Link>
        </div>
        <Mainpage />
      </div>
      }

    <Switch>
      <Route exact path="/LunarLovers" component={Homepage} />
        <Route exact path="/snake" component={Snake} />
        <Route exact path="/ox" component={Ox} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/dragon" component={Dragon} />
        <Route exact path="/horse" component={Horse} />
        <Route exact path="/monkey" component={Monkey} />
        <Route exact path="/pig" component={Pig} />
        <Route exact path="/rabbit" component={Rabbit} />
        <Route exact path="/rat" component={Rat} />
        <Route exact path="/rooster" component={Rooster} />
        <Route exact path="/sheep" component={Sheep} />
        <Route exact path="/tiger" component={Tiger} />
</Switch>

    </Router>
  );
}

export default App;
