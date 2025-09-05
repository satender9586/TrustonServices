
import { WhyChooseUsItem,CompanyLovesItem } from "@/types/landing";
import lgImg from "../assests/lg.png"
import { FaUserTie, FaClock, FaHandshake, FaRupeeSign, FaTools, FaAward } from "react-icons/fa";

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    icon: FaUserTie,
    title: "Expert Technicians",
    desc: "Certified professionals with deep technical expertise."
  },  
  {
    icon: FaAward,
    title: "5+ Years of Experience",
    desc: "Trusted by thousands across Delhi NCR since 2019."
  },
  {
    icon: FaClock,
    title: "Quick Response Time",
    desc: "Fast and on-time service. Always right at your doorstep."
  },
  {
    icon: FaHandshake,
    title: "Customer-Centric Approach",
    desc: "We prioritize your satisfaction in every service we provide."
  },
  {
    icon: FaRupeeSign,
    title: "Affordable Pricing",
    desc: "High-quality service without breaking your budget."
  },
  {
    icon: FaTools,
    title: "Complete Home Solutions",
    desc: "One-stop repair services for ACs, washing machines, and more."
  }
];
  

export const companiesLovesData: CompanyLovesItem[] = [
  {
    imgs :lgImg,
    title :"Samsung"
  },
  {
    imgs :lgImg,
    title :"Godrej"
  },
  {
    imgs :lgImg,
    title :"Panasonic"
  },
  {
    imgs :lgImg,
    title :"LG"
  },
  {
    imgs :lgImg,
    title :"Daikin"
  },
  {
    imgs :lgImg,
    title :"Wirepool"
  },
]