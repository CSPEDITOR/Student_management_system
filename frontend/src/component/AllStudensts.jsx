import React, { useEffect, useState } from "react";

// 👇 30 Default Mock Students
const defaultStudents = [
  {
    _id: "1",
    name: "Aryan Mehta",
    email: "aryan.mehta@example.com",
    phone: "9876543201",
    rank: 123,
  },
  {
    _id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "9876543202",
    rank: 456,
  },
  {
    _id: "3",
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    phone: "9876543203",
    rank: 872,
  },
  {
    _id: "4",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    phone: "9876543204",
    rank: 312,
  },
  {
    _id: "5",
    name: "Aman Singh",
    email: "aman.singh@example.com",
    phone: "9876543205",
    rank: 174,
  },
  {
    _id: "6",
    name: "Riya Joshi",
    email: "riya.joshi@example.com",
    phone: "9876543206",
    rank: 951,
  },
  {
    _id: "7",
    name: "Aditya Chauhan",
    email: "aditya.chauhan@example.com",
    phone: "9876543207",
    rank: 664,
  },
  {
    _id: "8",
    name: "Simran Kaur",
    email: "simran.kaur@example.com",
    phone: "9876543208",
    rank: 217,
  },
  {
    _id: "9",
    name: "Karan Patel",
    email: "karan.patel@example.com",
    phone: "9876543209",
    rank: 333,
  },
  {
    _id: "10",
    name: "Anjali Nair",
    email: "anjali.nair@example.com",
    phone: "9876543210",
    rank: 540,
  },
  {
    _id: "11",
    name: "Vikas Reddy",
    email: "vikas.reddy@example.com",
    phone: "9876543211",
    rank: 620,
  },
  {
    _id: "12",
    name: "Neha Sinha",
    email: "neha.sinha@example.com",
    phone: "9876543212",
    rank: 198,
  },
  {
    _id: "13",
    name: "Manish Das",
    email: "manish.das@example.com",
    phone: "9876543213",
    rank: 407,
  },
  {
    _id: "14",
    name: "Ishita Roy",
    email: "ishita.roy@example.com",
    phone: "9876543214",
    rank: 157,
  },
  {
    _id: "15",
    name: "Rohit Malhotra",
    email: "rohit.malhotra@example.com",
    phone: "9876543215",
    rank: 101,
  },
  {
    _id: "16",
    name: "Divya Agarwal",
    email: "divya.agarwal@example.com",
    phone: "9876543216",
    rank: 309,
  },
  {
    _id: "17",
    name: "Nikhil Bansal",
    email: "nikhil.bansal@example.com",
    phone: "9876543217",
    rank: 845,
  },
  {
    _id: "18",
    name: "Tanya Mishra",
    email: "tanya.mishra@example.com",
    phone: "9876543218",
    rank: 409,
  },
  {
    _id: "19",
    name: "Siddharth Jain",
    email: "siddharth.jain@example.com",
    phone: "9876543219",
    rank: 267,
  },
  {
    _id: "20",
    name: "Kritika Yadav",
    email: "kritika.yadav@example.com",
    phone: "9876543220",
    rank: 712,
  },
  {
    _id: "21",
    name: "Abhinav Tyagi",
    email: "abhinav.tyagi@example.com",
    phone: "9876543221",
    rank: 385,
  },
  {
    _id: "22",
    name: "Megha Saxena",
    email: "megha.saxena@example.com",
    phone: "9876543222",
    rank: 143,
  },
  {
    _id: "23",
    name: "Devansh Tiwari",
    email: "devansh.tiwari@example.com",
    phone: "9876543223",
    rank: 250,
  },
  {
    _id: "24",
    name: "Aisha Khan",
    email: "aisha.khan@example.com",
    phone: "9876543224",
    rank: 460,
  },
  {
    _id: "25",
    name: "Rajeev Anand",
    email: "rajeev.anand@example.com",
    phone: "9876543225",
    rank: 586,
  },
  {
    _id: "26",
    name: "Swati Bhatt",
    email: "swati.bhatt@example.com",
    phone: "9876543226",
    rank: 337,
  },
  {
    _id: "27",
    name: "Uday Kumar",
    email: "uday.kumar@example.com",
    phone: "9876543227",
    rank: 918,
  },
  {
    _id: "28",
    name: "Lavanya Deshmukh",
    email: "lavanya.deshmukh@example.com",
    phone: "9876543228",
    rank: 124,
  },
  {
    _id: "29",
    name: "Parth Goyal",
    email: "parth.goyal@example.com",
    phone: "9876543229",
    rank: 650,
  },
  {
    _id: "30",
    name: "Sanya Arora",
    email: "sanya.arora@example.com",
    phone: "9876543230",
    rank: 295,
  },
];


function AllStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useDefault, setUseDefault] = useState(false); // 👈 Use this flag to toggle mock data

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/api/users/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
        setUseDefault(true); // 👈 Switch to mock data if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading students...</div>;
  }

  const displayedStudents = useDefault ? defaultStudents : students;

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          All Registered Students
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedStudents.map((student) => (
            <div
              key={student._id}
              className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
            >
              <h2 className="text-xl font-semibold text-green-800">
                {student.name}
              </h2>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> {student.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {student.phone}
              </p>
              <p className="text-gray-700">
                <strong>Rank:</strong> {student.rank}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllStudents;
