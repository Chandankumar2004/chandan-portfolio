import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa6";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const inputClassName = "w-full rounded-2xl border border-white/[0.035] bg-[#100d25] px-4 py-3.5 font-medium text-white outline-none shadow-[inset_7px_7px_14px_#080613,inset_-7px_-7px_14px_#1c163f] transition placeholder:text-[#aaa6c3]/80 focus:border-violet-300/35 focus:shadow-[inset_4px_4px_9px_#080613,inset_-4px_-4px_9px_#21194c,0_0_0_3px_rgba(139,92,246,0.12)]";

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

  const handleSubmit = async (e) => {
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

    try {
      const response = await fetch("https://formspree.io/f/meolnopv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `New portfolio message from ${form.name.trim()}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Formspree request failed with status ${response.status}`);
      }

      setNotice({ type: "success", message: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setNotice({
        type: "error",
        message: "Message could not be sent. Please try WhatsApp or email instead.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`mt-6 flex flex-col-reverse gap-6 overflow-hidden lg:mt-8 lg:flex-row lg:items-start`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='relative z-10 flex-[0.75] rounded-3xl border border-white/[0.035] bg-[#100d25] p-6 shadow-[18px_18px_38px_#06030f,-16px_-16px_34px_#1d1643] sm:p-7'
        style={{ zIndex: 2, pointerEvents: "auto" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <a
          href="https://wa.me/919304335185?text=Hi%20Chandan%2C%20I%20want%20to%20book%20a%20meeting.%20My%20preferred%20date%20and%20time%20are%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#151030] px-4 py-2.5 text-sm font-bold text-cyan-100 shadow-[6px_6px_13px_#080613,-5px_-5px_12px_#1d1643] transition hover:-translate-y-0.5 hover:text-white hover:shadow-[3px_3px_8px_#080613,-3px_-3px_8px_#261d57]"
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
              className={inputClassName}
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
              className={inputClassName}
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
              className={`${inputClassName} min-h-[138px] resize-y`}
            />
            {errors.message && <span id="message-error" className="mt-1.5 text-xs text-rose-300">{errors.message}</span>}
          </label>

          <button
            type='submit'
            disabled={loading}
            aria-busy={loading}
            className='w-fit rounded-2xl border border-white/[0.06] bg-[#151030] px-8 py-3.5 font-bold text-white shadow-[7px_7px_14px_#080613,-6px_-6px_13px_#1d1643] transition hover:-translate-y-0.5 hover:text-[#ddd6fe] active:translate-y-0 active:shadow-[inset_5px_5px_10px_#080613,inset_-5px_-5px_10px_#21194a] disabled:cursor-not-allowed disabled:opacity-60'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={earthRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className='relative z-10 h-[320px] md:h-[420px] lg:h-[460px] xl:h-[550px] lg:flex-1'
        style={{ zIndex: 2, pointerEvents: "none" }}
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
