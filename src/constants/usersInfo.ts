import birjeshpic from "../assests/users/brijesh.jpeg"
import sourabpic from "../assests/users/sourab.jpeg"

import { StaticImageData } from "next/image";
interface OwnerInfo {
  name: string;
  desc: string;
  extrDesc: string;
  profile :StaticImageData
}

export const ownerInfo : OwnerInfo= {
    name :"Brijesh Kumar",
    desc :"Founder , TrustOnServices",
    extrDesc :"With over 6 years of experience in the home service industry, Brijesh has built a platform you can rely on — from plumbing to grooming, he ensures service quality and trust come first.",
    profile : birjeshpic
}


interface TeamMembersInfo {
  name: string;
  desc: string;
  experience: string;
  profile :StaticImageData,
  role:string
}

export const teamMembers : TeamMembersInfo []= [
  {
    name: "Ravi Sharma",
    role: "Electrician",
    experience: "5+ years",
    desc: "Expert in electrical wiring, inverter installation, and safety checks.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
  {
    name: "Pooja Verma",
    role: "Salon Expert",
    experience: "4+ years",
    desc: "Professional in bridal makeup, hair styling, and home salon services.",
    profile: sourabpic,
   
  },
];