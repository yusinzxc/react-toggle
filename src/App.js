import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Components */
import Home from './components/home/main-home'

/* Styles */
import './styles/main.css'
const App = () => {
  return (
    <>
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  )
}

export default App
