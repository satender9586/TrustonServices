import BrijeshImg from "../assests/users/BrijeshImg.jpeg"
import AyushImg from "../assests/users/aysh.jpeg"
import sourabTechImg from "../assests/users/sourabTech.jpeg"
import NakulImg from "../assests/users/nakul.jpeg"
import {OwnerInfo,TeamMembersInfo} from "../types/landing"


export const ownerInfo : OwnerInfo= {
    name :"Sourab Kumar",
    desc :"Founder , TrustOnServices",
    extrDesc :"With over 6 years of experience in the home service industry, Brijesh has built a platform you can rely on — from plumbing to grooming, he ensures service quality and trust come first.",
    profile : sourabTechImg
}


export const teamMembers: TeamMembersInfo[] = [
  {
    name: "Brijesh Kumar",
    role: "Senior AC Technician",
    experience: "4+ years",
    desc: "Expert in AC repair, installation, electrical wiring, and safety checks.",
    profile: BrijeshImg,
  },
  {
    name: "Ayush Beniwal",
    role: "AC & Fridge Technician",
    experience: "1+ years",
    desc: "Specialist in AC servicing, fridge repair, cooling system troubleshooting, and maintenance.",
    profile: AyushImg,
  },
  {
    name: "Sourab Kumar",
    role: "Senior RAC Technician",
    experience: "4+ years",
    desc: "Experienced in residential air conditioning (RAC) systems, installation, and advanced fault diagnosis.",
    profile: sourabTechImg,
  },
  {
    name: "Nakul Kumar",
    role: "Junior AC Technician",
    experience: "1+ years",
    desc: "Assists in AC installation, routine maintenance, and basic electrical repairs.",
    profile: NakulImg,
  },
];
