import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaUser } from "react-icons/fa"; // Icons for the page

function StudentProfilePage() {
  const [userData] = useState({
    jeeAppNo: "JEE20250123",
    dob: "2003-01-14",
    rank: "1123",
    phone: "9876543210",
    email: "user@example.com",
    name: "Chandra Prasad",
  });

  const [activityType] = useState("Conference/workshop/seminar");

  const [activityDetails] = useState({
    from: "2025-06-01",
    to: "2025-06-05",
    place: "IIT Delhi",
    title: "AI in Education",
    publication: "Journal of EdTech, 2025",
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIruIHt-pWsYeV9tjeDLlDn4tPKYywuAI64aUdMrXV3AebuZA7gC1ve8&usqp=CAE&s"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg"
          />

          <div className="w-full">
            <h2 className="text-4xl font-bold text-green-700 mb-4">{userData.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-green-500" />
                <p className="text-gray-700"><strong>JEE App No:</strong> {userData.jeeAppNo}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-green-500" />
                <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-green-500" />
                <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-green-500" />
                <p className="text-gray-700"><strong>Date of Birth:</strong> {userData.dob}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-700"><strong>Rank:</strong> {userData.rank}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Student Activity</h3>
          <p className="mb-4 text-gray-800"><strong>Activity Type:</strong> {activityType}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(activityDetails).map(([key, value]) => (
              <div key={key} className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-green-900">{value || "—"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-end space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 transition">
            Download Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;
