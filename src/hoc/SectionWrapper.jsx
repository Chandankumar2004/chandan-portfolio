import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName || undefined}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-mt-24 ${idName === "contact" ? "sm:pb-6 pb-4" : ""}`}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
