import { StaticImageData } from "next/image";
import ACIMG from "../assests/ac.png";

interface Service {
  itemname: string;
  itemUrl: StaticImageData;
  itemDesc: string;
}

export const ServicesItems: Service[] = [
  {
    itemname: "Air Conditioning",
    itemUrl: ACIMG,
    itemDesc: "AC installation, servicing, and repair."
  },
  {
    itemname: "Home Cleaning",
    itemUrl: ACIMG,
    itemDesc: "Deep cleaning services for your home."
  },
  {
    itemname: "Plumbing",
    itemUrl: ACIMG,
    itemDesc: "Expert plumbing services for leaks and repairs."
  },
  {
    itemname: "Home Cleaning",
    itemUrl: ACIMG,
    itemDesc: "Deep cleaning services for your home."
  },
  {
    itemname: "Plumbing",
    itemUrl: ACIMG,
    itemDesc: "Expert plumbing services for leaks and repairs."
  }
];
