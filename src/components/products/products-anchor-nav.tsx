"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const ANCHOR_ITEMS = [
  {
    id: "conveyor-chain",
    href: "#conveyor-chain",
    label: "1. Conveyor Chain",
  },
  {
    id: "roller-chain",
    href: "#roller-chain",
    label: "2. Roller Chain",
  },
] as const;

export function ProductsAnchorNav() {
  const [activeId, setActiveId] = useState<string>("conveyor-chain");

  useEffect(() => {
    const sectionIds = ANCHOR_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-background/80 sticky top-14 z-40 border-b py-3 backdrop-blur-md md:top-16">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
        {ANCHOR_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeId === item.id
                ? "bg-primary/10 text-primary font-semibold"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function ProductsHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return null;
}
