import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const earthRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);
  const [errors, setErrors] = useState({});
  const [loadEarth, setLoadEarth] = useState(false);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(null), 4500);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    const target = earthRef.current;
    if (!target || !window.IntersectionObserver) {
      setLoadEarth(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadEarth(true);
        observer.disconnect();
      }
    }, { rootMargin: "700px 0px" });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please write a message.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setNotice({ type: "error", message: "Please complete the highlighted fields." });
      return;
    }

    setLoading(true);

    fetch("https://formspree.io/f/meolnopv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setNotice({ type: "success", message: "Message sent! I'll get back to you soon." });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setNotice({ type: "error", message: "Message could not be sent. Please try again." });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setNotice({ type: "error", message: "Message could not be sent. Please try again." });
      });
  };

  return (
    <div
      className={`mt-6 flex flex-col-reverse gap-6 overflow-hidden lg:mt-8 lg:flex-row lg:items-start`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl sm:p-7'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <a
          href="https://wa.me/919304335185?text=Hi%20Chandan%2C%20I%20want%20to%20book%20a%20meeting.%20My%20preferred%20date%20and%20time%20are%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
        >
          <FaCalendarCheck size={16} /> Book a meeting
        </a>

        <form
          action="https://formspree.io/f/meolnopv"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
          className='mt-6 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.name && <span id="name-error" className="mt-1.5 text-xs text-rose-300">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email.</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.email && <span id="email-error" className="mt-1.5 text-xs text-rose-300">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {errors.message && <span id="message-error" className="mt-1.5 text-xs text-rose-300">{errors.message}</span>}
          </label>

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={earthRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='h-[320px] md:h-[420px] lg:h-[460px] xl:h-[550px] lg:flex-1'
      >
        <Suspense fallback={<div className="flex h-full items-center justify-center"><span className="canvas-loader" /></div>}>
          {loadEarth && <EarthCanvas />}
        </Suspense>
      </motion.div>

      <AnimatePresence>
        {notice && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            role="status"
            className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border px-5 py-4 text-sm font-medium shadow-2xl backdrop-blur ${notice.type === "success" ? "border-emerald-400/40 bg-emerald-950/90 text-emerald-100" : "border-rose-400/40 bg-rose-950/90 text-rose-100"}`}
          >
            {notice.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
