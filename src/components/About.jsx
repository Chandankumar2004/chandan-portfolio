import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { FaCode, FaDatabase, FaJava, FaLayerGroup, FaPalette, FaServer } from "react-icons/fa6";
import { SiCss3, SiExpress, SiFigma, SiFramer, SiGreensock, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSpringboot, SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      const tween = gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      return () => tween.kill();
    }
    return undefined;
  }, [elementRef, delay]);
};

const serviceSkills = {
  "Full-Stack Developer": ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "Prisma", "PostgreSQL", "Supabase"],
  "Frontend Developer": ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Material UI", "Redux", "GSAP", "Framer Motion", "Three.js"],
  "Backend Developer": ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "JWT Authentication", "Webhooks", "API Integrations", "RBAC"],
  "Ui UX Designer": ["Figma", "Responsive Design", "Design Systems", "User Flows", "Wireframes", "Prototyping", "Accessibility"],
};

const skillIcons = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": FaServer,
  Prisma: FaDatabase,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": FaCode,
  Redux: SiRedux,
  GSAP: SiGreensock,
  "Framer Motion": SiFramer,
  "Three.js": SiThreedotjs,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  "JWT Authentication": FaServer,
  Webhooks: FaServer,
  "API Integrations": FaServer,
  RBAC: FaServer,
  Figma: SiFigma,
  "Responsive Design": FaCode,
  "Design Systems": FaCode,
  "User Flows": FaCode,
  Wireframes: FaCode,
  Prototyping: FaCode,
  Accessibility: FaCode,
};

const serviceIcons = {
  "Full-Stack Developer": FaLayerGroup,
  "Frontend Developer": SiReact,
  "Backend Developer": FaServer,
  "Ui UX Designer": FaPalette,
};

const ServiceCard = ({ index, title, isActive, onClick }) => {
  const cardRef = useRef(null);
  const ServiceIcon = serviceIcons[title] || FaCode;
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <button type="button" onClick={onClick} aria-expanded={isActive} className="xs:w-[250px] w-full text-left">
      <div ref={cardRef} className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition duration-300 hover:-translate-y-2 ${isActive ? "scale-[1.03] shadow-[0_20px_55px_rgba(145,94,255,0.35)]" : ""}`}>
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white shadow-[0_12px_26px_rgba(124,58,237,0.38)]"><ServiceIcon size={29} /></span>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <span className="text-sm text-[#c4b5fd]">View skills ↓</span>
        </div>
      </div>
    </button>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const detailsRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I’m a full-stack developer focused on building fast, reliable web applications. At AR SAURTECH Energy, I work on solar CRM, field tracking, and installation workflows. I also create client platforms such as Cadiefy and AI-powered web experiences that turn complex ideas into simple, useful products.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} isActive={selectedService === service.title} onClick={() => setSelectedService(selectedService === service.title ? null : service.title)} />
        ))}
      </div>

      <div ref={detailsRef} className="mx-auto mt-8 max-w-5xl">
        <AnimatePresence mode="wait">
          {selectedService && (
            <motion.div
              key={selectedService}
              layout
              initial={{ opacity: 0, y: -16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -16, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => {
                if (selectedService) scrollToDetails();
              }}
              className="overflow-hidden rounded-2xl border border-violet-400/35 bg-black-100/80"
            >
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c4b5fd]">{selectedService}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Related skills</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {serviceSkills[selectedService].map((skill, index) => {
                    const SkillIcon = skillIcons[skill] || FaCode;
                    return <motion.span key={skill} initial={{ opacity: 0, y: 12, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: index * 0.05, duration: 0.28 }} className="flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-3 py-1.5 text-sm text-[#e6e0ff]"><SkillIcon className="text-[#c4b5fd]" size={15} />{skill}</motion.span>;
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
