import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Bob.module.css";

const DURATION = 1;

const Bob: React.FC = () => {
  const [frame, setFrame] = useState<0 | 1>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((f) => (f === 0 ? 1 : 0));
    }, DURATION * 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.svgContainer}>
      {/* First SVG-frame */}
      <motion.svg
        className={styles.svgFrame}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          opacity: frame === 0 ? 1 : 0,
          y: frame === 0 ? 0 : 8,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <rect x="10" width="5" height="5" fill="#504B4B" />
        <rect x="15" width="5" height="5" fill="#504B4B" />
        <rect x="20" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="10" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="12" y="17" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="14" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="15" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="17" y="17" width="1" height="1" fill="#504B4B" />
        <rect x="18" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="18" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="19" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="20" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="21" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="21" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="22" y="17" width="1" height="1" fill="#504B4B" />
        <rect y="10" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="10" width="5" height="5" fill="#504B4B" />
        <rect y="15" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="15" width="5" height="5" fill="#504B4B" />
        <rect y="20" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="20" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="25" width="5" height="5" fill="#504B4B" />
        <rect x="25" y="25" width="5" height="5" fill="#504B4B" />
        <rect x="10" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="15" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="15" y="36" width="5" height="5" rx="2.5" fill="#504B4B" />
        <rect x="18" y="42" width="2.5" height="2.5" rx="1.25" fill="#504B4B" />
        <rect x="20" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="11" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="12" y="12" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="13" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="21" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="22" y="12" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="23" y="13" width="1.5" height="1.5" fill="#504B4B" />
      </motion.svg>

      <motion.svg
        className={styles.svgFrame}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          opacity: frame === 0 ? 1 : 0,
          y: frame === 0 ? 0 : 8,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <rect x="5" width="5" height="5" fill="#504B4B" />
        <rect x="10" width="5" height="5" fill="#504B4B" />
        <rect x="15" width="5" height="5" fill="#504B4B" />
        <rect y="5" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="5" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="7" y="17" width="1" height="1" fill="#504B4B" />
        <rect x="8" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="8" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="9" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="10" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="11" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="11" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="12" y="17" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="14" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="15" y="20" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="19" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="18" width="1" height="1" fill="#504B4B" />
        <rect x="17" y="17" width="1" height="1" fill="#504B4B" />
        <rect y="10" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="10" width="5" height="5" fill="#504B4B" />
        <rect y="15" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="15" width="5" height="5" fill="#504B4B" />
        <rect y="20" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="20" width="5" height="5" fill="#504B4B" />
        <rect y="25" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="25" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="10" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="10" y="36" width="3" height="3" rx="1.5" fill="#504B4B" />
        <rect x="13" y="42" width="2.5" height="2.5" rx="1.25" fill="#504B4B" />
        <rect x="17" y="45" width="2.5" height="2.5" rx="1.25" fill="#504B4B" />
        <rect x="20" y="49" width="1" height="1" rx="0.5" fill="#504B4B" />
        <rect x="18" y="43" width="1" height="1" rx="0.5" fill="#504B4B" />
        <rect x="15" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="6" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="7" y="12" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="8" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="16" y="13" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="17" y="12" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="18" y="13" width="1.5" height="1.5" fill="#504B4B" />
      </motion.svg>

      {/* Second SVG-frame */}
      <motion.svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ opacity: frame === 1 ? 1 : 0, y: frame === 1 ? 8 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <rect x="10" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="15" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="5" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="10" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="10" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="15" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="20" width="5" height="5" fill="#E2B0DD" />
        <rect x="5" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="10" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="15" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="20" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="25" width="5" height="5" fill="#E2B0DD" />
        <rect x="25" y="10" width="5" height="5" fill="#504B4B" />
        <rect x="31" y="9" width="5" height="5" rx="2.5" fill="#504B4B" />
        <rect x="31" y="3" width="2.5" height="2.5" rx="1.25" fill="#504B4B" />
        <rect x="35" y="5" width="1.5" height="1.5" rx="0.75" fill="#504B4B" />
        <rect x="28" width="1" height="1" rx="0.5" fill="#504B4B" />
        <rect x="28" y="3" width="1" height="1" rx="0.5" fill="#504B4B" />
        <rect x="12" y="22" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="23" width="1" height="1" fill="#504B4B" />
        <rect x="13" y="24" width="1" height="1" fill="#504B4B" />
        <rect x="14" y="25" width="1" height="1" fill="#504B4B" />
        <rect x="15" y="25" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="24" width="1" height="1" fill="#504B4B" />
        <rect x="16" y="23" width="1" height="1" fill="#504B4B" />
        <rect x="17" y="22" width="1" height="1" fill="#504B4B" />
        <rect x="18" y="23" width="1" height="1" fill="#504B4B" />
        <rect x="18" y="24" width="1" height="1" fill="#504B4B" />
        <rect x="19" y="25" width="1" height="1" fill="#504B4B" />
        <rect x="20" y="25" width="1" height="1" fill="#504B4B" />
        <rect x="21" y="24" width="1" height="1" fill="#504B4B" />
        <rect x="21" y="23" width="1" height="1" fill="#504B4B" />
        <rect x="22" y="22" width="1" height="1" fill="#504B4B" />
        <rect y="15" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="15" width="5" height="5" fill="#504B4B" />
        <rect y="20" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="20" width="5" height="5" fill="#504B4B" />
        <rect y="25" width="5" height="5" fill="#504B4B" />
        <rect x="30" y="25" width="5" height="5" fill="#504B4B" />
        <rect x="5" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="25" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="10" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="15" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="20" y="30" width="5" height="5" fill="#504B4B" />
        <rect x="11" y="18" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="12" y="17" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="13" y="18" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="21" y="18" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="22" y="17" width="1.5" height="1.5" fill="#504B4B" />
        <rect x="23" y="18" width="1.5" height="1.5" fill="#504B4B" />
      </motion.svg>
    </div>
  );
};

export default Bob;
