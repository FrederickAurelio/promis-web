import SectionContainer from "@/components/layout/section-container";
import CarouselAuto from "@/components/transitions/carousel-auto";
import HeroTransition from "@/components/transitions/hero-transition";
import RevealCard from "@/components/transitions/reveal-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { COMPANY_NAME, DEFAULT_OG_IMAGE, WHATSAPP_LINK } from "@/constant";
import {
  Award,
  ArrowRight,
  Cog,
  BadgeCheck,
  Factory,
  Headset,
  Link2,
  Microscope,
  MessageCircle,
  Palmtree,
  QuoteIcon,
  Settings,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conveyor Chain & Sprocket untuk Industri",
  description:
    "Promis Conveyor Chain menghadirkan conveyor chain dan sprocket berkualitas untuk pabrik kelapa sawit dengan dukungan teknis dan pengiriman ke seluruh Indonesia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY_NAME} | Conveyor Chain & Sprocket`,
    description:
      "Conveyor chain dan sprocket berkualitas untuk pabrik kelapa sawit, lengkap dengan konsultasi teknis dan pengiriman nasional.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${COMPANY_NAME} | Conveyor Chain & Sprocket`,
    description:
      "Conveyor chain dan sprocket berkualitas untuk pabrik kelapa sawit, lengkap dengan konsultasi teknis dan pengiriman nasional.",
    images: [DEFAULT_OG_IMAGE],
  },
};

function Hero() {
  return (
    <SectionContainer className="h-[calc(var(--height-screen)-56px)] min-h-[600px] md:h-[calc(var(--height-screen)-64px)] md:max-h-[1050px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Depan6.jpg"
          alt="Industrial Background"
          fill
          className="h-full w-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="from-background via-background/80 absolute inset-0 bg-linear-to-r via-50% to-transparent"></div>
      </div>

      <HeroTransition className="relative z-10 flex h-full max-w-3xl -translate-y-4 flex-col items-start justify-center">
        {/* use Badge components */}
        <Badge className="bg-primary/10 text-primary mb-6 w-fit shrink rounded-full px-4 py-1 text-xs font-semibold tracking-wider wrap-break-word whitespace-normal uppercase md:text-sm">
          Promis: Jaminan Ketangguhan Rantai Conveyor di Indonesia
        </Badge>
        <h1 className="mb-6 text-4xl leading-[1.1] font-semibold md:text-6xl">
          Solusi <span className="text-primary"> Rantai Conveyor </span>{" "}
          Berkualitas untuk Industri Sawit
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl text-xl md:text-2xl">
          Dengan bertahun- tahunnya pengalaman untuk meningkatkan efisiensi dan
          keandalan dalam proses pengolahan kelapa sawit, dengan menjaga
          kualitas dan kepuasan pelanggan
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            className="text-lg font-semibold"
            size="xl"
            variant="default"
            asChild
          >
            <Link href="/products">
              <div className="flex w-full items-center justify-between gap-2">
                Jelajahi Produk <ArrowRight className="size-5" />
              </div>
            </Link>
          </Button>

          <Button className="text-lg" size="xl" variant="secondary" asChild>
            <Link href="/about">
              <div className="flex w-full items-center justify-between gap-2">
                Tentang Kami <ArrowRight className="size-5" />
              </div>
            </Link>
          </Button>
        </div>
      </HeroTransition>
    </SectionContainer>
  );
}

const SEKTOR_INDUSTRI = [
  {
    name: "Conveyor Chain",
    description:
      "Rantai konveyor spesifikasi berat untuk digester, kranji, dan pengolahan tandan buah segar.",
    icon: Palmtree,
  },
  {
    name: "Transmission Roller Chain",
    description:
      "Rantai transmisi presisi tinggi untuk efisiensi daya maksimal di mesin pengolahan.",
    icon: Settings,
  },
  {
    name: "Sprockets",
    description:
      "Sprocket dengan durabilitas tinggi, dirancang pas untuk meminimalisir keausan rantai.",
    icon: Cog,
  },
  {
    name: "Connecting Links",
    description:
      "Komponen penyambung kritikal dengan kekuatan tarik yang setara dengan rantai utama.",
    icon: Link2,
  },
];

