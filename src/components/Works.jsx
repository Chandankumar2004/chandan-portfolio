import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = React.memo(({
  name,
  description,
  tags,
  image,
  imageFit,
  imageCircle,
  visual,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative flex h-full w-full max-w-[360px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151030]/90 p-3 shadow-[0_14px_38px_rgba(0,0,0,0.24)]"
      style={{ transformPerspective: 1100 }}
    >
      <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
      <div className="relative w-full h-[220px] overflow-hidden rounded-2xl">
        {image ? (
          imageCircle ? (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_#fef3c7,_#172554_68%)] p-6">
              <img src={image} alt={`${name} logo`} loading="lazy" decoding="async" className="h-36 w-36 rounded-full border-4 border-white/90 bg-white object-contain p-2 shadow-[0_14px_35px_rgba(0,0,0,0.35)]" />
            </div>
          ) : (
            <img
              src={image}
              alt={`${name} project preview`}
              loading="lazy"
              decoding="async"
              className={`h-full w-full ${imageFit === "contain" ? "bg-white object-contain p-5" : "object-cover object-left"}`}
            />
          )
        ) : (
          <div className={`flex h-full w-full flex-col justify-between p-6 ${visual?.className || "bg-[radial-gradient(circle_at_top_right,_#38bdf8,_transparent_42%),linear-gradient(135deg,_#0f172a,_#1e3a8a)]"}`}>
            <span className="w-fit rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">{visual?.label || "Solar CAD"}</span>
            <div>
              <p className="text-4xl font-black tracking-tight text-white">{visual?.title || "Cadiefy"}</p>
              <p className="mt-1 text-sm text-cyan-100">{visual?.subtitle || "Designing the future of solar."}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090325]/80 via-transparent to-transparent" />
        {(source_code_link || live_link) && <a
          href={live_link || source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={live_link ? `Visit ${name} live website` : `Open ${name} source code on GitHub`}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#090325]/80 backdrop-blur-sm transition hover:scale-110 hover:border-violet-300 hover:bg-violet-500/30"
        >
          {live_link ? <FaArrowUpRightFromSquare className="text-white" size={15} /> : (
            <img
              src={github}
              alt="source code"
              className="h-1/2 w-1/2 object-contain"
            />
          )}
        </a>}
        <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">Featured project</span>
      </div>

      <div className="px-2 pb-3 pt-5">
        <h3 className="text-[22px] font-bold text-white">{name}</h3>
        <p className="mt-2 min-h-[66px] text-sm leading-6 text-secondary">{description}</p>
      </div>

      <div className="flex min-h-[66px] flex-wrap content-start gap-2 px-2 pb-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
      {live_link && <a href={live_link} target="_blank" rel="noopener noreferrer" className="mx-2 mb-2 mt-auto flex items-center justify-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20">Live Website <FaArrowUpRightFromSquare size={13} /></a>}
    </motion.article>
  );
});

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".works-container",
          start: "top 80%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        These projects highlight my skills and experience through practical, real-world applications. Each one includes a brief description, along with links to the source code and live demos. They demonstrate my capability to tackle complex challenges, work across various technologies, and manage projects efficiently.
        </p>
      </div>

      <div className="works-container mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 sm:mt-16">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
