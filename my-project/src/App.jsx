import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  )
}

export default App