function LayananIndustri() {
  return (
    <SectionContainer className="flex flex-col gap-3 py-24 pb-32 lg:py-32 lg:pb-40">
      <h2 className="text-3xl font-bold max-sm:max-w-[16ch] lg:text-4xl">
        Spesialisasi Solusi Transmisi Pabrik Kelapa Sawit
      </h2>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
        <p className="text-muted-foreground text-base lg:text-lg">
          Kami memusatkan seluruh keahlian teknik kami pada satu sektor:
          Industri Kelapa Sawit. Dengan fokus tunggal ini, kami menjamin setiap
          komponen transmisi yang kami hadirkan memiliki ketahanan operasional
          yang telah teruji menghadapi beban ekstrem di pabrik Anda.
        </p>
        <div>
          <Button
            className="h-fit! px-0! py-0! text-base! leading-none lg:text-lg!"
            variant="link"
            asChild
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasikan Kebutuhan Pabrik Anda
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {SEKTOR_INDUSTRI.map((sektor) => (
          <RevealCard
            randomDelay
            delay={0.6}
            threshold={0.3}
            key={sektor.name}
            className="bg-card border-border hover:bg-accent hover:border-accent-foreground flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-4 py-8 transition-all duration-300 hover:-translate-y-1"
          >
            <sektor.icon className="size-10" />
            <h3 className="text-center text-lg font-bold">{sektor.name}</h3>
          </RevealCard>
        ))}
      </div>
    </SectionContainer>
  );
}

const REASONS_TO_CHOOSE_US = [
  {
    title: "Pengalaman & Keahlian 30 Tahun",
    description:
      "Memiliki rekam jejak tiga dekade dalam memproduksi rantai rol dan konveyor berkualitas tinggi untuk berbagai kebutuhan transmisi industri.",
    icon: Award,
  },
  {
    title: "Teknologi Produksi & Inspeksi Mutakhir",
    description:
      "Didukung peralatan canggih serta keunggulan teknologi heat treatment dan surface treatment untuk memastikan daya tahan produk yang maksimal.",
    icon: Microscope,
  },
  {
    title: "Standar Kualitas Internasional",
    description:
      "Produk diproduksi sesuai Standar Amerika, Eropa, dan Jepang (ANSI, DIN, JIS) menggunakan material premium untuk menjamin masa pakai yang lama.",
    icon: BadgeCheck,
  },
  {
    title: "Kapasitas Produksi & Kustomisasi OEM",
    description:
      "Fasilitas pabrik yang kuat dengan kemampuan layanan kustom dan OEM yang fleksibel untuk memenuhi spesifikasi khusus setiap pelanggan.",
    icon: Factory,
  },
  {
    title: "Harga Kompetitif & Layanan Purna Jual (After Sales Service)",
    description:
      "Memberikan penawaran harga terbaik, dukungan teknis ahli, serta jaminan layanan after-sales untuk mendukung efisiensi bisnis Anda.",
    icon: Headset,
  },
];

