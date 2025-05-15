import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 for navigation

function HomeForm({ userData }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [dynamicData, setDynamicData] = useState({});
  const navigate = useNavigate(); // 👈 React Router hook

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setDynamicData({});
  };

  const handleDynamicInput = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };

  const handleDynamicSubmit = (e) => {
    e.preventDefault();

    const entry = {
      userData,
      activityType: selectedOption,
      details: dynamicData,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem("lastSubmission", JSON.stringify(entry)); // 👈 overwrite the last form
    alert("Details submitted and stored successfully!");

    // Navigate to profile page
    navigate("/profile"); // 👈 your route path
  };

  const options = [
    "Conference/workshop/seminar",
    "Internship",
    "Award/Achievement",
    "GATE/UGCNET/CAT/SET",
    "Online Course",
    "Placement (Online/Office)",
    "Higher Study",
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Welcome, {userData.name || "User"}!
        </h1>

        <div className="mb-6">
          <p><strong>Rank:</strong> {userData.rank}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Select Activity Type</label>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">-- Select an Option --</option>
            {options.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {selectedOption && (
          <form onSubmit={handleDynamicSubmit} className="space-y-4">
            {/* Similar conditional inputs as your original code */}
            {/* ... Same conditional input JSX ... */}
            {/* For brevity, not repeating here */}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              onClick={ () => navigate("/student/view")}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Input component same as before
const Input = ({ label, name, onChange, type = "text", optional = false, placeholder = "" }) => (
  <div>
    <label className="block text-gray-700 mb-1">
      {label} {optional && <span className="text-sm text-gray-500">(Optional)</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

export default HomeForm;
