import './App.css';
import Mainpage from './Mainpage';
import moon from './images/moon.gif'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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


function App() {
  return (
    <Router>
    <div>
      <div className='flex bg-red-100 justify-center border border-pink mx-auto w-3/4 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg my-4'>
      <img style={{height: "60px"}}src={moon} alt="moon" />
      <a href="/" className='p-5 text-4xl'>Welcome to Lunar Lovers</a>
      </div>
      <Mainpage />
    </div>
    <Switch>
        <Route path="/snake" component={Snake} />
        <Route path="/ox" component={Ox} />
        <Route path="/dog" component={Dog} />
        <Route path="/dragon" component={Dragon} />
        <Route path="/horse" component={Horse} />
        <Route path="/monkey" component={Monkey} />
        <Route path="/pig" component={Pig} />
        <Route path="/rabbit" component={Rabbit} />
        <Route path="/rat" component={Rat} />
        <Route path="/rooster" component={Rooster} />
        <Route path="/sheep" component={Sheep} />
        <Route path="/tiger" component={Tiger} />
</Switch>
    </Router>
  );
}

export default App;