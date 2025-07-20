
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  // project2,
  // project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  ankush,
  bhumi,
  annu,
  romanLogo,
  java_icons,
  project_1,
  project_2,
  project_3,
  project_7,
  project_6,
  project_5

} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/Romana.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: java_icons,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Rooman Technologies Pvt. Ltd",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Sep 2024 – Feb 2025",
    points: [
      "Developed and maintained web applications using Full stack, ensuring high performance and scalability..",
      "Collaborated with cross-functional teams including designers, product managers, and developers to deliver high-quality product features on schedule.",
      "Implemented responsive design principles to ensure optimal user experience across devices and maintained cross-browser compatibility.",
      "Participated in peer code reviews, shared best practices, and provided constructive feedback to maintain high code quality standards..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I used to think creating a website as impressive as the product itself was impossible—until I did it.",
    name: "Ankush Kumar",
    designation: "Web",
    company: "KodJobs", // Assuming you want to keep this testimonial object
    image: ankush,
  },
  {
    testimonial:
      "I was amazed at how simple and intuitive the Weather App.Accurate real-time data make it incredibly useful.",
    name: "Manasa",
    designation: "Weather",
    company: "Weather-App",
    image: bhumi,
  },
  {
    testimonial:
      "You can tell it’s built with care and attention to detail—everything just works. & Enjoyable experience.",
    name: "Annapurneshwari",
    designation: "Weather",
    company: "Weather-App",
    image: annu,
  },
];

const projects = [
  {
    name: "KodJobs",
    description:
      "KodJobs is a responsive job portal app with secure login for job seekers and recruiters. It includes a built-in resume builder and real-time form validation for a smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Lovable(AI)",
        color: "blue-text-gradient",
      },
      // {
      //   name: "node",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
 
    ],
    image: project_1,
    source_code_link: "https://github.com/Chandankumar2004/register-magic-gateway",
  },
  {
    name: "Weather-App",
    description:
      "A responsive weather app that shows real-time weather updates based on user input. It uses an external API to display temperature, conditions, and location details in a simple interface.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: project_2,
    source_code_link: "https://github.com/Chandankumar2004/Weather_App",
  },
  {
    name: "EMS",
    description:
      "This Java Swing-based Employee Management System supports adding, viewing, searching, updating, and deleting employee records with MySQL database integration.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "blue-text-gradient",
      },
    ],
    image: project_7,
    source_code_link: "https://github.com/Chandankumar2004/EMS",
  },
  {
    name: "Spotify UI Clone",
    description:
      "A clean and responsive Spotify UI Clone built with HTML, CSS. This project replicates the visual aesthetics of Spotify's desktop web interface and demonstrates strong UI/UX design skills.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      // {
      //   name: "JavaScript",
      //   color: "blue-text-gradient",
      // },
    ],
    image: project_5,
    source_code_link: "https://github.com/Chandankumar2004/SpotifyUIClone",
  },
  {
    name: "Amazon Clone(UI)",
    description:
      "This project is a simple Amazon clone built using HTML and CSS. It replicates the basic UI of the Amazon homepage, including a navigation bar, search functionality, product categories.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      // {
      //   name: "JavaScript",
      //   color: "blue-text-gradient",
      // },
    ],
    image: project_6,
    source_code_link: "https://github.com/Chandankumar2004/Amazon_UI_clon",
  },
  {
    name: "Pra-Roz",
    description:
      "PraRoz is a responsive landing page with a clean layout and smooth scrolling. It includes sections like Home, About, Services, and Contact—perfect for portfolios or business introductions.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: project_3,
    source_code_link: "https://github.com/Chandankumar2004/PraRoz",
  },
];

export { services, technologies, experiences, testimonials, projects };
