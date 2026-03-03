"use client";

import { useEffect } from "react";

export default function ViewportProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const setRealViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setRealViewportHeight();
    window.addEventListener("resize", setRealViewportHeight);
    return () => {
      window.removeEventListener("resize", setRealViewportHeight);
    };
  }, []);

  return <>{children}</>;
}
