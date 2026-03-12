"use client";

import CollapseTransition from "@/components/transitions/CollapseTransition";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/constant";
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
          "w-full transition-all duration-300",
          !scrolled
            ? "backdrop-blur-0 bg-transparent"
            : "bg-background/70 shadow-md backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between px-4 transition-all duration-300 md:px-6 lg:px-10",
            scrolled ? "h-12 md:h-14" : "h-14 md:h-16",
          )}
        >
          <div className="flex items-center">
            {/* Mobile */}
            <div className="mr-1.5 items-center md:hidden">
              <Button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="size-7 translate-y-px rounded-[10px]"
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
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Promis Conveyor Chain"
                width={200}
                height={45}
                priority
                className="h-7 w-auto object-contain md:h-8"
              />
            </Link>
          </div>

          <div className="hidden items-center md:flex md:gap-1 lg:gap-2 xl:gap-3">
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
              className="ml-2 text-base font-semibold"
            >
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Minta Penawaran
              </Link>
            </Button>
          </div>

          <div className="items-center md:hidden">
            <Button
              size="sm"
              variant="default"
              asChild
              className="ml-2 text-sm font-semibold"
            >
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Minta Penawaran
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <CollapseTransition open={isMenuOpen} direction="vertical" duration={350}>
        <div className="bg-background/70 backdrop-blur-md md:hidden">
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
                    "text-foreground/90 hover:bg-accent hover:text-accent-foreground w-full justify-start rounded-none px-4 py-2 text-base",
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
