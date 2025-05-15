import React, { useEffect, useState } from "react";
import HomeForm from "./HomeForm";

function WelcomeHome() {
  // const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Demo user data array
  const userData = 
    {
      id: 1,
      name: "Chandra Shekhara Prasad",
      rank:"12",
      email: "chandra@example.com",
      phone: "9876543210",
      college: "IIT Bhubaneswar",
      department: "Computer Science",
    }
  ;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate API delay
        await new Promise((res) => setTimeout(res, 1000));

        // Use the first demo user for display
        setUserData(demoUserData[0]);
      } catch (error) {
        console.error("Error loading demo data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading demo user data...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-screen-lg bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Welcome to the Student Achievement Portal
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Please verify or edit your details below before proceeding.
        </p>

        {userData ? (
          <HomeForm userData={userData} />
        ) : (
          <p className="text-center text-red-500">No user data found</p>
        )}
      </div>
    </div>
  );
}

export default WelcomeHome;
