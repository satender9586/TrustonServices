import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import HeaderLogo from "../../assests/headerImg.png";
import {
  FaUsers,
  FaHandshake,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Ravi Sharma",
    role: "Electrician",
    experience: "5+ years",
    desc: "Expert in electrical wiring, inverter installation, and safety checks.",
    img: "/images/aboutservice.jpg",
    contact: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      phone: "tel:+919876543210",
    },
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    img: "/images/aboutservice.jpg",
    contact: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      phone: "tel:+919812345678",
    },
  },
];

type HighlightProps = {
  icon: React.ReactNode;
  text: string;
};
const Highlight = ({ icon, text }: HighlightProps) => (
  <div className="flex items-center space-x-3 bg-[#fff7fa] p-5  rounded-lg shadow-md">
    <div className="text-[#AF0D5A] text-xl">{icon}</div>
    <span className="text-gray-700 font-serif  font-medium">{text}</span>
  </div>
);

const About = () => {
  return (
    <Layout>
      <section className="bg-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-serif font-semibold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
                About Us<br />
                <span className="text-[50px] font-bold text-[#111828]">
                  TrustOn<span className="text-[#AF0D5A]">Services</span>
                </span>
              </h1>
              <p className="text-gray-700  font-serif text-lg mb-4 leading-relaxed">
                Based in NCR, <strong>TrustOnServices</strong> is your trusted
                home service partner. From appliance repair to deep cleaning, we
                deliver reliable and affordable solutions — all just a click
                away.
              </p>
              <p className="text-gray-600 font-serif  mb-6 text-md">
                We've served <strong>1,000+ happy clients</strong> across Delhi,
                Noida & Gurugram with our 50+ trained professionals. Your
                comfort and safety are our top priority.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Highlight icon={<FaUsers />} text="1,000+ Clients" />
                <Highlight icon={<FaHandshake />} text="5+ Years Experience" />
                <Highlight icon={<FaStar />} text="4.9★ Average Rating" />
                <Highlight icon={<FaClock />} text="30-Min Fast Response" />
              </div>
              <div className="bg-[#fdf3f7] border-l-4 border-[#AF0D5A] p-5 rounded-xl shadow-sm">
                <h3 className="text-xl font-serif  text-[#AF0D5A] mb-2">
                  Why Choose TrustOnServices?
                </h3>
                <ul className="list-disc list-inside text-gray-700 font-serif  space-y-1">
                  <li>✅ Affordable pricing across NCR</li>
                  <li>✅ 24/7 customer support</li>
                  <li>✅ Verified & skilled experts</li>
                  <li>✅ Easy online booking & tracking</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 ">
              <div className="w-full  overflow-hidden rounded-xl ">
                <Image
                  src={HeaderLogo}
                  alt="TrustOnServices"
                  className="object-contain w-full h-full  "
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF0F5]">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold font-serif  text-[#AF0D5A] mb-6">
            Meet Our Founder
          </h2>
          <Image
            src="/images/aboutservice.jpg"
            alt="Rahul Verma"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-[#AF0D5A] shadow-lg object-cover"
          />
          <h3 className="text-2xl font-serif  text-gray-800 mt-4">
            Rahul Verma
          </h3>
          <p className="text-gray-600 font-serif  text-sm">
            Founder & CEO, TrustOnServices
          </p>
          <p className="mt-4 font-serif  text-gray-700 text-md leading-relaxed">
            With over 6 years of experience in the home service industry, Rahul
            has built a platform you can rely on — from plumbing to grooming, he
            ensures service quality and trust come first.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-2">
            Our Expert Team
          </h2>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-gray-600 text-base sm:text-lg">
              Meet the passionate professionals who bring dedication, skill, and excellence to every project.
              Our team is committed to delivering outstanding service .
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-gray-100 rounded-[24px] shadow-md hover:shadow-lg hover:-translate-y-2 hover:border-[#AF0D5A] transition-all duration-300  dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"
              >
                <Image
                  src={HeaderLogo}
                  alt={member.name}
                  priority
                  className="w-full h-45 rounded-xl object-cover mb-2"
                />
                <h3 className="text-xl font-serif text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm font-sans text-[#AF0D5A] mb-2">
                  {member.role}
                </p>
                <p className="text-sm font-sans text-gray-600">
                  {member.experience} Experience
                </p>
                <p className="text-gray-700 font-sans text-sm mt-2 leading-snug">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 text-center ">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-2">
            We Proudly Serve
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10">
            Bringing top-quality services to your doorstep with professionalism
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Delhi",
              "Noida",
              "Gurugram",
              "Faridabad",
              "Ghaziabad",
              "Greater Noida",
            ].map((city, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white border border-[#AF0D5A] px-6 py-3 rounded-full shadow-sm hover:bg-[#AF0D5A] hover:text-white transition-all duration-300 text-[#AF0D5A] font-medium"
              >
                <FaMapMarkerAlt className="text-lg" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
