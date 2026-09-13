import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaCalendarCheck, FaCircleCheck, FaCode, FaDesktop, FaLayerGroup, FaPalette, FaRocket, FaWhatsapp } from "react-icons/fa6";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const services = [
  { title: "Business Websites", description: "Fast, professional websites that build trust and generate leads.", icon: FaDesktop },
  { title: "Full-Stack Applications", description: "Custom portals, dashboards, CRM systems, and internal tools.", icon: FaLayerGroup },
  { title: "UI/UX Development", description: "Responsive interfaces that are clear, polished, and easy to use.", icon: FaPalette },
  { title: "API & Integrations", description: "Secure APIs, automation, payment flows, WhatsApp, and third-party tools.", icon: FaCode },
];

const process = ["Let's discuss your idea", "Plan the right solution", "Build with clear updates", "Launch and support"];

const Freelance = () => (
  <section>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -3, rotateX: 0.6, rotateY: -0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400 }}
      className="freelance-panel relative overflow-hidden rounded-3xl border border-violet-400/25 p-6 sm:p-10"
    >
      <motion.div animate={{ y: [0, -16, 0], rotate: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-[32px] border border-fuchsia-300/30 bg-fuchsia-500/15 shadow-[0_20px_45px_rgba(192,38,211,0.2)]" />
      <motion.div animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="pointer-events-none absolute -bottom-10 left-[42%] h-28 w-28 rounded-full border border-cyan-300/25 bg-cyan-400/10 blur-[1px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.06)_50%,transparent_80%)]" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for freelance work</span>
          <p className={`${styles.sectionSubText} mt-5`}>Let&apos;s work together</p>
          <h2 className={`${styles.sectionHeadText} mt-1`}>Have a project in mind?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary sm:text-base">I help businesses turn ideas into modern websites, full-stack applications, CRM tools, and polished customer experiences.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://wa.me/919304335185?text=Hi%20Chandan%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-[#062b1a] transition hover:-translate-y-1 hover:bg-emerald-400"><FaWhatsapp size={18} /> Start on WhatsApp</a>
          <a href="https://wa.me/919304335185?text=Hi%20Chandan%2C%20I%20want%20to%20book%20a%20meeting.%20My%20preferred%20date%20and%20time%20are%3A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-400/20"><FaCalendarCheck size={17} /> Book a meeting</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-violet-300/45 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-violet-500/20">Contact me <FaArrowRight size={14} /></a>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, rotateX: 2, rotateY: index % 2 === 0 ? -1.5 : 1.5, scale: 1.01, transition: { duration: 0.28, ease: "easeOut" } }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }} style={{ transformPerspective: 1000 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-violet-300/40">
            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-[#c4b5fd]"><Icon size={19} /></span>
            <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-white"><FaRocket className="text-[#c4b5fd]" /> How I work</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {process.map((step, index) => <div key={step} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-[#e7e1ff]"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-xs font-bold text-[#c4b5fd]">0{index + 1}</span>{step}</div>)}
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-white"><FaBriefcase className="text-[#c4b5fd]" /> Why work with me</h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-secondary">
            {["Clear communication and regular progress updates", "Responsive, performance-focused development", "Reusable code and support after launch"].map((item) => <li className="flex gap-2" key={item}><FaCircleCheck className="mt-1 shrink-0 text-emerald-400" size={14} />{item}</li>)}
          </ul>
          <a href="#projects" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c4b5fd] hover:text-white">View project case studies <FaArrowRight size={13} /></a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SectionWrapper(Freelance, "freelance");
