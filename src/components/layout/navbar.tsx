"use client";

import CollapseTransition from "@/components/common/CollapseTransition";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-nav-root='true']")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      data-nav-root="true"
      className={cn(
        "sticky top-0 z-50 w-full",
        scrolled && isMenuOpen && "shadow-md",
      )}
    >
      <div
        className={cn(
          "w-full transition-all duration-300 ",
          !scrolled
            ? "bg-transparent backdrop-blur-0"
            : "backdrop-blur-md bg-background/70 shadow-md",
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-10 transition-all duration-300",
            scrolled ? "h-12 md:h-14" : "h-14 md:h-16",
          )}
        >
          <div className="flex items-center">
            {/* Mobile */}
            <div className="items-center md:hidden mr-3">
              <Button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="rounded-[10px] size-7 translate-y-px"
                size="icon-sm"
                variant="ghost"
              >
                {isMenuOpen ? (
                  <X className="size-5" strokeWidth={1.5} />
                ) : (
                  <MenuIcon className="size-5" strokeWidth={1.5} />
                )}
              </Button>
            </div>
            <Image
              src="/logo.png"
              alt="Promis Conveyor Chain"
              width={200}
              height={45}
              priority
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>

          <div className="items-center hidden md:flex md:gap-2 lg:gap-3 xl:gap-4">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                size="sm"
                variant="ghost"
                asChild
                className={cn(
                  "text-base lg:text-lg",
                  isActive(item.href) && "text-primary hover:text-primary",
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}

            <Button
              size="lg"
              variant="default"
              asChild
              className="text-base font-semibold ml-2"
            >
              <Link href="/contact">Minta Penawaran</Link>
            </Button>
          </div>

          <div className="items-center md:hidden">
            <Button
              size="default"
              variant="default"
              asChild
              className="text-sm font-semibold ml-2"
            >
              <Link href="/contact">Minta Penawaran</Link>
            </Button>
          </div>
        </div>
      </div>
      <CollapseTransition open={isMenuOpen} direction="vertical" duration={350}>
        <div className="md:hidden bg-background/70 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-6 lg:px-10">
            <div className="flex flex-col py-2">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.href}
                  size="sm"
                  variant="ghost"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full justify-start px-4 py-2 text-base rounded-none text-foreground/90 hover:bg-accent hover:text-accent-foreground",
                    isActive(item.href) &&
                      "bg-accent text-primary hover:text-primary",
                  )}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CollapseTransition>
    </nav>
  );
}
