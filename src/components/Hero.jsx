import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const code = `const developer = {
  name: 'Chandan',
  role: 'Full-Stack Developer',
  skills: ['React', 'Java'],
  builds: true,
  learning: true
};

developer.create();`;

const highlightCode = (value) => value.split(/(const|true|developer|create|'[^']*')/g).map((part, index) => {
  let className = "";
  if (part === "const" || part === "true") className = "text-[#c792ea]";
  if (part === "developer") className = "text-[#82aaff]";
  if (part === "create") className = "text-[#f78c6c]";
  if (part.startsWith("'")) className = "text-[#c3e88d]";
  return <span className={className} key={`${part}-${index}`}>{part}</span>;
});

const Hero = () => {
  const [typedLength, setTypedLength] = useState(0);
  const heroGreeting = "Hi, I'm Chandan";
  const [typedGreeting, setTypedGreeting] = useState("");

  useEffect(() => {
    const typeCode = () => {
      setTypedLength(0);
      let character = 0;
      const writer = window.setInterval(() => {
        character += 1;
        setTypedLength(character);
        if (character >= code.length) window.clearInterval(writer);
      }, 26);
    };

    typeCode();
    const restart = window.setInterval(typeCode, 10000);
    return () => window.clearInterval(restart);
  }, []);

  useEffect(() => {
    let character = 0;
    const writer = window.setInterval(() => {
      character += 1;
      setTypedGreeting(heroGreeting.slice(0, character));
      if (character >= heroGreeting.length) window.clearInterval(writer);
    }, 150);
    return () => window.clearInterval(writer);
  }, []);

  const typedCode = code.slice(0, typedLength);
  return (
    <section className="relative min-h-screen w-full overflow-hidden mx-auto">
      <div className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-32 pb-28 min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12`}>
        <div className="flex max-w-2xl items-start gap-5">
          <div className="mt-3 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_22px_#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <p className="mb-3 font-medium uppercase tracking-[0.28em] text-[#c4b5fd]">Full-stack developer</p>
            <h1 aria-label={heroGreeting} className={`${styles.heroHeadText} text-white`}>
              {typedGreeting.slice(0, 8)}<span className="text-[#915EFF]">{typedGreeting.slice(8)}</span>{typedGreeting.length < heroGreeting.length && <span className="code-cursor">|</span>}
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>I build modern, user-focused web applications and interfaces.</p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-code-window w-full max-w-[560px] overflow-hidden rounded-2xl border border-violet-400/30 bg-[#0d1020]/95 shadow-[0_25px_80px_rgba(124,58,237,0.32)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#17132d] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-[#aaa6c3]">portfolio.js</span>
          </div>
          <div className="grid grid-cols-[2.5rem_1fr] py-5 font-mono text-sm leading-7 sm:text-base">
            <div className="select-none border-r border-white/5 pr-3 text-right text-[#5c557c]">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8</div>
            <pre className="m-0 min-h-[252px] overflow-x-auto px-5 text-[#dfd9ff]"><code>{highlightCode(typedCode)}<span className="code-cursor">|</span></code></pre>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-[#17132d] px-5 py-3 font-mono text-xs text-[#9f95c9]"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Ready to build</div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section"><div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"><motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-secondary mb-1" /></div></a>
      </div>
    </section>
  );
};

export default Hero;
