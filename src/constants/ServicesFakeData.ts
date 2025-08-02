import ACIMG from "../assests/actechnicial.jpg";
import WASHINGIMG from "../assests/washing.jpg"
import PLUMBIMG from "../assests/plumber.jpg"
import ELECTIMG from "../assests/electrician.jpg"
import { Service } from "@/types/landing";



export const ServicesItems: Service[] = [
  {
    itemname: "Air Conditioning",
    itemUrl: ACIMG,
    path: "air-condition",
    itemDesc: "Reliable AC installation, repair, and seasonal servicing by certified experts.",
    categories: [
      {
        name: "Split AC",
        path: "split-ac",
        itemname: "Split Air Conditioner",
        itemUrl: ACIMG,
        itemDesc: "Installation and repair of split AC units.",
        trending : true
      },
      {
        name: "Window AC",
        path: "window-ac",
        itemname: "Window Air Conditioner",
        itemUrl: ACIMG,
        itemDesc: "Efficient service for window AC units.",
         trending : false
      },
      {
        name: "Central AC",
        path: "central-ac",
        itemname: "Central Air Conditioner",
        itemUrl: ACIMG,
        itemDesc: "Complete solutions for central AC systems.",
         trending : false
      },
      {
        name: "Portable AC",
        path: "portable-ac",
        itemname: "Portable Air Conditioner",
        itemUrl: ACIMG,
        itemDesc: "Maintenance for portable AC units.",
         trending : false
      }
    ]
  },
  {
    itemname: "Washing Machine",
    itemUrl: WASHINGIMG,
    path: "washing-machine",
    itemDesc: "Professional washing machine repair and maintenance for all major brands.",
    categories: [
      {
        name: "Front Load",
        path: "front-load",
        itemname: "Front Load Washing Machine",
        itemUrl: WASHINGIMG,
        itemDesc: "Expert repair for front load washing machines.",
         trending : false
      },
      {
        name: "Top Load",
        path: "top-load",
        itemname: "Top Load Washing Machine",
        itemUrl: WASHINGIMG,
        itemDesc: "Maintenance for top load washing machines.",
         trending : false
      },
      {
        name: "Semi Automatic",
        path: "semi-automatic",
        itemname: "Semi Automatic Washing Machine",
        itemUrl: WASHINGIMG,
        itemDesc: "Service for semi-automatic washing machines.",
         trending : false
      },
      {
        name: "Fully Automatic",
        path: "fully-automatic",
        itemname: "Fully Automatic Washing Machine",
        itemUrl: WASHINGIMG,
        itemDesc: "Care and repair for fully automatic washing machines.",
         trending : false
      }
    ]
  },
  {
    itemname: "Plumbing",
    itemUrl: PLUMBIMG,
    path: "plumbing",
    itemDesc: "From leaky taps to pipe fittings — fast and affordable plumbing solutions.",
    categories: [
      {
        name: "Leak Repair",
        path: "leak-repair",
        itemname: "Leak Repair Service",
        itemUrl: PLUMBIMG,
        itemDesc: "Quick and effective repair of water leaks.",
         trending : false
      },
      {
        name: "Pipe Installation",
        path: "pipe-installation",
        itemname: "Pipe Installation Service",
        itemUrl: PLUMBIMG,
        itemDesc: "Professional installation of water and drainage pipes.",
         trending : false
      },
      {
        name: "Bathroom Fittings",
        path: "bathroom-fittings",
        itemname: "Bathroom Fittings Service",
        itemUrl: PLUMBIMG,
        itemDesc: "Expert installation of bathroom fixtures and accessories.",
         trending : false
      }
    ]
  },
  {
    itemname: "Electrician",
    itemUrl: ELECTIMG,
    path: "electrician",
    itemDesc: "Safe and efficient electrical repairs, fittings, and troubleshooting services.",
    categories: [
      {
        name: "Wiring",
        path: "wiring",
        itemname: "Electrical Wiring Service",
        itemUrl: ELECTIMG,
        itemDesc: "Installation and maintenance of safe electrical wiring.",
         trending : false
      },
      {
        name: "Lighting Installation",
        path: "lighting-installation",
        itemname: "Lighting Installation Service",
        itemUrl: ELECTIMG,
        itemDesc: "Professional installation of home and office lighting.",
         trending : false
      },
      {
        name: "Appliance Repair",
        path: "appliance-repair",
        itemname: "Appliance Repair Service",
        itemUrl: ELECTIMG,
        itemDesc: "Troubleshooting and repair of electrical appliances.",
         trending : false
      }
    ]
  },
  {
    itemname: "Salon & Parlor",
    itemUrl: ELECTIMG, // You might want a salon-specific image here
    path: "salon-parlor",
    itemDesc: "Professional salon and beauty services at your doorstep.",
    categories: [
      {
        name: "Haircut",
        path: "haircut",
        itemname: "Haircut Service",
        itemUrl: ELECTIMG,
        itemDesc: "Expert haircuts for men and women.",
         trending : false
      },
      {
        name: "Facial",
        path: "facial",
        itemname: "Facial Service",
        itemUrl: ELECTIMG,
        itemDesc: "Rejuvenating facials for all skin types.",
         trending : false
      },
      {
        name: "Makeup",
        path: "makeup",
        itemname: "Makeup Service",
        itemUrl: ELECTIMG,
        itemDesc: "Professional makeup for events and parties.",
         trending : false
      }
    ]
  },
  {
    itemname: "Delivery",
    itemUrl: ELECTIMG, // You might want a delivery-specific image here
    path: "delivery",
    itemDesc: "Fast and reliable delivery services for packages and groceries.",
    categories: [
      {
        name: "Food Delivery",
        path: "food-delivery",
        itemname: "Food Delivery Service",
        itemUrl: ELECTIMG,
        itemDesc: "Quick delivery of fresh and hot meals.",
         trending : false
      },
      {
        name: "Grocery Delivery",
        path: "grocery-delivery",
        itemname: "Grocery Delivery Service",
        itemUrl: ELECTIMG,
        itemDesc: "Same-day delivery of groceries to your home.",
         trending : false
      },
      {
        name: "Courier Services",
        path: "courier-services",
        itemname: "Courier Service",
        itemUrl: ELECTIMG,
        itemDesc: "Secure and fast courier services for packages.",
         trending : false
      }
    ]
  }
];


  