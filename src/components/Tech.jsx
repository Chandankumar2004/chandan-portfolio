import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaChevronDown, FaCode, FaDatabase, FaJava, FaServer } from "react-icons/fa6";
import {
  SiAmazonwebservices, SiCss3, SiExpress, SiExpo, SiFigma, SiFramer, SiGithub,
  SiGit, SiGreensock, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs,
  SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiRedux, SiRender, SiSpringboot,
  SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript, SiVercel,
} from "react-icons/si";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    accent: "from-fuchsia-500 to-violet-500",
    skills: [
      ["HTML5", SiHtml5], ["CSS3", SiCss3], ["JavaScript", SiJavascript], ["TypeScript", SiTypescript], ["React.js", SiReact], ["Next.js", SiNextdotjs], ["Tailwind CSS", SiTailwindcss], ["Redux", SiRedux], ["GSAP", SiGreensock], ["Framer Motion", SiFramer], ["Three.js", SiThreedotjs],
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    accent: "from-violet-500 to-blue-500",
    skills: [
      ["Node.js", SiNodedotjs], ["Express.js", SiExpress], ["Next.js API", SiNextdotjs], ["Java", FaJava], ["Spring Boot", SiSpringboot], ["REST APIs", FaServer], ["JWT Authentication", FaServer], ["Webhooks", FaServer], ["API Integrations", FaServer], ["React Native", SiReact], ["Expo", SiExpo],
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    accent: "from-cyan-500 to-emerald-500",
    skills: [
      ["MySQL", SiMysql], ["PostgreSQL", SiPostgresql], ["Supabase", SiSupabase], ["MongoDB", SiMongodb], ["SQL", FaDatabase], ["Prisma ORM", SiPrisma], ["JDBC", FaJava], ["Git", SiGit], ["GitHub", SiGithub], ["Figma", SiFigma], ["Vercel", SiVercel], ["Render", SiRender], ["AWS", SiAmazonwebservices],
    ],
  },
];

const SkillCard = ({ group, isOpen, onToggle }) => {
  const cardRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 16 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 16 });
  const { title, icon: Icon, accent, skills } = group;

  const handlePointerMove = (event) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="skill-card-stage" ref={cardRef} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
      <motion.article
        layout
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        whileHover={{ scale: 1.02, z: 18 }}
        className={`relative overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-violet-400/70 bg-[#17132d] shadow-[0_24px_55px_rgba(91,33,182,0.35)]" : "border-white/10 bg-black-100/70 hover:border-violet-400/45"}`}
      >
        <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative z-10 flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
        >
          <motion.span
            animate={{ y: isOpen ? [0, -5, 0] : 0, rotate: isOpen ? [0, 5, -5, 0] : 0 }}
            transition={{ repeat: isOpen ? Infinity : 0, duration: 2.4, ease: "easeInOut" }}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-[0_10px_22px_rgba(76,29,149,0.42)]`}
          >
            <Icon size={20} />
          </motion.span>
          <span className="flex-1 text-lg font-bold text-white sm:text-xl">{title}</span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#c4b5fd]"><FaChevronDown size={14} /></motion.span>
        </button>
        <div className="relative z-10 flex -mt-1 gap-1.5 px-5 pb-5 sm:px-7">
          {skills.slice(0, 5).map(([skill, SkillIcon]) => <span title={skill} key={skill} className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/20 text-[#dcd4ff]"><SkillIcon size={14} /></span>)}
          {skills.length > 5 && <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/20 text-xs text-[#dcd4ff]">+{skills.length - 5}</span>}
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: -12 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative z-10 overflow-hidden"
            >
              <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7">
                <div className="flex flex-wrap gap-2.5">
                  {skills.map(([skill, SkillIcon], index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 18, rotateX: -55 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: index * 0.045, duration: 0.3 }}
                      whileHover={{ y: -4, scale: 1.06, transition: { duration: 0.18 } }}
                      className="flex items-center gap-2 rounded-lg border border-violet-300/25 bg-violet-500/10 px-3 py-2 text-sm text-[#e7e1ff] shadow-[0_5px_10px_rgba(30,20,70,0.25)]"
                    >
                      <SkillIcon className="text-[#c4b5fd]" size={16} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  );
};

const Tech = () => {
  const [openCard, setOpenCard] = useState("Frontend");

  return (
    <section>
      <div className="mb-10 text-center">
        <p className={styles.sectionSubText}>My toolkit</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-secondary sm:text-base">Select a category to explore the tools and technologies I work with.</p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:items-start">
        {skillGroups.map((group) => <SkillCard key={group.title} group={group} isOpen={openCard === group.title} onToggle={() => setOpenCard(openCard === group.title ? "" : group.title)} />)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
