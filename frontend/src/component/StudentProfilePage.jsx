import { useState } from "react";

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
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIruIHt-pWsYeV9tjeDLlDn4tPKYywuAI64aUdMrXV3AebuZA7gC1ve8&usqp=CAE&s"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-green-500 shadow-md"
          />

          <div className="w-full">
            <h2 className="text-3xl font-bold text-green-700 mb-2">{userData.name}</h2>
            <p className="text-gray-700"><strong>JEE App No:</strong> {userData.jeeAppNo}</p>
            <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
            <p className="text-gray-700"><strong>Date of Birth:</strong> {userData.dob}</p>
            <p className="text-gray-700"><strong>Rank:</strong> {userData.rank}</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Student Activity</h3>
          <p className="mb-2 text-gray-800"><strong>Activity Type:</strong> {activityType}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {Object.entries(activityDetails).map(([key, value]) => (
              <div key={key} className="bg-green-100 rounded-md p-4 shadow-sm">
                <p className="text-gray-700 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-green-900">{value || "—"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;
