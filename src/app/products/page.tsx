import SectionContainer from "@/components/layout/section-container";
import CarouselAuto from "@/components/transitions/carousel-auto";
import ConveyorCatalog from "@/components/products/conveyor-catalog";
import {
  ProductsAnchorNav,
  ProductsHashScroll,
} from "@/components/products/products-anchor-nav";
import RollerChainCatalog from "@/components/products/roller-chain-catalog";
import { Badge } from "@/components/ui/badge";
import { CarouselItem } from "@/components/ui/carousel";
import { COMPANY_NAME, DEFAULT_OG_IMAGE } from "@/constant";
import { CONVEYOR_IMAGES, ROLLER_IMAGES } from "@/data/products";
import { InfoIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Katalog Conveyor Chain & Sparepart Pabrik Kelapa Sawit | Promis",
  description:
    "Katalog lengkap Conveyor Chain 117 & 717, Connecting Link, Sprocket, Roller Chain RS Series, dan Sprocket Transmisi. Spesifikasi teknis untuk pabrik kelapa sawit.",
  alternates: {
    canonical: "https://promis.co.id/products",
  },
  keywords: [
    "conveyor chain pabrik sawit",
    "rantai transmisi roller chain",
    "jual sprocket industri",
    "connecting link rantai konveyor",
    "sparepart pabrik kelapa sawit",
    "117 conveyor chain",
    "717 conveyor chain",
    "Promis conveyor Indonesia",
  ],
  openGraph: {
    title: `Solusi Rantai Industri & Komponen Pabrik Sawit | ${COMPANY_NAME}`,
    description:
      "Katalog Conveyor Chain 117 & 717, Roller Chain RS Series, dan Sprocket Transmisi. Minta penawaran harga langsung via WhatsApp.",
    url: "https://promis.co.id/products",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Katalog Produk Promis Conveyor Chain",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Produk Rantai Industri Premium | ${COMPANY_NAME}`,
    description:
      "Katalog lengkap Conveyor Chain, Roller Chain, dan Sprocket khusus industri kelapa sawit.",
    images: [DEFAULT_OG_IMAGE],
  },
};

function PageHeader() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Badge className="bg-primary/10 text-primary rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase md:text-sm">
        Highlight: Conveyor Chain
      </Badge>
      <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        Katalog Produk & Spesifikasi
      </h1>
      <p className="text-muted-foreground max-w-2xl text-center text-base lg:text-lg">
        Dua kategori utama:{" "}
        <span className="text-foreground font-medium">Conveyor Chain</span>{" "}
        (117 & 717) dan{" "}
        <span className="text-foreground font-medium">Roller Chain</span> (RS
        Series). Setiap kategori memiliki Conveyor Chain / Connecting Link /
        Sprocket.
      </p>
    </div>
  );
}

/** Mobile: square carousel. Desktop: 3-tile grid so product details stay readable. */
function ProductImageGallery({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  return (
    <>
      <div className="border-border mx-auto w-full max-w-md overflow-hidden rounded-2xl border md:hidden **:data-[slot=carousel-item]:ml-0 **:data-[slot=carousel-item]:pl-0 [&_[data-slot=carousel-content]>div]:ml-0">
        <CarouselAuto showBadge delay={4000}>
          {images.map((src) => (
            <CarouselItem key={src}>
              <div className="relative aspect-square w-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  priority={priority}
                  sizes="(max-width: 768px) 100vw, 28rem"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselAuto>
      </div>

      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {images.map((src, index) => (
          <div
            key={src}
            className="border-border relative aspect-square overflow-hidden rounded-2xl border"
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[102%]"
              priority={priority && index === 0}
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        ))}
      </div>
    </>
  );
}

function ConveyorChainSection() {
  return (
    <section
      id="conveyor-chain"
      className="scroll-mt-36 flex flex-col gap-8 lg:gap-10"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            1
          </span>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Conveyor Chain
          </h2>
        </div>
        <p className="text-muted-foreground text-base lg:text-lg">
          Rantai Konveyor untuk pergerakan yang sempurna cocok untuk pabrik
          kelapa sawit — 4 model chain, 2 connecting link, 11 sprocket.
        </p>
      </div>

      <ProductImageGallery
        images={CONVEYOR_IMAGES}
        alt="Conveyor Chain Promis"
        priority
      />

      <ConveyorCatalog />

      <div className="text-muted-foreground flex items-center gap-2 text-sm italic">
        <InfoIcon className="size-4 shrink-0" />
        <span>
          Spesifikasi dapat disesuaikan dengan kebutuhan (Custom Order).
        </span>
      </div>
    </section>
  );
}

function RollerChainSection() {
  return (
    <section
      id="roller-chain"
      className="scroll-mt-36 flex flex-col gap-8 lg:gap-10"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-muted-foreground text-background flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            2
          </span>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Roller Chain
          </h2>
        </div>
        <p className="text-muted-foreground text-base lg:text-lg">
          Rantai transmisi RS Series — 18 roller chain, 18 connecting link, dan
          sprocket transmisi Simplex / Duplex / Triplex.
        </p>
      </div>

      <ProductImageGallery images={ROLLER_IMAGES} alt="Roller Chain Promis" />

      <RollerChainCatalog />
    </section>
  );
}

function Katalog() {
  return (
    <>
      <ProductsHashScroll />
      <SectionContainer className="flex flex-col gap-8 py-20 pb-16">
        <PageHeader />
        <ProductsAnchorNav />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 lg:gap-24">
          <ConveyorChainSection />
        </div>
      </SectionContainer>

      <SectionContainer
        rootClassName="bg-card"
        className="flex flex-col gap-8 py-16 pb-28 lg:py-20 lg:pb-32"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 lg:gap-24">
          <RollerChainSection />
        </div>
      </SectionContainer>
    </>
  );
}

const CARA_PEMESANAN = [
  {
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan spesifik dan tantangan operasional Anda dengan tim ahli kami untuk mendapatkan spesifikasi material yang paling tepat.",
  },
  {
    title: "Penawaran",
    description:
      "Terima penawaran harga resmi dan estimasi teknis dalam waktu 1x24 jam untuk perusahaan Anda.",
  },
  {
    title: "Pengiriman",
    description:
      "Pengiriman menggunakan standar proteksi kayu profesional hingga sampai di lokasi Anda.",
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
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 gap-y-12 md:grid-cols-3 lg:gap-12">
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
