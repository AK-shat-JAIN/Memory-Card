import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/rankings" element={<Rankings/>}></Route>
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
