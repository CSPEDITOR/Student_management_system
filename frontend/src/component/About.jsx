const About = () => (
  <>
    
    <section className="bg-white py-20" id="about">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
    <div className="lg:w-1/2">
      <img
        src="/image/education.png"
        alt="About Illustration"
        className="w-full max-w-lg mx-auto"
      />
    </div>
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
        About This Portal
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        This portal empowers students to submit and manage their personal achievements and professional experiences.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
        <li>Academic Achievements</li>
        <li>Internship Experiences</li>
        <li>Conference Attendances</li>
        <li>Awards & Certifications</li>
        <li>Competitive Exam Results</li>
        <li>Placement Records</li>
      </ul>
      <p className="text-gray-700">
        Our aim is to support career planning, mentorship, and create a digital portfolio that helps students stand out.
      </p>
    </div>
  </div>
</section>

  </>
);

export default About;