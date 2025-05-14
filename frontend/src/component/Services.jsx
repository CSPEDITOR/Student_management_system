const Services = () => {
  const features = [
    {
      title: "Submit Achievements",
      description: "Easily upload certificates and details of your academic, cultural, or tech-related achievements.",
      icon: "🏆",
    },
    {
      title: "Book Counselling",
      description: "Schedule sessions with faculty or alumni mentors for personal or academic guidance.",
      icon: "📅",
    },
    {
      title: "Track Progress",
      description: "View your activity timeline and monitor growth over semesters.",
      icon: "📈",
    },
    {
      title: "Download Reports",
      description: "Export your profile and activities in PDF format for future use.",
      icon: "📄",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-10">
          What You Can Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
