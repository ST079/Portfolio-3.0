// pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      
    >
      <motion.h1
        className="text-3xl font-bold mb-8 font-mono border-b-2 border-blue-500 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        $ contact-me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-mono mb-6 text-blue-400">
            // Get in Touch
          </h2>

          <div
            className={`p-6 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            } space-y-4`}
          >
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p>Bhaktapur, Nepal</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-blue-500 mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>suzanyba079@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-blue-500 mt-1 mr-3" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+977 9762447050</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-mono mb-6 text-blue-400">
            // Send a Message
          </h2>

          {submitted ? (
            <motion.div
              className={`p-4 rounded-lg bg-red-500 text-white`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              {/* Thank you! Your message has been sent. */}
              Sorry Service Unavailable ! Comming Soon
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded ${
                    darkMode ? "bg-gray-600" : "bg-white"
                  } border border-gray-500`}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded ${
                    darkMode ? "bg-gray-600" : "bg-white"
                  } border border-gray-500`}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full p-3 rounded ${
                    darkMode ? "bg-gray-600" : "bg-white"
                  } border border-gray-500`}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
