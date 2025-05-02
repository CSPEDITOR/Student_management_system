import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    jeeAppNo: "",
    dob: "",
    rank: "",
    phone: "",
    email: "",
    password: "",
  });

  const [profileImg, setProfileImg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, profileImg });
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-1/2 mx-auto mt-16 p-8 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        User Info Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5 text-start">
        {/* Profile Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border border-green-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {profileImg && (
            <img
              src={profileImg}
              alt="Profile Preview"
              className="mt-4 w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow"
            />
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            JEE Application Number
          </label>
          <input
            type="text"
            name="jeeAppNo"
            value={formData.jeeAppNo}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Rank</label>
          <input
            type="number"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
