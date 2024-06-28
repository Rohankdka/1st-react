import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Learning from './learningComponent'
import Heading from './Headingcomponent'
// import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/navbar' element = {<Navbar/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/learning' element ={<Learning/>}/>
        <Route path='/heading' element ={<Heading/>}/>
        {/* <Route path='/card' element ={<Card/>}/> */}
        
        </Routes></BrowserRouter>
   </>
  )
}

export default App
