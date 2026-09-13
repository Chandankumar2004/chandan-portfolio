
import {
  backend,
  creator,
  mobile,
  web,
  project_1,
  project_2,
  project_3,
  project_7,
  project_6,
  project12,
  cadiefyLogo,
  arsaurtechLogo

} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/Romana.png";


export const navLinks = [


  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "freelance",
    title: "Freelance",
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

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Rooman Technologies Pvt. Ltd",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points: [
      "Developed and maintained web applications using Full stack, ensuring high performance and scalability..",
      "Collaborated with cross-functional teams including designers, product managers, and developers to deliver high-quality product features on schedule.",
      "Implemented responsive design principles to ensure optimal user experience across devices and maintained cross-browser compatibility.",
      "Participated in peer code reviews, shared best practices, and provided constructive feedback to maintain high code quality standards..",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Cadiefy - Solar CAD Design Platform",
    icon: cadiefyLogo,
    isRoundIcon: true,
    iconBg: "#7c3aed",
    date: "Freelance Project",
    points: [
      "Designed and developed a modern, responsive business platform for a solar CAD design service provider.",
      "Created dedicated services, industries, portfolio, process, blog, careers, and contact pages.",
      "Built lead-generation flows for quotes, consultations, and quick inquiries, with conversion-focused CTAs and contact forms.",
      "Structured solar CAD service content for residential, commercial, and utility-scale customers, including permit-ready drawings, PV layouts, SLDs, and electrical drafting.",
      "Focused on reusable components, clean navigation, responsive UI/UX, and a professional presentation across devices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AR SAURTECH Energy Pvt. Ltd. - Noida, India",
    icon: arsaurtechLogo,
    iconBg: "#ffffff",
    date: "2026 - Present",
    points: [
      "Building and maintaining production web applications for solar operations, CRM, field tracking, and installation management.",
      "Developed full-stack CRM and solar-management applications with role-based dashboards, workflow automation, and admin controls.",
      "Built REST APIs, authentication, lead processing, and role-based access for business operations and internal teams.",
      "Developed GPS-based field-executive tracking, tracking history, admin maps, reporting, and location-quality validation.",
      "Built installation workflow, payment-status, proof-upload, and completion-verification modules.",
      "Integrated OTP, WhatsApp/webhooks, Google Sheets, and third-party services while improving performance, deployment, and technical SEO.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I used to think creating a website as impressive as the product itself was impossible - until I did it.",
    name: "Pixel Panda",
    designation: "Creative Explorer",
    company: "Codeverse",
    avatar: "\u{1F43C}",
  },
  {
    testimonial:
      "I was amazed at how simple and intuitive the Weather App.Accurate real-time data make it incredibly useful.",
    name: "Nova Fox",
    designation: "Weather Scout",
    company: "Cloud Club",
    avatar: "\u{1F98A}",
  },
  {
    testimonial:
      "You can tell it's built with care and attention to detail - everything just works. & Enjoyable experience.",
    name: "Byte Bot",
    designation: "Digital Builder",
    company: "Robot Labs",
    avatar: "\u{1F916}",
  },
];

const projects = [
  {
    name: "Cadiefy",
    description:
      "Developed a responsive business platform for a solar CAD services company, featuring service pages, portfolio showcases, industry solutions, lead-generation forms, consultation booking, and conversion-focused UI/UX.",
    tags: [
      { name: "freelance", color: "green-text-gradient" },
      { name: "full-stack", color: "blue-text-gradient" },
      { name: "solar-tech", color: "orange-text-gradient" },
    ],
    live_link: "https://www.cadiefy.com/?utm_source=chatgpt.com",
    image: cadiefyLogo,
    imageFit: "contain",
  },
  {
    name: "AR SAURTECH Energy",
    description:
      "Built and maintained production solar operations applications, including CRM workflows, lead processing, role-based dashboards, installation management, GPS field tracking, and customer lead-generation flows.",
    tags: [
      { name: "full-stack", color: "green-text-gradient" },
      { name: "solar-operations", color: "orange-text-gradient" },
      { name: "live-production", color: "blue-text-gradient" },
    ],
    live_link: "https://www.arsaurtechenergy.com/",
    image: arsaurtechLogo,
    imageCircle: true,
    visual: {
      label: "Solar Operations",
      title: "AR SAURTECH",
      subtitle: "Powering smarter solar journeys.",
      className: "bg-[radial-gradient(circle_at_top_right,_#fbbf24,_transparent_40%),linear-gradient(135deg,_#102a20,_#14532d)]",
    },
  },
  {
    name: "Delhi Explorer",
    description:
      "Explore Delhi's landmarks, cuisine, heritage, and markets with an intelligent trip planner that generates personalized itineraries based on travel duration.",
    tags: [
      { name: "ai-integration", color: "green-text-gradient" },
      { name: "responsive-ui", color: "blue-text-gradient" },
      { name: "tourism-platform", color: "orange-text-gradient" },
    ],
    live_link: "https://delhi-tourism.onrender.com/?utm_source=chatgpt.com",
    visual: {
      label: "AI Travel Planner",
      title: "Delhi Explorer",
      subtitle: "Plan a journey through India's capital.",
      className: "bg-[radial-gradient(circle_at_top_right,_#fb923c,_transparent_42%),linear-gradient(135deg,_#3f1d0b,_#7c2d12)]",
    },
  },
  {
    name: "KodJobs",
    description:
      "KodJobs is a responsive job portal app with secure login for job seekers and recruiters. It includes a built-in resume builder and real-time form validation for a smooth user experience.",
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
    live_link: "https://register-magic-gateway.vercel.app/",
  },
  {
    name: "Weather-App",
    description:
      "A responsive weather app that shows real-time weather updates based on user input. It uses an external API to display temperature, conditions, and location details in a simple interface.",
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
    name: "Movie_App",
    description:
      "Login, search movies, view details, manage favorites, try \"Surprise Me!\", switch dark/light mode, enjoy pagination, responsive design, plus contact form and modals - all in a seamless movie browsing experience.",
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
      {
        name: "API_Key",
        color: "blue-text-gradient",
      },
    ],
    image: project12,
    source_code_link: "https://github.com/Chandankumar2004/MovieApi",
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
      "PraRoz is a responsive landing page with a clean layout and smooth scrolling. It includes sections like Home, About, Services, and Contact - perfect for portfolios or business introductions.",
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

export { services, experiences, testimonials, projects };
