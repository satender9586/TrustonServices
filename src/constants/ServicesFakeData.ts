import ACIMG from "../assests/actechnicial.jpg";
import WASHINGIMG from "../assests/washing.jpg";
import PLUMBIMG from "../assests/plumber.jpg";
import ELECTIMG from "../assests/electrician.jpg";
import { Service } from "@/types/landing";

export const ServicesItems: Service[] = [
  {
    itemname: "Air Conditioning",
    itemUrl: ACIMG,
    path: "air-condition",
    trending: true,
    itemDesc:
      "Reliable AC installation, repair, and seasonal servicing by certified experts.",
   
  },
  {
    itemname: "Washing Machine",
    itemUrl: WASHINGIMG,
    path: "washing-machine",
    trending: false,
    itemDesc:
      "Professional washing machine repair and maintenance for all major brands.",
 
  },
  {
    itemname: "Plumbing",
    itemUrl: PLUMBIMG,
    path: "plumbing",
    trending: false,
    itemDesc:
      "From leaky taps to pipe fittings — fast and affordable plumbing solutions.",
  
  },
  {
    itemname: "Electrician",
    itemUrl: ELECTIMG,
    path: "electrician",
    trending: false,
    itemDesc:
      "Safe and efficient electrical repairs, fittings, and troubleshooting services.",
  
  },
  {
    itemname: "Salon & Parlor",
    itemUrl: ELECTIMG,
    path: "salon-parlor",
    trending: false,
    itemDesc: "Professional salon and beauty services at your doorstep.",

  },
  {
    itemname: "Delivery",
    itemUrl: ELECTIMG,
    path: "delivery",
    trending: false,
    itemDesc: "Fast and reliable delivery services for packages and groceries.",
   
  },
];

export const servicesIdData: Record<string, any> = {
  "air-condition": {
    title: "Air Conditioner Repair & Service",
    description:
      "Professional doorstep services for Split & Window ACs — maintenance, installation, gas filling, and more.",
    image: WASHINGIMG,
    categories: [
      {
        type: "Split AC",
        services: [
          {
            name: "Power Jet Service (Split AC)",
            price: "₹699",
            features: [
              "Improves AC cooling performance",
              "Check power supply, gas pressure, cooling",
              "Complete cleaning with water jet, filter, blower, coil etc."
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Gas Refill (Split AC)",
            price: "₹1,499",
            features: [
              "Includes gas leak check",
              "Vacuuming before refill",
              "Test cooling after service"
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Installation (Split AC)",
            price: "₹1,799",
            features: [
              "Mount indoor unit",
              "Install outdoor compressor",
              "Pipe fitting and wiring"
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Uninstallation (Split AC)",
            price: "₹999",
            features: [
              "Safely remove indoor & outdoor units",
              "Disconnect gas pipes",
              "Pack for relocation"
            ],
            img: PLUMBIMG
          }
        ]
      },
      {
        type: "Window AC",
        services: [
          {
            name: "Power Jet Service (Window AC)",
            price: "₹599",
            features: [
              "Improves AC cooling performance",
              "Check power supply, gas pressure, cooling",
              "Complete cleaning with water jet, filter, blower, coil etc."
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Gas Refill (Window AC)",
            price: "₹1,299",
            features: [
              "Leakage check",
              "Vacuum before filling",
              "Test cooling after refill"
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Installation (Window AC)",
            price: "₹899",
            features: [
              "Secure fit into window",
              "Check electrical connections",
              "Test cooling"
            ],
            img: PLUMBIMG
          },
          {
            name: "AC Uninstallation (Window AC)",
            price: "₹699",
            features: [
              "Safe removal from window",
              "Disconnect wiring",
              "Pack for transport"
            ],
            img: PLUMBIMG
          }
        ]
      },
      {
        type: "Cassette AC",
        services: [
          {
            name: "Cassette AC Servicing",
            price: "₹1,199",
            features: [
              "Clean filters and vents",
              "Check cooling efficiency",
              "Gas pressure check"
            ],
            img: PLUMBIMG
          },
          {
            name: "Cassette AC Gas Refill",
            price: "₹2,499",
            features: [
              "Leak check",
              "Gas refill with vacuuming",
              "Test cooling"
            ],
            img: PLUMBIMG
          }
        ]
      }
    ]
  }
};

