import { GrUserManager } from "react-icons/gr";
import { WhyChooseUsItem,CompanyLovesItem } from "@/types/landing";
import lgImg from "../assests/lg.png"
import panasonicImg from "../assests/panasonic.png"
import daikinImg from "../assests/daikin.png"
import godrejImg from "../assests/godrej.png"
import wirepoolImg from "../assests/wirepool.png"
import samasung from "../assests/samsung.png"



export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    icon: GrUserManager,
    title: "Expert Technicians",
    desc: "Certified professionals with deep technical expertise."
  },
  {
    icon: GrUserManager,
    title: "5+ Years of Experience",
    desc: "Trusted by thousands across Delhi NCR since 2019."
  },
  {
    icon: GrUserManager,
    title: "Quick Response Time",
    desc: "Fast and on-time service right at your doorstep."
  },
  {
    icon: GrUserManager,
    title: "Customer-Centric Approach",
    desc: "We prioritize your satisfaction in every service we provide."
  },
  {
    icon: GrUserManager,
    title: "Affordable Pricing",
    desc: "High-quality service without breaking your budget."
  },
  {
    icon: GrUserManager,
    title: "Complete Home Solutions",
    desc: "One-stop repair services for ACs, washing machines, and more."
  }
];

export const companiesLovesData: CompanyLovesItem[] = [
  {
    imgs :samasung,
    title :"Samsung"
  },
  {
    imgs :godrejImg,
    title :"Godrej"
  },
  {
    imgs :panasonicImg,
    title :"Panasonic"
  },
  {
    imgs :lgImg,
    title :"LG"
  },
  {
    imgs :daikinImg,
    title :"Daikin"
  },
  {
    imgs :wirepoolImg,
    title :"Wirepool"
  },
]