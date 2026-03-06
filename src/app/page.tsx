import PageContainer from "@/components/layout/page-container";
import HeroTransition from "@/components/transitions/hero-transition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Flame,
  FlaskConical,
  Palmtree,
  Pill,
  Settings,
  ShieldCheck,
  Smile,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-[calc(var(--height-screen)-56px)] md:h-[calc(var(--height-screen)-64px)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about3.jpg"
          alt="Industrial Background"
          fill
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 via-50% to-transparent"></div>
      </div>

      <HeroTransition className="max-w-3xl h-full flex flex-col justify-center items-start z-10 relative -translate-y-4">
        {/* use Badge components */}
        <Badge className="px-4 py-1 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6 uppercase tracking-wider">
          Pemimpin Pasar Transmisi Daya
        </Badge>
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-[1.1]">
          Solusi Rantai <span className="text-primary">Presisi</span> Untuk
          Efisiensi Pabrik
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
          IndoChain menyediakan komponen conveyor chain dan sprocket kelas dunia
          yang dirancang khusus untuk meningkatkan produktivitas pabrik kelapa
          sawit di seluruh Indonesia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="text-lg font-semibold"
            size="xl"
            variant="default"
            asChild
          >
            <Link href="/products">
              <div className="w-full flex items-center justify-between gap-2">
                Jelajahi Produk <ArrowRight className="size-5" />
              </div>
            </Link>
          </Button>

          <Button className="text-lg" size="xl" variant="secondary" asChild>
            <Link href="/about">
              <div className="w-full flex items-center justify-between gap-2">
                Tentang Kami <ArrowRight className="size-5" />
              </div>
            </Link>
          </Button>
        </div>
      </HeroTransition>
    </section>
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
    <section className="py-24 pb-32 flex flex-col gap-3">
      <h2 className="text-3xl lg:text-4xl font-bold max-sm:max-w-[16ch]">
        Sektor Industri Yang Kami Layani
      </h2>
      <div className="flex justify-between md:items-end gap-4 md:gap-8 flex-col md:flex-row mb-7">
        <p className="text-muted-foreground text-base lg:text-lg">
          Meskipun spesialisasi kami adalah Kelapa Sawit, keahlian teknik kami
          mencakup berbagai industri berat lainnya.
        </p>
        <div>
          <Button
            className="px-0! py-0! leading-none h-fit! text-base! lg:text-lg!"
            variant="link"
            asChild
          >
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Sektor Anda <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {SEKTOR_INDUSTRI.map((sektor) => (
          <div
            key={sektor.name}
            className="bg-card border border-border rounded-xl p-4 py-8 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:border-accent-foreground transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <sektor.icon className="size-10" />
            <h3 className="text-lg font-bold">{sektor.name}</h3>
          </div>
        ))}
      </div>
    </section>
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
    <section className="py-20 bg-card flex flex-col gap-8 md:gap-12 md:grid md:grid-cols-7 items-center">
      <Image
        src="/about.jpg"
        alt="Industrial Background"
        width={600}
        height={600}
        className="object-cover aspect-4/3 rounded-xl flex-1 md:col-span-3 shadow-lg"
      />
      <div className="flex-1 flex flex-col gap-4 w-full md:col-span-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Mengapa Memilih Promis?
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg">
          Kami bukan sekadar pemasok; kami adalah mitra teknis Anda dalam
          menjaga kelancaran operasional pabrik.
        </p>
        <div className="flex flex-col gap-3">
          {REASONS_TO_CHOOSE_US.map((reason) => (
            <div className="flex items-center gap-4" key={reason.title}>
              <div className="size-10 shrink-0 flex items-center justify-center rounded-full border-2 border-primary/20 text-primary">
                <reason.icon className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="text-muted-foreground text-base ">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-20 pb-32 flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Produk Pilihan Kami
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg text-center">
          Komponen kritis yang dirancang untuk durabilitas ekstrem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="bg-card border border-border rounded-xl flex flex-col overflow-hidden cursor-pointer group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="w-full h-80 object-cover group-hover:scale-[102%] transition-transform duration-500"
            />
            <div className="flex flex-col gap-2 p-4 pb-6 lg:p-6 lg:pb-8 lg:gap-3">
              <h3 className="text-lg lg:text-xl font-bold">{product.name}</h3>
              <p className="text-muted-foreground text-base lg:text-lg">
                {product.description}
              </p>
              <div>
                <Button
                  className="px-0! py-0! leading-none h-fit! text-base! lg:text-lg!"
                  variant="link"
                  asChild
                >
                  <Link
                    href="/products"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Detail Spek{" "}
                    <ArrowRight className="size-4 -translate-y-px" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
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
    <section className="py-24 pb-32 flex flex-col gap-2 md:gap-0">
      <h2 className="text-3xl lg:text-4xl font-bold max-sm:max-w-[16ch] lg:leading-none">
        Galeri Operasional
      </h2>
      <div className="flex justify-between md:items-end gap-4 md:gap-8 flex-col md:flex-row mb-7">
        <p className="text-muted-foreground text-base lg:text-lg">
          Sekilas pandang fasilitas produksi dan stok gudang kami.
        </p>
        <div className="max-md:flex max-md:justify-end">
          <Button
            className="lg:text-lg font-semibold lg:h-12 lg:px-8 "
            size="lg"
            variant="secondary"
            asChild
          >
            <Link href="/about">Lihat Galeri Lengkap</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
        {GALLERY_OPERATIONAL.map((gallery) => (
          <div
            className="w-full h-full hover:scale-[102%] transition-transform duration-300 cursor-pointer"
            key={gallery.id}
          >
            <Image
              src={gallery.image}
              alt={gallery.name}
              width={500}
              height={500}
              className="w-full h-full object-cover aspect-square rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <PageContainer>
        <Hero />
      </PageContainer>
      <PageContainer>
        <LayananIndustri />
        <AlasanMemilihKami />
        <ProdukPilihanKami />
        <GaleriOperasional />
      </PageContainer>
    </>
  );
}
