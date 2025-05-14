import React from "react";
import HomeForm from "./HomeForm";

function WelcomeHome() {
  const dummyUserData = {
    jeeAppNo: "JEE20250123",
    dob: "2003-01-14",
    rank: "1123",
    phone: "9876543210",
    email: "user@example.com",
  };

  return (
    <div className="min-h-screen w-full bg-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-screen-lg bg-green-50 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Welcome to the Student Achievement Portal
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Please verify or edit your details below before proceeding.
        </p>

        {/* Pass the dummy data to HomeForm */}
        <HomeForm userData={dummyUserData} />
      </div>
    </div>
  );
}

export default WelcomeHome;
