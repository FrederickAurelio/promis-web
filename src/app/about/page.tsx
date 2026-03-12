import SectionContainer from "@/components/layout/section-container";
import RevealCard from "@/components/transitions/reveal-card";
import { Handshake, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import { COMPANY_NAME, DEFAULT_OG_IMAGE } from "@/constant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Profil Promis Conveyor Chain dan komitmen kami menyediakan conveyor chain serta sprocket berkualitas untuk kebutuhan industri Indonesia.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `Tentang Kami | ${COMPANY_NAME}`,
    description:
      "Pelajari profil, perjalanan, dan nilai kerja Promis Conveyor Chain sebagai mitra rantai industri di Indonesia.",
    url: "/about",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `Tentang Kami | ${COMPANY_NAME}`,
    description:
      "Profil dan perjalanan Promis Conveyor Chain dalam melayani kebutuhan rantai industri di Indonesia.",
    images: [DEFAULT_OG_IMAGE],
  },
};

function Intro() {
  return (
    <SectionContainer className="flex flex-col gap-12 py-20 pb-24">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-primary text-sm tracking-wider uppercase">
          PROFIL PERUSAHAAN
        </span>
        <h1 className="mb-6 text-4xl leading-[1.1] font-semibold md:text-5xl">
          Dedikasi Untuk Industri Indonesia
        </h1>
        <p className="text-muted-foreground mx-auto max-w-4xl text-base lg:text-lg">
          Sejak tahun 2010, IndoChain telah berkomitmen untuk menjadi tulang
          punggung sistem transmisi mekanikal di Indonesia. Kami menggabungkan
          teknologi manufaktur modern dengan pemahaman mendalam tentang
          tantangan operasional di lapangan.
        </p>
      </div>
    </SectionContainer>
  );
}

const TIMELINE_ITEMS = [
  {
    year: "2010",
    title: "Pendirian Perusahaan",
    desc: "IndoChain resmi berdiri di Medan, Sumatera Utara, melayani pabrik sawit lokal.",
  },
  {
    year: "2014",
    title: "Ekspansi Nasional",
    desc: "Membuka kantor cabang di Kalimantan Barat dan Sulawesi untuk menjangkau lebih banyak klien.",
  },
  {
    year: "2018",
    title: "Sertifikasi ISO 9001",
    desc: "Mendapatkan pengakuan internasional untuk sistem manajemen kualitas manufaktur kami.",
  },
  {
    year: "2022",
    title: "Inovasi Produk Baru",
    desc: "Meluncurkan lini 'Extreme-Duty' untuk rantai konveyor dengan ketahanan korosi tinggi.",
  },
  {
    year: "2025",
    title: "Pengembangan Teknologi",
    desc: "Mengembangkan teknologi rantai konveyor yang lebih efisien dan berkualitas tinggi.",
  },
];

