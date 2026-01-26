import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm/AuthForm.jsx'
import IndiaTrips from './pages/India/IndiaTrips.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/india" element={<IndiaTrips />} />
      </Routes>
    </div>
  )
}

export default App
