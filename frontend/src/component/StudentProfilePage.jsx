import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaUser } from "react-icons/fa";

function StudentProfilePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("lastSubmission");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <div className="p-10 text-center text-gray-600">No data found.</div>;

  const { userData, activityType, details } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg"
          />

          <div className="w-full">
            <h2 className="text-4xl font-bold text-green-700 mb-4">{userData.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-green-500" />
                <p className="text-gray-700"><strong>JEE App No:</strong> {userData.jeeAppNo || "JEE202500321"}</p>
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
                <p className="text-gray-700"><strong>DOB:</strong> {userData.dob || "03-03-2001"}</p>
              </div>
              <p><strong>Rank:</strong> {userData.rank}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Student Activity</h3>
          <p className="mb-4 text-gray-800"><strong>Activity Type:</strong> {activityType}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
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
