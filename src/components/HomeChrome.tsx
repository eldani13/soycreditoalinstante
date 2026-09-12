"use client";

import { useEffect, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Spam from "@/components/Spam";

export default function HomeChrome({ children }: { children: ReactNode }) {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {atTop && <Spam />}
      <Navbar offsetTop={atTop ? 44 : 0} />
      <main className={`bg-white ${atTop ? "pt-[104px]" : "pt-16"}`}>
        {children}
      </main>
    </>
  );
}
