import React from 'react'
import HomeForm from './HomeForm'

function Home() {
   
  const dummyUserData = {
    jeeAppNo: "JEE20250123",
    dob: "2003-01-14",
    rank: "1123",
    phone: "9876543210",
    email: "user@example.com",
  };

  return (
    <div>
      <HomeForm  userData={dummyUserData} />
    </div>
  )
}

export default Home
