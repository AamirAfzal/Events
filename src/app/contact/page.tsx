import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10 px-6">
      <div className="container max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Have any questions? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section: Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="text-blue-600 text-lg mr-3" />
                <span>123 Main Street, City, Country</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="text-blue-600 text-lg mr-3" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="text-blue-600 text-lg mr-3" />
                <span>info@yourcompany.com</span>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Send a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.9559283153159!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C+VIC%2C+Australia!5e0!3m2!1sen!2sus!4v1603064694417!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
