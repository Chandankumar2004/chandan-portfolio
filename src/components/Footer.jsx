import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Freelance", href: "#freelance" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-panel relative overflow-hidden border-t border-white/10 bg-[#070b1d]/85 px-6 py-5 text-white backdrop-blur-sm sm:px-12 lg:px-16">
      <div className="footer-wave footer-wave-left" />
      <div className="footer-wave footer-wave-right" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_210px] lg:items-center">
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-baseline gap-x-1 text-lg font-semibold leading-tight tracking-tight sm:text-xl">
            <a href="#projects" className="transition hover:text-[#c4b5fd]">Projects</a>
            <a href="#freelance" className="transition hover:text-[#c4b5fd]">Freelance</a>
            <a href="#contact" className="transition hover:text-[#c4b5fd]">Contact</a>
            <a href="https://drive.google.com/file/d/18E-v7p5C4hppAjKHqr3wpKU-wigs2lJZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#b784ff] transition hover:text-white">Resume</a>
          </div>
          <p className="mt-1 text-xs tracking-[0.1em] text-[#c8c3e4]">Build <span className="mx-1 text-[#8f86b9]">&bull;</span> Learn <span className="mx-1 text-[#8f86b9]">&bull;</span> Create <span className="mx-1 text-[#8f86b9]">&bull;</span> Grow</p>
          <div className="mt-2.5 h-0.5 w-12 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400" />
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#c8c3e4] lg:justify-start">
            <a href="tel:+919304335185" className="flex items-center gap-1.5 transition hover:text-white"><FaPhone size={12} /> 9304335185</a>
            <a href="mailto:chandan32005c@gmail.com" className="flex items-center gap-1.5 transition hover:text-white"><FaEnvelope size={12} /> chandan32005c@gmail.com</a>
            <a href="https://wa.me/919304335185" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex items-center gap-1.5 text-[#86efac] transition hover:text-white"><FaWhatsapp size={14} /> WhatsApp</a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-sm font-semibold">Quick Links</h2>
          <nav className="mt-2 flex flex-wrap justify-center gap-x-2.5 gap-y-1 text-xs text-[#c8c3e4]" aria-label="Footer navigation">
            {footerLinks.map((link, index) => (
              <span className="flex items-center gap-x-4" key={link.label}>
                <a href={link.href} className="footer-quick-link">{link.label}</a>
                {index < footerLinks.length - 1 && <span className="text-[#777091]">|</span>}
              </span>
            ))}
            <a href="https://drive.google.com/file/d/18E-v7p5C4hppAjKHqr3wpKU-wigs2lJZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-quick-link text-[#c4b5fd]">Resume</a>
          </nav>

          <div className="mt-3 flex justify-center gap-2.5">
            <a href="https://github.com/Chandankumar2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social"><FaGithub size={15} /></a>
            <a href="https://www.linkedin.com/in/chandan2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social"><FaLinkedin size={15} /></a>
            <a href="https://www.instagram.com/chandank_2004/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social"><FaInstagram size={15} /></a>
            <a href="https://x.com/chandanx305?t=4kzWbOPzG6HPT8cfJIsUIg&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="footer-social"><FaXTwitter size={15} /></a>
          </div>
          <p className="mt-2 text-xs text-[#c8c3e4]">&copy; {year} All rights reserved.</p>
        </div>

        <div className="border-t border-white/15 pt-4 text-center lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <a href="#contact" className="inline-flex min-w-[165px] items-center justify-center gap-3 rounded-full border border-fuchsia-400 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/15 to-blue-500/25 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.25)] transition hover:scale-[1.03] hover:from-fuchsia-500/35 hover:to-blue-500/35">
            Let&apos;s Connect <FaArrowRight />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
