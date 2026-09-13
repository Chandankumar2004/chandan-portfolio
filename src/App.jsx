import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Freelance,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/Footer";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  const lowerSectionRef = useRef(null);
  const [loadStars, setLoadStars] = useState(false);

  useEffect(() => {
    const target = lowerSectionRef.current;
    if (!target || !window.IntersectionObserver) {
      setLoadStars(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadStars(true);
        observer.disconnect();
      }
    }, { rootMargin: "700px 0px" });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Freelance />
        <Feedbacks />
        <div ref={lowerSectionRef} className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            {loadStars && <StarsCanvas />}
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
