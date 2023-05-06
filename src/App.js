import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';
import FoodInfo from './components/FoodInfo';
import About from './components/About';
import Recipes from './components/Recipes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FoodInfo />}></Route>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/recipes" element={<Recipes/>}></Route>
    </Routes>

  );
}

export default App;
