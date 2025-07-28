import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-center text-[#AF0D5A] mb-3 mt-4">
            Contact Us
          </h2>
         

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            We'd love to hear from you! Whether you have a question about
            services, pricing, or anything else, our team is ready to help.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#AF0D5A]"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#AF0D5A] text-white px-6 py-3 rounded-md hover:bg-[#93104d] transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
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

              <iframe
                title="location"
                src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-60 rounded-md border"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
