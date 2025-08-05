import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#ffffff] via-[#fff8fb] to-[#fef2f8] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative">
            <h1 className="text-2xl sm:text-4xl font-serif font-semibold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent mb-2 sm:mb-3 tracking-wide drop-shadow-sm">
             Contact Us
            </h1>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#111828] mb-4 sm:mb-5 leading-tight">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h2>
            <p className="text-gray-700 font-serif text-sm leading-relaxed px-2 sm:hidden">
               We’d love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to help you anytime.
            </p>

         
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
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
                <span className="text-gray-700 text-lg">
                  info@yourdomain.com
                </span>
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
