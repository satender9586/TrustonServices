import { StaticImageData } from "next/image";
import ACIMG from "../assests/actechnicial.jpg";
import WASHINGIMG from "../assests/washing.jpg"
import PLUMBIMG from "../assests/plumber.jpg"
import ELECTIMG from "../assests/electrician.jpg"


interface Service {
  itemname: string;
  itemUrl: StaticImageData;
  itemDesc: string;
  path:string
}

export const ServicesItems: Service[] = [
  {
    itemname: "Air Conditioning",
    itemUrl: ACIMG,
    path :"air-condition",
    itemDesc: "Reliable AC installation, repair, and seasonal servicing by certified experts."
  },
  {
    itemname: "Washing Machine",
    itemUrl: WASHINGIMG,
    path :"washing-machine",
    itemDesc: "Professional washing machine repair and maintenance for all major brands."
  },
  {
    itemname: "Plumbing",
    itemUrl: PLUMBIMG,
    path :"plumbing",
    itemDesc: "From leaky taps to pipe fittings — fast and affordable plumbing solutions."
  },
  {
    itemname: "Electrician",
    itemUrl: ELECTIMG,
    path :"electrician",
    itemDesc: "Safe and efficient electrical repairs, fittings, and troubleshooting services."
  },
    {
    itemname: "Salon & Parlor",
    itemUrl: ELECTIMG,
     path :"salon-parlor",
    itemDesc: "Safe and efficient electrical repairs, fittings, and troubleshooting services."
  },
    {
    itemname: "Delivery",
    itemUrl: ELECTIMG,
    path :"delivery",
    itemDesc: "Safe and efficient electrical repairs, fittings, and troubleshooting services."
  }
];