function Timeline() {
  return (
    <SectionContainer className="flex flex-col gap-16 py-24 pb-32">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
        <h3 className="text-3xl font-bold md:text-5xl">Perjalanan Kami</h3>
        <p className="text-muted-foreground text-lg">
          Dedikasi kami dalam menyediakan solusi rantai industri dari tahun ke
          tahun.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="from-primary via-primary/30 to-primary/5 absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 bg-linear-to-b md:left-1/2" />

        <div className="flex flex-col gap-16 md:gap-12">
          {TIMELINE_ITEMS.map((milestone, idx) => (
            <RevealCard key={idx} delay={0.3}>
              <div
                className={`relative flex items-center justify-between md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer untuk Desktop (sisi kosong) */}
                <div className="hidden w-[45%] md:block" />

                {/* Titik Penanda (Sejajar tengah tahun) */}
                <div className="bg-background border-primary absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 shadow-[0_0_0_4px_rgba(var(--primary),0.1)] md:left-1/2" />

                {/* Kotak Konten */}
                <div className="w-full pl-10 md:w-[45%] md:pl-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary text-3xl font-black tracking-tighter">
                      {milestone.year}
                    </span>
                    <h4 className="text-foreground text-xl font-bold">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

const NILAI_KAMI_ITEMS = [
  {
    icon: Handshake,
    name: "Integritas",
    description:
      "Kami memegang teguh kejujuran dalam setiap transaksi dan spesifikasi produk yang kami berikan.",
  },
  {
    icon: Trophy,
    name: "Kualitas Tanpa Kompromi",
    description:
      "Setiap rantai dan sprocket melewati 5 tahap inspeksi sebelum sampai ke tangan pelanggan.",
  },
  {
    icon: Sparkles,
    name: "Inovasi Berkelanjutan",
    description:
      "Terus melakukan riset material untuk menciptakan produk yang lebih ringan namun lebih kuat.",
  },
];

function NilaiKami() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-16 py-24 pb-32"
    >
      <h3 className="text-center text-2xl font-bold md:text-3xl">
        Nilai-Nilai Utama Kami
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {NILAI_KAMI_ITEMS.map((nilai) => (
          <div
            className="bg-card border-border hover:border-accent-foreground flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white"
            key={nilai.name}
          >
            <nilai.icon className="mb-3 size-10" />
            <h4 className="text-center text-xl font-bold">{nilai.name}</h4>
            <p className="text-muted-foreground text-center text-base lg:text-lg">
              {nilai.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const PROCESS_MANUFACTURING_ITEMS = [
  "Seleksi material baja paduan bersertifikat.",
  "Pemotongan presisi menggunakan mesin CNC terbaru.",
  "Proses Heat Treatment untuk kekerasan permukaan yang optimal.",
  "Perakitan otomatis untuk konsistensi kualitas.",
  "Uji beban tarik (Tensile Test) pada setiap batch produksi.",
];

function ProsesManufaktur() {
  return (
    <SectionContainer className="flex flex-col-reverse items-center gap-8 py-20 md:grid md:grid-cols-7 md:gap-12">
      <div className="relative aspect-4/3 flex-1 md:col-span-3">
        <Image
          src="/photo_20_2024-02-01_08-37-17.jpg"
          alt="Industrial Background"
          fill
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
      <div className="flex w-full flex-1 flex-col gap-4 md:col-span-4">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Proses Manufaktur & Kontrol Kualitas
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg">
          Kami memastikan setiap komponen diproduksi dengan presisi mikron untuk
          menjamin performa optimal.
        </p>
        <div className="flex flex-col gap-4">
          {PROCESS_MANUFACTURING_ITEMS.map((process, idx) => (
            <div className="flex items-center gap-2.5" key={idx}>
              <div className="border-primary/20 text-primary flex size-8 shrink-0 items-center justify-center rounded-full border-2">
                <span className="text-base font-normal">{idx + 1}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-muted-foreground text-base md:text-lg">
                  {process}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "/photo_20_2024-02-01_08-37-17.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 2,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 3,
    image: "/about3.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 4,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 5,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 6,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 7,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 8,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 9,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
  {
    id: 10,
    image: "/about.jpg",
    name: "Fasilitas Produksi",
    description: "Melihat lebih dekat fasilitas produksi kami.",
  },
];

function Galeri() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-8 py-20 pb-32"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-center text-2xl font-bold md:text-3xl">
          Geleri Dokumentasi
        </h3>
        <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
          Melihat lebih dekat fasilitas, stok, dan pengiriman kami ke seluruh
          Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {GALLERY_ITEMS.map((gallery) => (
          <RevealCard
            once
            key={gallery.id}
            delay={0.6}
            randomDelay
            threshold={0.1}
            className="bg-card border-border group flex cursor-pointer flex-col overflow-hidden rounded-xl border shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-64 w-full">
              <Image
                src={gallery.image}
                alt={gallery.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[102%]"
              />
            </div>
            <div className="flex flex-col gap-1 p-4 pb-6 lg:p-6 lg:pb-8">
              <h3 className="text-lg font-bold lg:text-xl">{gallery.name}</h3>
              <p className="text-muted-foreground text-base">
                {gallery.description}
              </p>
            </div>
          </RevealCard>
        ))}
      </div>
    </SectionContainer>
  );
}

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Timeline />
      <NilaiKami />
      <ProsesManufaktur />
      <Galeri />
    </>
  );
}
