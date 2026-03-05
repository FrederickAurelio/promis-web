import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/promischain",
    label: "Follow us on Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/promischain",
    label: "Follow us on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/company/promischain",
    label: "Follow us on LinkedIn",
    Icon: LinkedinIcon,
  },
];

const NAVIGATION_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

const PRODUCTS_ITEMS = [
  { href: "/products?product=conveyor-chain", label: "Conveyor Chain" },
  { href: "/products?product=sprocket", label: "Sprocket" },
  { href: "/products?product=pulley", label: "Pulley" },
  { href: "/products?product=bearing", label: "Bearing Roller" },
  { href: "/products?product=chain-link", label: "Chain Link" },
];

const CONTACT_ITEMS = [
  {
    href: "https://www.google.com/maps?q=Jl.+Raya+Jakarta+No.+123,+Jakarta+Selatan",
    label: "Jl. Raya Jakarta No. 123, Jakarta Selatan",
    Icon: MapPinIcon,
  },
  {
    href: "tel:+6281234567890",
    label: "+62 812 3456 7890",
    Icon: PhoneIcon,
  },
  {
    href: "mailto:promischain@gmail.com",
    label: "promischain@gmail.com",
    Icon: MailIcon,
  },
];

function FooterBrandAndSocials() {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Image
          src="/logo.png"
          alt="Promis Conveyor Chain Logo"
          width={200}
          height={45}
          priority
          className="h-8 w-auto object-contain"
        />
      </Link>

      <p className="leading-relaxed text-muted-foreground max-w-xs">
        Penyedia terpercaya solusi rantai konveyor dan sprocket berkualitas
        tinggi khusus untuk industri kelapa sawit di Indonesia.
      </p>

      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <Button
            key={href}
            variant="secondary"
            size="icon-lg"
            asChild
            aria-label={label}
            className="group"
          >
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

function FooterNavigation() {
  return (
    <div className="flex flex-col gap-4 lg:mx-auto">
      <h3 className="text-lg font-semibold">Tautan Cepat</h3>
      <div className="flex flex-col gap-2">
        {NAVIGATION_ITEMS.map((data) => (
          <Link
            key={data.href}
            href={data.href}
            className="text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {data.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterProducts() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Produk Kami</h3>
      <div className="flex flex-col gap-2">
        {PRODUCTS_ITEMS.map((data) => (
          <Link
            key={data.href}
            href={data.href}
            className="text-base text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {data.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Hubungi Kami</h3>

      {CONTACT_ITEMS.map((data) => (
        <div className="flex items-start gap-4 group" key={data.href}>
          <data.Icon className="size-5 text-muted-foreground mt-1 group-hover:text-primary" />
          <Link
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-muted-foreground underline-offset-4 hover:text-primary hover:underline group-hover:text-primary group-hover:underline"
          >
            {data.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-12 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <FooterBrandAndSocials />
          <FooterNavigation />
          <FooterContact />
          <FooterProducts />
        </div>
      </div>
    </footer>
  );
}
