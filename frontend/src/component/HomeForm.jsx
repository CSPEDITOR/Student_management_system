import { useState } from "react";

function HomeForm({ userData }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [dynamicData, setDynamicData] = useState({});

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setDynamicData({});
  };

  const handleDynamicInput = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };

  const handleDynamicSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Info:", selectedOption, dynamicData);
    alert("Details submitted successfully!");
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
          Welcome, {userData?.jeeAppNo || "User"}!
        </h1>

        <div className="mb-6">
          <p><strong>Rank:</strong> {userData.rank}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Select Activity Type
          </label>
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
            {(selectedOption === "Conference/workshop/seminar") && (
              <>
                <Input label="From" name="from" type="date" onChange={handleDynamicInput} />
                <Input label="To" name="to" type="date" onChange={handleDynamicInput} />
                <Input label="Place" name="place" onChange={handleDynamicInput} />
                <Input label="Title" name="title" onChange={handleDynamicInput} />
                <Input label="Publication of paper (if any)" name="publication" onChange={handleDynamicInput} optional />
              </>
            )}

            {(selectedOption === "Internship") && (
              <>
                <Input label="From" name="from" type="date" onChange={handleDynamicInput} />
                <Input label="To" name="to" type="date" onChange={handleDynamicInput} />
                <Input label="Company Name" name="company" onChange={handleDynamicInput} />
                <Input label="Theme Name" name="theme" onChange={handleDynamicInput} />
              </>
            )}

            {(selectedOption === "Award/Achievement") && (
              <>
                <Input label="Title" name="title" onChange={handleDynamicInput} />
                <Input label="Date" name="date" type="date" onChange={handleDynamicInput} />
                <Input label="Description" name="description" onChange={handleDynamicInput} />
              </>
            )}

            {(selectedOption === "GATE/UGCNET/CAT/SET") && (
              <>
                <Input label="Exam Name" name="exam" onChange={handleDynamicInput} />
                <Input label="Score/Rank" name="score" onChange={handleDynamicInput} />
                <Input label="Year" name="year" onChange={handleDynamicInput} />
              </>
            )}

            {(selectedOption === "Online Course") && (
              <>
                <Input label="Course Name" name="course" onChange={handleDynamicInput} />
                <Input label="Platform" name="platform" onChange={handleDynamicInput} />
                <Input label="Completion Date" name="date" type="date" onChange={handleDynamicInput} />
              </>
            )}

            {(selectedOption === "Placement (Online/Office)") && (
              <>
                <Input label="Company Name" name="company" onChange={handleDynamicInput} />
                <Input label="Mode" name="mode" placeholder="Online / Office" onChange={handleDynamicInput} />
                <Input label="Joining Date" name="joiningDate" type="date" onChange={handleDynamicInput} />
              </>
            )}

            {(selectedOption === "Higher Study") && (
              <>
                <Input label="Institution" name="institution" onChange={handleDynamicInput} />
                <Input label="Course" name="course" onChange={handleDynamicInput} />
                <Input label="Start Date" name="startDate" type="date" onChange={handleDynamicInput} />
              </>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Reusable input component
const Input = ({ label, name, onChange, type = "text", optional = false, placeholder = "" }) => (
  <div>
    <label className="block text-gray-700 mb-1">{label}{optional && " (Optional)"}</label>
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
