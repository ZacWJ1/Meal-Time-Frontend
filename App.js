import React from "react";
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import Homepage from './components/Homepage'
import Mealpage from './components/Mealpage'
import Newmealpage from './components/Newmealpage'
import Loginpage from './components/Loginpage'
import Registerpage from './components/Registerpage'
import NavBar from './components/NavBar'



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element ={<Homepage/>} />
        <Route path='/meals/new' element ={<Newmealpage/>} />
        <Route path='/meals/:id' element ={<Mealpage/>} />
        <Route path='/register' element ={<Registerpage/>} />
        <Route path='/login' element ={<Loginpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
