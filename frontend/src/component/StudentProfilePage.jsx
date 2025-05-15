import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaUser, FaGraduationCap, FaAward, FaBriefcase } from "react-icons/fa";

function StudentProfilePage() {
  const [data, setData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch("http://localhost:8080/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const user = await res.json();
        setData({ userData: user });
      } catch (e) {
        console.error("Error fetching profile:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchActivities = () => {
      try {
        const allActivities = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('activity_')) {
            try {
              const activity = JSON.parse(localStorage.getItem(key));
              allActivities.push(activity);
            } catch (e) {
              console.error('Error parsing activity:', e);
            }
          }
        }
        allActivities.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
        setActivities(allActivities);
      } catch (e) {
        console.error('Error fetching activities:', e);
      }
    };

    fetchProfile();
    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-xl font-semibold">Error loading profile</p>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-xl">No profile data found</p>
          <p className="mt-2">Please make sure you are logged in</p>
        </div>
      </div>
    );
  }

  const { userData } = data;

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "—";
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return "—";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "Conference/workshop/seminar":
        return <FaGraduationCap className="text-2xl text-green-500" />;
      case "Internship":
        return <FaBriefcase className="text-2xl text-green-500" />;
      case "Award/Achievement":
        return <FaAward className="text-2xl text-green-500" />;
      default:
        return <FaGraduationCap className="text-2xl text-green-500" />;
    }
  };

  const formatValue = (key, value) => {
    if (key.toLowerCase().includes('date')) {
      return formatDate(value);
    }
    return value || "—";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Student Details Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Student Details</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={userData.profileImg ? `http://localhost:8080/uploads/${userData.profileImg}` : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg object-cover"
            />

            <div className="w-full">
              <h2 className="text-4xl font-bold text-green-700 mb-4">{userData.name || userData.email?.split('@')[0]}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-green-500" />
                  <p className="text-gray-700"><strong>JEE App No:</strong> {userData.jeeAppNo || "Not provided"}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-green-500" />
                  <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-green-500" />
                  <p className="text-gray-700"><strong>Phone:</strong> {userData.phone || "Not provided"}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-green-500" />
                  <p className="text-gray-700"><strong>DOB:</strong> {formatDate(userData.dob) || "Not provided"}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaAward className="text-green-500" />
                  <p className="text-gray-700"><strong>Rank:</strong> {userData.rank || "Not provided"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Student Activities</h3>
          
          {activities.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No activities found.</p>
          ) : (
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center gap-3 mb-4">
                    {getActivityIcon(activity.activityType)}
                    <h4 className="text-xl font-semibold text-green-700">{activity.activityType}</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(activity.details).map(([key, value]) => (
                      <div 
                        key={key} 
                        className="bg-green-50 p-4 rounded-lg"
                      >
                        <p className="text-gray-700 font-medium capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-green-900 font-semibold">
                          {formatValue(key, value)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    <p>Submitted on: {formatDate(activity.submittedAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;
