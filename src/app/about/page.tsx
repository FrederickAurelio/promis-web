import SectionContainer from "@/components/layout/section-container";
import RevealCard from "@/components/transitions/reveal-card";
import { Button } from "@/components/ui/button";
import { Handshake, Link, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";

function Intro() {
  return (
    <SectionContainer className="py-20 pb-24 flex flex-col gap-12">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-sm text-primary uppercase tracking-wider">
          PROFIL PERUSAHAAN
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-[1.1]">
          Dedikasi Untuk Industri Indonesia
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg max-w-4xl mx-auto">
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
    <SectionContainer className="py-24 pb-32 flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold">Perjalanan Kami</h3>
        <p className="text-muted-foreground text-lg">
          Dedikasi kami dalam menyediakan solusi rantai industri dari tahun ke
          tahun.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/30 to-primary/5 -translate-x-1/2" />

        <div className="flex flex-col gap-16 md:gap-12">
          {TIMELINE_ITEMS.map((milestone, idx) => (
            <RevealCard key={idx} delay={0.3}>
              <div
                className={`relative flex items-center justify-between md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Spacer untuk Desktop (sisi kosong) */}
                <div className="hidden md:block w-[45%]" />

                {/* Titik Penanda (Sejajar tengah tahun) */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]" />

                {/* Kotak Konten */}
                <div className="w-full md:w-[45%] pl-10 md:pl-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold text-foreground">
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
      className="py-24 pb-32 flex flex-col gap-16"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center">
        Nilai-Nilai Utama Kami
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {NILAI_KAMI_ITEMS.map((nilai) => (
          <div
            className="flex flex-col gap-2 justify-center items-center p-8 bg-card border border-border rounded-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer hover:border-accent-foreground hover:bg-white"
            key={nilai.name}
          >
            <nilai.icon className="size-10 mb-3" />
            <h4 className="text-xl font-bold text-center">{nilai.name}</h4>
            <p className="text-muted-foreground text-base lg:text-lg text-center">
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
    <SectionContainer className="py-20 flex flex-col-reverse gap-8 md:gap-12 md:grid md:grid-cols-7 items-center">
      <Image
        src="/photo_20_2024-02-01_08-37-17.jpg"
        alt="Industrial Background"
        width={600}
        height={600}
        className="object-cover aspect-4/3 rounded-xl flex-1 md:col-span-3 shadow-lg"
      />
      <div className="flex-1 flex flex-col gap-4 w-full md:col-span-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Proses Manufaktur & Kontrol Kualitas
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg">
          Kami memastikan setiap komponen diproduksi dengan presisi mikron untuk
          menjamin performa optimal.
        </p>
        <div className="flex flex-col gap-4">
          {PROCESS_MANUFACTURING_ITEMS.map((process, idx) => (
            <div className="flex items-center gap-2.5" key={idx}>
              <div className="size-8 shrink-0 flex items-center justify-center rounded-full border-2 border-primary/20 text-primary">
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
      className="py-20 pb-32 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Geleri Dokumentasi
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Melihat lebih dekat fasilitas, stok, dan pengiriman kami ke seluruh
          Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-6">
        {GALLERY_ITEMS.map((gallery) => (
          <div
            key={gallery.id}
            className="bg-card border border-border rounded-xl flex flex-col overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Image
              src={gallery.image}
              alt={gallery.name}
              width={1000}
              height={1000}
              className="w-full h-64 object-cover group-hover:scale-[102%] transition-transform duration-500"
            />
            <div className="flex flex-col gap-1 p-4 pb-6 lg:p-6 lg:pb-8">
              <h3 className="text-lg lg:text-xl font-bold">{gallery.name}</h3>
              <p className="text-muted-foreground text-base">
                {gallery.description}
              </p>
            </div>
          </div>
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
