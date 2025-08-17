import ACIMG from "../assests/actechnicial.jpg";
import WASHINGIMG from "../assests/washing.jpg";
import PLUMBIMG from "../assests/plumber.jpg";
import ELECTIMG from "../assests/electrician.jpg";
import { Service } from "@/types/landing";
import acBanner from "../assests/ac-banner.jpg"

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

];

export const servicesIdData: Record<string, any> = {
  "air-condition": {
    title: "Air Conditioner Repair & Service",
    description:
      "Professional doorstep services for Split & Window ACs — maintenance, installation, gas filling, and more.",
    image: acBanner,
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
  },

  "washing-machine": {
    title: "Washing Machine Repair & Service",
    description:
      "Expert repair and maintenance for top-load, front-load, and semi-automatic washing machines.",
    image: WASHINGIMG,
    categories: [
      {
        type: "Front Load",
        services: [
          {
            name: "General Service (Front Load)",
            price: "₹499",
            features: [
              "Drum cleaning & filter check",
              "Check motor & belt",
              "Test wash cycle"
            ],
            img: WASHINGIMG
          },
          {
            name: "Installation (Front Load)",
            price: "₹899",
            features: [
              "Level machine",
              "Connect inlet & drain pipes",
              "Test run"
            ],
            img: WASHINGIMG
          },
          {
            name: "Uninstallation (Front Load)",
            price: "₹699",
            features: [
              "Disconnect pipes & wiring",
              "Drain water",
              "Pack for relocation"
            ],
            img: WASHINGIMG
          }
        ]
      },
      {
        type: "Top Load",
        services: [
          {
            name: "General Service (Top Load)",
            price: "₹399",
            features: [
              "Clean drum & filters",
              "Check inlet valve & motor",
              "Test spin cycle"
            ],
            img: WASHINGIMG
          },
          {
            name: "Installation (Top Load)",
            price: "₹799",
            features: [
              "Level & secure machine",
              "Connect water inlet",
              "Test wash cycle"
            ],
            img: WASHINGIMG
          }
        ]
      }
    ]
  },

  "plumbing": {
    title: "Plumbing Services",
    description:
      "Reliable plumbing repairs and installations — taps, pipes, fittings, and more.",
    image: PLUMBIMG,
    categories: [
      {
        type: "Repairs",
        services: [
          {
            name: "Leaky Tap Repair",
            price: "₹249",
            features: [
              "Fix tap leakage",
              "Replace washers if needed",
              "Check water flow"
            ],
            img: PLUMBIMG
          },
          {
            name: "Pipe Leakage Repair",
            price: "₹399",
            features: [
              "Locate leakage",
              "Seal or replace damaged section",
              "Test water pressure"
            ],
            img: PLUMBIMG
          }
        ]
      },
      {
        type: "Installations",
        services: [
          {
            name: "New Tap Installation",
            price: "₹199",
            features: [
              "Install tap at desired location",
              "Connect to water supply",
              "Check for leaks"
            ],
            img: PLUMBIMG
          },
          {
            name: "Water Filter Installation",
            price: "₹499",
            features: [
              "Install wall-mounted filter",
              "Connect inlet/outlet pipes",
              "Test water flow"
            ],
            img: PLUMBIMG
          }
        ]
      }
    ]
  },

  "electrician": {
    title: "Electrician Services",
    description:
      "Expert electrician services for wiring, installations, repairs, and safety checks.",
    image: ELECTIMG, 
    categories: [
      {
        type: "Repairs",
        services: [
          {
            name: "Switch/Socket Repair",
            price: "₹199",
            features: [
              "Repair or replace faulty switches",
              "Check wiring connections",
              "Ensure safe operation"
            ],
            img: ELECTIMG
          },
          {
            name: "Fan Repair",
            price: "₹299",
            features: [
              "Fix ceiling/pedestal fan issues",
              "Check capacitor & motor",
              "Ensure smooth operation"
            ],
            img: ELECTIMG
          }
        ]
      },
      {
        type: "Installations",
        services: [
          {
            name: "New Switchboard Installation",
            price: "₹499",
            features: [
              "Install modern switchboard",
              "Proper wiring & connections",
              "Safety checks included"
            ],
            img: ELECTIMG
          },
          {
            name: "Ceiling Fan Installation",
            price: "₹399",
            features: [
              "Mount ceiling fan securely",
              "Connect wiring",
              "Balance blades & test"
            ],
            img: ELECTIMG
          },
          {
            name: "Tube Light/LED Installation",
            price: "₹199",
            features: [
              "Install LED/tube lights",
              "Connect wiring",
              "Check proper lighting"
            ],
            img: ELECTIMG
          }
        ]
      }
    ]
  }
};

