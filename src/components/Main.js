import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Programs from '../pages/Programs';
import Residents from '../pages/Residents';
import Specials from '../pages/Specials';
import About from '../pages/About';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /Programs or /Residents. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/programs' component={Programs}/>
        <Route path='/residents' component={Residents}/>
        <Route path='/specials' component={Specials}/>
        <Route path='/about' component={About}/>
      </Switch>
    </main>
  )
  
  export default Main