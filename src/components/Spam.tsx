"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Spam() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0); // El spam solo aparece cuando estamos al principio de la página
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          key="spam"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-10 bg-yellow-400 text-black text-center z-[60] shadow-md flex items-center justify-center"
        >
          <span className="font-semibold">
            ¡LLEVA TU SMARTPHONE EN POCOS MINUTOS!
          </span>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
