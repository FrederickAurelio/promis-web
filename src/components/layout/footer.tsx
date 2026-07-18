import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  COMPANY_NAME,
  EMAIL,
  MAILTO_LINK,
  MAPS_QUERY_URL,
  PHONE_DISPLAY,
  LANDLINE_DISPLAY,
  SOCIAL_LINKS as SOCIAL_LINKS_CONST,
  TEL_LINK,
  LANDLINE_TEL_LINK,
} from "@/constant";
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
import { Separator } from "../ui/separator";

const SOCIAL_LINKS = [
  {
    href: SOCIAL_LINKS_CONST.facebook,
    label: "Follow us on Facebook",
    Icon: FacebookIcon,
  },
  {
    href: SOCIAL_LINKS_CONST.instagram,
    label: "Follow us on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: SOCIAL_LINKS_CONST.linkedin,
    label: "Follow us on LinkedIn",
    Icon: LinkedinIcon,
  },
];

const NAVIGATION_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/products", label: "Produk" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

const PRODUCTS_ITEMS = [
  { href: "/products#conveyor-chain", label: "Conveyor Chain" },
  { href: "/products#roller-chain", label: "Roller Chain" },
  { href: "/contact", label: "Konsultasi Lainnya" },
];

const CONTACT_ITEMS = [
  { href: MAPS_QUERY_URL, label: ADDRESS, Icon: MapPinIcon },
  { href: TEL_LINK, label: PHONE_DISPLAY, Icon: PhoneIcon },
  { href: LANDLINE_TEL_LINK, label: LANDLINE_DISPLAY, Icon: PhoneIcon },
  { href: MAILTO_LINK, label: EMAIL, Icon: MailIcon },
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

      <p className="text-muted-foreground max-w-xs leading-relaxed">
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
              <Icon className="text-muted-foreground group-hover:text-primary size-5 transition-colors duration-300" />
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
            className="text-muted-foreground hover:text-primary w-fit text-base transition-colors duration-300"
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
            className="text-muted-foreground hover:text-primary w-fit text-base transition-colors duration-300"
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
        <div
          className="group flex w-fit cursor-pointer items-start gap-4"
          key={data.href}
        >
          <data.Icon className="text-muted-foreground group-hover:text-primary mt-1 size-5 shrink-0" />
          <Link
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary group-hover:text-primary text-base underline-offset-4 group-hover:underline hover:underline"
          >
            {data.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="mt-7 flex flex-col justify-between md:mx-8 md:flex-row md:items-center">
      <div className="text-muted-foreground flex items-center gap-2">
        <Image
          src="/logo-ipp.png"
          alt="PT Inti Perkasa Pancasurya"
          width={20}
          height={20}
        />
        <p className="text-sm">PT INTI PERKASA PANCASURYA</p>
      </div>
      <p className="text-muted-foreground ml-1 text-sm md:ml-0">
        &copy;{" "}
        {new Date().getFullYear() < 2026 ? 2026 : new Date().getFullYear()}{" "}
        {COMPANY_NAME}. Hak Cipta Dilindungi.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-card border-border border-t pt-12 pb-8">
      <div className="container mx-auto flex flex-col px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <FooterBrandAndSocials />
          <FooterNavigation />
          <FooterContact />
          <FooterProducts />
        </div>
        <Separator />
        <FooterBottom />
      </div>
    </footer>
  );
}