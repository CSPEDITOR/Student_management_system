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

    // Generate a unique key for the activity
    const activityKey = `activity_${Date.now()}`;
    localStorage.setItem(activityKey, JSON.stringify(entry));
    
    alert("Details submitted and stored successfully!");
    navigate("/student/view");
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

  const renderDynamicFields = () => {
    switch (selectedOption) {
      case "Award/Achievement":
        return (
          <>
            <Input
              label="Award Name"
              name="awardName"
              onChange={handleDynamicInput}
              placeholder="Enter award name"
            />
            <Input
              label="Issuing Organization"
              name="issuingOrganization"
              onChange={handleDynamicInput}
              placeholder="Enter organization name"
            />
            <Input
              label="Date Received"
              name="dateReceived"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Description"
              name="description"
              onChange={handleDynamicInput}
              placeholder="Enter award description"
            />
            <Input
              label="Certificate Link"
              name="certificateLink"
              onChange={handleDynamicInput}
              placeholder="Enter certificate URL"
              optional={true}
            />
          </>
        );

      case "Conference/workshop/seminar":
        return (
          <>
            <Input
              label="Event Name"
              name="eventName"
              onChange={handleDynamicInput}
              placeholder="Enter event name"
            />
            <Input
              label="Organizing Institute"
              name="organizingInstitute"
              onChange={handleDynamicInput}
              placeholder="Enter organizing institute"
            />
            <Input
              label="Date"
              name="date"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Duration"
              name="duration"
              onChange={handleDynamicInput}
              placeholder="e.g., 3 days"
            />
            <Input
              label="Certificate Link"
              name="certificateLink"
              onChange={handleDynamicInput}
              placeholder="Enter certificate URL"
              optional={true}
            />
          </>
        );

      case "Internship":
        return (
          <>
            <Input
              label="Company/Organization"
              name="company"
              onChange={handleDynamicInput}
              placeholder="Enter company name"
            />
            <Input
              label="Position"
              name="position"
              onChange={handleDynamicInput}
              placeholder="Enter your position"
            />
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="End Date"
              name="endDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Stipend"
              name="stipend"
              onChange={handleDynamicInput}
              placeholder="Enter stipend amount"
              optional={true}
            />
            <Input
              label="Certificate Link"
              name="certificateLink"
              onChange={handleDynamicInput}
              placeholder="Enter certificate URL"
              optional={true}
            />
          </>
        );

      case "GATE/UGCNET/CAT/SET":
        return (
          <>
            <Input
              label="Exam Name"
              name="examName"
              onChange={handleDynamicInput}
              placeholder="Enter exam name"
            />
            <Input
              label="Score"
              name="score"
              onChange={handleDynamicInput}
              placeholder="Enter your score"
            />
            <Input
              label="Rank"
              name="rank"
              onChange={handleDynamicInput}
              placeholder="Enter your rank"
            />
            <Input
              label="Year"
              name="year"
              type="number"
              onChange={handleDynamicInput}
              placeholder="Enter exam year"
            />
            <Input
              label="Score Card Link"
              name="scoreCardLink"
              onChange={handleDynamicInput}
              placeholder="Enter score card URL"
              optional={true}
            />
          </>
        );

      case "Online Course":
        return (
          <>
            <Input
              label="Course Name"
              name="courseName"
              onChange={handleDynamicInput}
              placeholder="Enter course name"
            />
            <Input
              label="Platform"
              name="platform"
              onChange={handleDynamicInput}
              placeholder="e.g., Coursera, Udemy"
            />
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Completion Date"
              name="completionDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Certificate Link"
              name="certificateLink"
              onChange={handleDynamicInput}
              placeholder="Enter certificate URL"
              optional={true}
            />
          </>
        );

      case "Placement (Online/Office)":
        return (
          <>
            <Input
              label="Company Name"
              name="companyName"
              onChange={handleDynamicInput}
              placeholder="Enter company name"
            />
            <Input
              label="Position"
              name="position"
              onChange={handleDynamicInput}
              placeholder="Enter your position"
            />
            <Input
              label="Package"
              name="package"
              onChange={handleDynamicInput}
              placeholder="Enter package details"
            />
            <Input
              label="Location"
              name="location"
              onChange={handleDynamicInput}
              placeholder="Enter job location"
            />
            <Input
              label="Joining Date"
              name="joiningDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Offer Letter Link"
              name="offerLetterLink"
              onChange={handleDynamicInput}
              placeholder="Enter offer letter URL"
              optional={true}
            />
          </>
        );

      case "Higher Study":
        return (
          <>
            <Input
              label="University/College"
              name="university"
              onChange={handleDynamicInput}
              placeholder="Enter university name"
            />
            <Input
              label="Program"
              name="program"
              onChange={handleDynamicInput}
              placeholder="Enter program name"
            />
            <Input
              label="Specialization"
              name="specialization"
              onChange={handleDynamicInput}
              placeholder="Enter specialization"
            />
            <Input
              label="Start Date"
              name="startDate"
              type="date"
              onChange={handleDynamicInput}
            />
            <Input
              label="Duration"
              name="duration"
              onChange={handleDynamicInput}
              placeholder="e.g., 2 years"
            />
            <Input
              label="Admission Letter Link"
              name="admissionLetterLink"
              onChange={handleDynamicInput}
              placeholder="Enter admission letter URL"
              optional={true}
            />
          </>
        );

      default:
        return null;
    }
  };

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
            {renderDynamicFields()}
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
