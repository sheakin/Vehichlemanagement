import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Customer from './pages/Customer'
import Service from './pages/Service'
import './bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </>
  )
}

export default App
