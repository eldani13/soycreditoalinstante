"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function Spam() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          className="fixed top-0 left-0 z-[60] w-full overflow-hidden bg-[#FBBF24] text-[#1E3A8A] shadow-md"
        >
          <div className="relative mx-auto flex h-11 max-w-7xl items-center justify-center gap-2 px-4">
            <DevicePhoneMobileIcon className="h-5 w-5 shrink-0" />
            <p className="text-center text-sm font-black tracking-wide sm:text-base">
              ¡Lleva tu smartphone en pocos minutos!
            </p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
