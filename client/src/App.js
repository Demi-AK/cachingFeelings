import React from 'react'
import Container from './components/landingpage/LandingPage'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/landingpage/LoginForm'
import SignupForm from './components/landingpage/SignupForm'
import { SignUpProvider } from './context/SignUpContext'
import { AboveNavigationBar, NavigationBar, TryContent } from './components/homepage/try/TryPage'
import { ConfigForm } from './components/homepage/user.config/userconfig'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpProvider><SignupForm /></SignUpProvider>} />
      <Route path="/try" element={<><AboveNavigationBar /><NavigationBar /><TryContent /></>} />
      <Route path="/userconfig" element={<><AboveNavigationBar /><NavigationBar /><ConfigForm /></>} />
    </Routes>
  ); 
}

export default App;