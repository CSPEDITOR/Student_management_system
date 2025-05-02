import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './component/UserForm'
import Login from './component/Login'
import Home from './component/Home'

function App() {
 
  const dummyUserData = {
    jeeAppNo: "JEE20250123",
    dob: "2003-01-14",
    rank: "1123",
    phone: "9876543210",
    email: "user@example.com",
  };

  return (
    <>
  <Home userData={dummyUserData}/>
    </>
  
    // <div className="min-h-screen bg-green-50 flex items-center justify-center">
    // <Login/>
    // <UserForm/>
    // </div>
    
  );
}

export default App
