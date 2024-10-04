import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0d5061l",
        "template_pzscgya",
        formData,
        "NwVt9dfSrsbQp-nTv"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Thanks for joining!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      })
      .catch((err) => {
        console.error("Failed to send message. Error: ", err);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Section (Form) */}
        <div className="w-full md:w-1/2 px-8 py-8">
          <h2 className="text-xl  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-bold  rounded  transition duration-300 hover:opacity-90 uppercase">
            Get in touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
                id="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
                id="subject"
              >
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-800 text-white font-thin py-2 px-3 rounded-full focus:outline-none focus:shadow-outline "
                type="submit"
              >
                Send Message
              </button>
            </div>
            {status && (
              <p className="text-center text-green-500 mt-4">{status}</p>
            )}
          </form>
        </div>
        {/* Right Section (Contact Info) */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-500 to-black text-white px-8 py-16">
          {" "}
          {/* Changed py-10 to py-16 */}
          <h2 className="text-2xl font-semibold mb-6 ">Contact us</h2>
          <ul>
            <li className="mb-6">
              <span className="font-semibold">Address:</span>{" "}
              <p>Bank Stop Main Ferozepur Road, Lahore</p>
            </li>
            <li className="mb-6">
              <span className="font-semibold">Phone:</span>
              <p>+92 300 8847890</p>
            </li>
            <li className="mb-6">
              <span className="font-semibold">Email:</span>{" "}
              <p>umairmayo607@gmail.com</p>
            </li>
            <li className="mb-6">
              <span className="font-semibold">Website:</span>{" "}
              <p> https://ustore-by-uamir-idrees.netlify.app/</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
