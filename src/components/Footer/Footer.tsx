import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We bring you the best events and experiences. Join us to explore
              and have fun.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
