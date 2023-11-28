import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tour", text: "tour" },
];

export  const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const servicesInfo = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    heading: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    heading: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    heading: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure ",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    price: 2100,
  },

  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java ",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    price: "from $1400",
  },

  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    price: "$5000",
  },

  {
    id: 1,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: 20,
    price: 3300,
  },
];