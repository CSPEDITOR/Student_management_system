import Footer from "./share/Footer";
import Navbar from "./share/Navbar";
import About from "./About";
import ContactUs from "./Contactus";
import { Link } from "react-router-dom";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 px-6 bg-green-50 min-h-screen" id="home">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-green-700 leading-snug mb-6">
              Welcome to the <br /> Student Achievement Portal
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Seamlessly manage and showcase your academic & extracurricular
              milestones.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Conferences, internships, awards, exams — track it all in one
              place and shape your future with confidence.
            </p>
            <Link
              to="/student/"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition duration-300 shadow-md inline-block"
            >
              Go With →
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/image/student1.png"
              alt="Student Portal Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
      <Services />

      {/* About Section */}
      <About />

      <ContactUs />

      <Footer />
    </>
  );
};

export default Home;
