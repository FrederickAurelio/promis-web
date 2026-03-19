import SectionContainer from "@/components/layout/section-container";
import CarouselAuto from "@/components/transitions/carousel-auto";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { COMPANY_NAME, DEFAULT_OG_IMAGE } from "@/constant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Katalog produk Promis Conveyor Chain: conveyor chain, sprocket, dan pulley untuk pabrik kelapa sawit dengan spesifikasi teknis lengkap.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Produk | ${COMPANY_NAME}`,
    description:
      "Lihat katalog conveyor chain, sprocket, dan pulley untuk kebutuhan pabrik kelapa sawit dan industri terkait.",
    url: "/products",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `Produk | ${COMPANY_NAME}`,
    description:
      "Katalog conveyor chain, sprocket, dan pulley dengan spesifikasi teknis untuk kebutuhan industri.",
    images: [DEFAULT_OG_IMAGE],
  },
};
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_LINK } from "@/constant";

const products = [
  {
    name: "Conveyor Chain (Rantai Konveyor)",
    images: ["/about.jpg", "/photo_20_2024-02-01_08-37-17.jpg", "/about3.jpg"],
    specs: [
      { spesifikasi: "Material", detail: "Alloy Steel / Stainless Steel" },
      { spesifikasi: "Pitch Range", detail: "100mm - 300mm" },
      { spesifikasi: "Breaking Load", detail: "Up to 120,000 kgf" },
      {
        spesifikasi: "Aplikasi",
        detail: "Fruit Bunch, Scraper, Elevator",
      },
    ],
  },
  {
    name: "Sprocket (Sproket)",
    images: ["/photo_20_2024-02-01_08-37-17.jpg", "/about.jpg", "/about3.jpg"],
    specs: [
      { spesifikasi: "Material", detail: "Alloy Steel / Stainless Steel" },
      { spesifikasi: "Pitch Range", detail: "100mm - 300mm" },
      { spesifikasi: "Breaking Load", detail: "Up to 120,000 kgf" },
      {
        spesifikasi: "Aplikasi",
        detail: "Fruit Bunch, Scraper, Elevator",
      },
    ],
  },
];

function Katalog() {
  return (
    <SectionContainer className="flex flex-col gap-12 py-20 pb-32">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Katalog Produk & Spesifikasi
        </h2>
        <p className="text-muted-foreground max-w-2xl text-center text-base lg:text-lg">
          Data teknis lengkap untuk memastikan kecocokan komponen dengan sistem
          konveyor Anda.
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-24 lg:gap-28">
        {products.map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-5 md:gap-12 lg:gap-16"
          >
            <div className="bg-card border-border relative aspect-square overflow-hidden rounded-2xl border shadow-lg **:data-[slot=carousel-item]:ml-0 **:data-[slot=carousel-item]:pl-0 md:col-span-2 [&_[data-slot=carousel-content]>div]:ml-0">
              <CarouselAuto showBadge delay={4000}>
                {product.images.map((src) => (
                  <CarouselItem key={src}>
                    <div className="relative aspect-square w-full">
                      <Image
                        src={src}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselAuto>
            </div>

            <div className="flex flex-col gap-6 md:col-span-3 lg:gap-8">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                {product.name}
              </h2>

              {/* Container Tabel dengan Style lebih Solid */}
              <div className="flex flex-col gap-2">
                <div className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
                  <Table>
                    <TableHeader className="bg-accent">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-accent-foreground w-[180px] px-3 py-4 text-base font-bold md:px-5">
                          Spesifikasi
                        </TableHead>
                        <TableHead className="text-foreground px-3 py-4 text-base font-bold md:px-5">
                          Detail Teknikal
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.specs.map((row) => (
                        <TableRow
                          key={row.spesifikasi}
                          className="border-border/50 hover:bg-muted/50"
                        >
                          <TableCell className="px-3 py-3.5 text-base font-semibold md:px-5">
                            {row.spesifikasi}
                          </TableCell>
                          <TableCell className="text-foreground/80 px-3 py-3.5 text-base leading-relaxed md:px-5">
                            {row.detail}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Tambahkan CTA Kecil di bawah tabel */}
                <div className="text-muted-foreground ml-1 flex items-center gap-2 text-sm italic">
                  <InfoIcon className="size-4" />
                  <span>
                    Spesifikasi dapat disesuaikan dengan kebutuhan (Custom
                    Order).
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="default"
                className="w-full py-6 text-lg font-semibold md:text-xl"
                asChild
              >
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex w-full items-center justify-center gap-2">
                    Minta Penawaran Harga{" "}
                    <ArrowRight className="size-4 -translate-y-px" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const CARA_PEMESANAN = [
  {
    title: "Konsultasi & Solusi Teknis",
    description:
      "Diskusikan kebutuhan spesifik dan tantangan operasional Anda dengan tim ahli kami untuk mendapatkan spesifikasi material yang paling tepat.",
  },
  {
    title: "Penawaran & Validasi",
    description:
      "Terima penawaran harga resmi dan estimasi teknis dalam waktu 1x24 jam untuk percepatan proses pengadaan perusahaan Anda.",
  },
  {
    title: "Produksi & Distribusi Aman",
    description:
      "Proses manufaktur presisi segera dimulai, diikuti pengiriman menggunakan standar proteksi kayu profesional hingga sampai di lokasi Anda.",
  },
];

function CaraPemesanan() {
  return (
    <SectionContainer
      rootClassName="bg-accent"
      className="flex flex-col gap-12 py-20 pb-32"
    >
      <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        Cara Pemesanan
      </h2>
      <div className="mx-4 grid grid-cols-1 gap-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {CARA_PEMESANAN.map((item, index) => (
          <div
            className="flex flex-col items-center gap-4 text-center"
            key={item.title}
          >
            <Badge variant="default" className="size-10 text-xl font-semibold">
              {index + 1}
            </Badge>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-base lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Katalog />
      <CaraPemesanan />
    </>
  );
}