function AlasanMemilihKami() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col items-center gap-8 py-20 md:grid md:grid-cols-7 md:gap-12"
    >
      <div className="relative aspect-4/3 flex-1 max-md:w-full md:col-span-3">
        <Image
          src="/Depan4.jpg"
          alt="Industrial Background"
          fill
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
      <div className="flex w-full flex-1 flex-col gap-4 md:col-span-4">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Mengapa Memilih Promis?
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg">
          Kami adalah perusahaan yang menyediakan conveyor chain berkualitas
          tinggi untuk industri kelapa sawit.
        </p>
        <div className="flex flex-col gap-3">
          {REASONS_TO_CHOOSE_US.map((reason) => (
            <div className="flex items-center gap-4" key={reason.title}>
              <div className="border-primary/20 text-primary flex size-10 shrink-0 items-center justify-center rounded-full border-2">
                <reason.icon className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="text-muted-foreground text-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

const PRODUCTS = [
  {
    name: "Conveyor Chain",
    description:
      "Solusi andalan untuk perpindahan material yang efisien dengan ketahanan beban maksimal di berbagai lini produksi.",
    image: "/Depan6.jpg",
  },
  {
    name: "Transmission Chain",
    description:
      "Optimalkan performa mesin dengan transmisi daya yang presisi, menjamin kelancaran operasional jangka panjang.",
    image: "/Depan8.jpg",
  },
];

function ProdukPilihanKami() {
  return (
    <SectionContainer className="flex flex-col gap-12 py-20 pb-32">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Produk Pilihan Kami
        </h2>
        <p className="text-muted-foreground text-center text-base lg:text-lg">
          Komponen Vital dengan Durabilitas dan Masa Pakai Optimal.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="bg-card border-border group flex cursor-pointer flex-col overflow-hidden rounded-xl border"
          >
            <div className="relative h-80 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[102%]"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 pb-6 lg:gap-3 lg:p-6 lg:pb-8">
              <h3 className="text-lg font-bold lg:text-xl">{product.name}</h3>
              <p className="text-muted-foreground text-base lg:text-lg">
                {product.description}
              </p>
              <div>
                <Button
                  className="h-fit! px-0! py-0! text-base! leading-none lg:text-lg!"
                  variant="link"
                  asChild
                >
                  <Link href="/products">
                    Lihat Detail Spek{" "}
                    <ArrowRight className="size-4 -translate-y-px" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const GALLERY_OPERATIONAL = [
  {
    id: 1,
    image: "/Banyak2.jpg",
    name: "Fasilitas Produksi",
  },
  {
    id: 2,
    image: "/Pabrik.jpeg",
    name: "Stok Gudang",
  },
  {
    id: 3,
    image: "/Delivery.jpg",
    name: "Karyawan",
  },
  {
    id: 4,
    image: "/Kemasan.jpeg",
    name: "Produksi",
  },
];

function GaleriOperasional() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-2 py-20 md:gap-0"
    >
      <h2 className="text-3xl font-bold max-sm:max-w-[16ch] lg:text-4xl lg:leading-none">
        Galeri Operasional
      </h2>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
        <p className="text-muted-foreground text-base lg:text-lg">
          Tinjauan Infrastruktur Produksi dan Pusat Distribusi Logistik Kami
        </p>
        <div className="max-md:flex max-md:justify-end">
          <Button
            className="font-semibold lg:h-12 lg:px-8 lg:text-lg"
            size="lg"
            variant="secondary"
            asChild
          >
            <Link href="/about">Lihat Galeri Lengkap</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-5">
        {GALLERY_OPERATIONAL.map((gallery) => {
          return (
            <RevealCard
              className="h-full w-full cursor-pointer transition-transform duration-300 hover:scale-[102%]"
              key={gallery.id}
              randomDelay
              delay={0.5}
            >
              <div className="relative aspect-square h-full w-full">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </RevealCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}

const TESTIMONI = [
  {
    id: 1,
    testimoni:
      "Sprocket Promis yang kami pasang di lini produksi kami sudah jalan hampir dua tahun tanpa perlu diganti. Presisinya pas, jadi rantai juga nggak cepat aus di satu sisi. Sampai sekarang belum ada kendala yang berarti.",
  },
  {
    id: 2,
    testimoni:
      "Awalnya kami cuma coba di satu line dulu. Setelah beberapa bulan dipakai di digester dan conveyor, umur rantainya ternyata lebih awet dibanding yang sebelumnya. Akhirnya kami mulai pakai Promis di beberapa titik lain juga.",
  },
  {
    id: 3,
    testimoni:
      "Sejak ganti ke rantai Promis, frekuensi penggantian rantai jadi lebih jarang. Buat kami itu lumayan membantu karena downtime berkurang dan maintenance juga lebih mudah dijadwalkan.",
  },
  {
    id: 4,
    testimoni:
      "Yang kami apresiasi bukan cuma produknya, tapi juga respons timnya. Waktu kami butuh connecting link mendadak karena produksi sedang jalan, mereka cepat bantu koordinasi sampai barang bisa segera dikirim.",
  },
  {
    id: 5,
    testimoni:
      "Kami sudah pakai beberapa komponen Promis di area transmisi mesin. Selama pemakaian sejauh ini performanya stabil dan tim maintenance juga lebih jarang menerima laporan masalah dibanding sebelumnya.",
  },
];

function Testimoni() {
  return (
    <SectionContainer className="flex flex-col gap-12 py-20 pb-32">
      <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        Apa Kata Mitra Kami
      </h2>
      <CarouselAuto delay={3000}>
        {TESTIMONI.map((testimoni) => (
          <CarouselItem
            className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
            key={testimoni.id}
          >
            <div
              className="bg-card border-border relative flex flex-col gap-4 rounded-xl border p-8"
              key={testimoni.id}
            >
              <div className="absolute top-5 left-5 z-0">
                <QuoteIcon className="text-primary/20 size-7" />
              </div>
              <p className="text-muted-foreground z-10 text-base italic lg:text-lg">
                {testimoni.testimoni}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselAuto>
    </SectionContainer>
  );
}

function ClickToAction() {
  return (
    <SectionContainer
      rootClassName="bg-primary text-primary-foreground"
      className="flex flex-col gap-12 py-16 pb-20 md:py-24 md:pb-28"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Siap Meningkatkan Efisiensi Pabrik Anda?
        </h2>
        <p className="text-center text-base lg:text-lg">
          Hubungi spesialis teknis kami hari ini untuk konsultasi gratis dan
          penawaran harga terbak.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Button
          className="text-primary bg-primary-foreground hover:bg-primary-foreground hover:text-primary flex items-center gap-1.5 text-lg font-semibold shadow-none transition-all duration-200 hover:scale-[102%]"
          size="xl"
          variant="default"
          asChild
        >
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-5" />
            Chat WhatsApp Sekarang
          </Link>
        </Button>
        <Button
          className="border-primary-foreground hover:bg-primary-foreground hover:text-primary border text-lg font-semibold transition-all duration-200 hover:scale-[103%]"
          size="xl"
          variant="default"
          asChild
        >
          <Link href="/contact">Lihat Lokasi Kmai</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <LayananIndustri />
      <AlasanMemilihKami />
      <ProdukPilihanKami />
      <GaleriOperasional />
      <Testimoni />
      <ClickToAction />
    </>
  );
}
