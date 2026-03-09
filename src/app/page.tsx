import SectionContainer from "@/components/layout/section-container";
import CarouselAuto from "@/components/transitions/carousel-auto";
import HeroTransition from "@/components/transitions/hero-transition";
import RevealCard from "@/components/transitions/reveal-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { WHATSAPP_LINK } from "@/constant";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Flame,
  FlaskConical,
  MessageCircle,
  Palmtree,
  Pill,
  QuoteIcon,
  Settings,
  ShieldCheck,
  Smile,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <SectionContainer className="h-[calc(var(--height-screen)-56px)] min-h-[600px] md:h-[calc(var(--height-screen)-64px)] md:max-h-[1050px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about3.jpg"
          alt="Industrial Background"
          fill
          className="h-full w-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="from-background via-background/80 absolute inset-0 bg-linear-to-r via-50% to-transparent"></div>
      </div>

      <HeroTransition className="relative z-10 flex h-full max-w-3xl -translate-y-4 flex-col items-start justify-center">
        {/* use Badge components */}
        <Badge className="bg-primary/10 text-primary mb-6 rounded-full px-4 py-1 text-sm font-semibold tracking-wider uppercase">
          Pemimpin Pasar Transmisi Daya
        </Badge>
        <h1 className="mb-6 text-5xl leading-[1.1] font-semibold md:text-7xl">
          Solusi Rantai <span className="text-primary">Presisi</span> Untuk
          Efisiensi Pabrik
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl text-xl md:text-2xl">
          IndoChain menyediakan komponen conveyor chain dan sprocket kelas dunia
          yang dirancang khusus untuk meningkatkan produktivitas pabrik kelapa
          sawit di seluruh Indonesia.
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
    name: "Kelapa Sawit",
    icon: Palmtree,
  },
  {
    name: "Petrokimia",
    icon: Truck,
  },
  {
    name: "Energi",
    icon: Flame,
  },
  {
    name: "Kimia",
    icon: FlaskConical,
  },
  {
    name: "Farmasi",
    icon: Pill,
  },
];

function LayananIndustri() {
  return (
    <SectionContainer className="flex flex-col gap-3 py-24 pb-32 lg:py-32 lg:pb-40">
      <h2 className="text-3xl font-bold max-sm:max-w-[16ch] lg:text-4xl">
        Sektor Industri Yang Kami Layani
      </h2>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">
        <p className="text-muted-foreground text-base lg:text-lg">
          Meskipun spesialisasi kami adalah Kelapa Sawit, keahlian teknik kami
          mencakup berbagai industri berat lainnya.
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
              Konsultasi Sektor Anda <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {SEKTOR_INDUSTRI.map((sektor) => (
          <RevealCard
            randomDelay
            delay={0.6}
            threshold={0.3}
            key={sektor.name}
            className="bg-card border-border hover:bg-accent hover:border-accent-foreground flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-4 py-8 transition-all duration-300 hover:-translate-y-1"
          >
            <sektor.icon className="size-10" />
            <h3 className="text-lg font-bold">{sektor.name}</h3>
          </RevealCard>
        ))}
      </div>
    </SectionContainer>
  );
}

const REASONS_TO_CHOOSE_US = [
  {
    title: "Material Kelas Premium",
    description:
      "Kami menggunakan material berkualitas tinggi untuk memproduksi conveyor chain dan sprocket yang tahan lama dan tahan terhadap cuaca.",
    icon: CheckCircle,
  },
  {
    title: "Keunggulan Teknik",
    description:
      "Kami memiliki tim teknis berpengalaman yang memastikan produk kami memenuhi standar tertinggi.",
    icon: Brain,
  },
  {
    title: "Solusi Kustom",
    description:
      "Kami menyediakan solusi konveyor chain dan sprocket yang disesuaikan dengan kebutuhan industri Anda.",
    icon: Settings,
  },
  {
    title: "Jaminan Kualitas",
    description:
      "Kami memiliki sistem kontrol kualitas yang ketat untuk memastikan produk kami memenuhi standar tertinggi.",
    icon: ShieldCheck,
  },
  {
    title: "Kepuasan Pelanggan",
    description:
      "Kami memiliki tim pelanggan berpengalaman yang memastikan produk kami memenuhi standar tertinggi.",
    icon: Smile,
  },
];

function AlasanMemilihKami() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col items-center gap-8 py-20 md:grid md:grid-cols-7 md:gap-12"
    >
      <div className="relative aspect-4/3 flex-1 md:col-span-3">
        <Image
          src="/about.jpg"
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
          Kami bukan sekadar pemasok; kami adalah mitra teknis Anda dalam
          menjaga kelancaran operasional pabrik.
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
      "Conveyor chain adalah komponen yang digunakan untuk mengangkut material dari satu tempat ke tempat lain.",
    image: "/photo_20_2024-02-01_08-37-17.jpg",
  },
  {
    name: "Sprocket",
    description:
      "Sprocket adalah komponen yang digunakan untuk mengangkut material dari satu tempat ke tempat lain.",
    image: "/photo_20_2024-02-01_08-37-17.jpg",
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
          Komponen kritis yang dirancang untuk durabilitas ekstrem.
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
    image: "/about.jpg",
    name: "Fasilitas Produksi",
  },
  {
    id: 2,
    image: "/about3.jpg",
    name: "Stok Gudang",
  },
  {
    id: 3,
    image: "/photo_20_2024-02-01_08-37-17.jpg",
    name: "Karyawan",
  },
  {
    id: 4,
    image: "/about.jpg",
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
          Sekilas pandang fasilitas produksi dan stok gudang kami.
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
    id: 2,
    name: "Ibu Maya Lestari",
    job: "Direktur PT. Petrokimia Gresik",
    testimoni:
      "Sprocket dari IndoChain sangat presisi dan tahan lama. Kualitasnya konsisten, membuat kami sangat puas dengan produk mereka.",
  },
  {
    id: 3,
    name: "Bpk. Ahmad Soejo",
    job: "Manager PKS, Sumatera Utara",
    testimoni:
      "Konsultasi teknis dari tim IndoChain sangat membantu kami meningkatkan efisiensi produksi. Respons mereka cepat dan profesional.",
  },
  {
    id: 1,
    name: "Bpk. Agus Setiawan",
    job: "Manager PKS, Sumatera Utara",
    testimoni:
      "Rantai dari IndoChain memiliki umur pakai 30% lebih lama dibanding merk sebelumnya. Ini sangat mengurangi biaya perawatan dan meningkatkan produktivitas.",
  },
  {
    id: 4,
    name: "Ibu Rina Dewi",
    job: "Supervisor Produksi, PT. Agro Nusantara",
    testimoni:
      "Pelayanan IndoChain luar biasa. Mereka selalu siap memberikan solusi tepat dan produk selalu sesuai spesifikasi.",
  },
  {
    id: 5,
    name: "Bpk. Hendra Pratama",
    job: "Engineering Head, PT. Sawit Makmur",
    testimoni:
      "Penggunaan komponen IndoChain membuat proses produksi lebih stabil dan minim gangguan. Kami merasa investasi ini sangat berharga.",
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
              <div className="z-10 flex flex-col">
                <h2 className="text-base font-semibold lg:text-lg">
                  {testimoni.name}
                </h2>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {testimoni.job}
                </p>
              </div>
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
