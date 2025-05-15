import React, { useEffect, useState } from "react";
import HomeForm from "./HomeForm";

function WelcomeHome() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading user data...</div>;

  return (
    <div className="min-h-screen w-full bg-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-screen-lg bg-green-50 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Welcome to the Student Achievement Portal
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Please verify or edit your details below before proceeding.
        </p>

        {/* Pass fetched data to HomeForm */}
        {userData ? <HomeForm userData={userData} /> : <p>No user data found</p>}
      </div>
    </div>
  );
}

export default WelcomeHome;
