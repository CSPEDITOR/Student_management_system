const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Student Portal</h3>
          <p className="text-sm text-gray-100">
            A platform to manage and showcase your academic and professional achievements in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/profile" className="hover:underline">Profile</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Student Handbook</a></li>
            <li><a href="#" className="hover:underline">Feedback</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-sm">Email: support@studentportal.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
          <p className="text-sm">Address: 123 College Rd, Campus City</p>
        </div>
      </div>

      <div className="border-t border-green-500 mt-10 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Student Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
