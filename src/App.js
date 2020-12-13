import React from 'react'
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App =() =>{
  return (
    <div>
      <Navigation />
      <Home />
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
