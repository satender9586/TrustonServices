import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="relative py-20 bg-gradient-to-br from-[#ffffff] via-[#fff8fb] to-[#fef2f8] overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -top-10 -left-16 w-40 h-40 bg-pink-200 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute -bottom-10 -right-16 w-56 h-56 bg-[#AF0D5A] rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-6xl mx-auto px-4 pt-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent drop-shadow-sm mb-3">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              We’d love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to help you anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#AF0D5A] text-white px-6 py-3 rounded-lg hover:bg-[#93104d] transition duration-300 w-full font-medium shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 space-y-6">
              <div className="flex items-center gap-4">
                <CiPhone className="text-3xl text-[#AF0D5A]" />
                <span className="text-gray-700 text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <CiMail className="text-3xl text-[#AF0D5A]" />
                <span className="text-gray-700 text-lg">info@yourdomain.com</span>
              </div>
              <div className="flex items-center gap-4">
                <CiLocationOn className="text-3xl text-[#AF0D5A]" />
                <span className="text-gray-700 text-lg">New Delhi, India</span>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
                <iframe
                  title="location"
                  src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-60"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
