import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
