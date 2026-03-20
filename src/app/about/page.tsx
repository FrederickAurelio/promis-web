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
        Spesialis Rantai Konveyor Pabrik Kelapa Sawit
        </h1>
        <p className="text-muted-foreground mx-auto max-w-4xl text-base lg:text-lg">
        Promis adalah solusi rantai konveyor presisi bagi industri kelapa sawit sejak 2017. Kami percaya pada kekuatan kualitas. itulah mengapa kami menyertakan garansi penuh, inspeksi rutin, dan dukungan teknologi terbaik untuk menjamin investasi Anda tetap produktif dalam jangka panjang.
        </p>
      </div>
    </SectionContainer>
  );
}

const TIMELINE_ITEMS = [
  {
    year: "1995 - 2016",
    title: "Tiga Dekade Keahlian Teknis",
    desc: "Membangun landasan kuat dengan lebih dari 30 tahun pengalaman mendalam dalam manufaktur dan solusi rantai industri.",
  },
  {
    year: "2017",
    title: "Pendirian PT Inti Perkasa Panca Surya",
    desc: "Resmi beroperasi di Medan sebagai pusat solusi rantai konveyor, fokus pada efisiensi operasional pabrik kelapa sawit.",
  },
  {
    year: "2019",
    title: "Ekspansi & Jangkauan Nasional", 
    desc: "Memperluas distribusi dari Kalimantan sampai papua untuk mendukung percepatan industri sawit di luar Sumatera.",
  },
  {
    year: "2021",
    title: "Transformasi Brand: Promis",
    desc: "Evolusi menjadi brand Promis untuk mempertegas standar kualitas premium dan dedikasi pada inovasi rantai konveyor.",
  },
  {
    year: "2026",
    title: "Dinamika Industri & Era Digital",
    desc: "Mengintegrasikan teknologi manufaktur mutakhir dengan sistem digital untuk mendukung efisiensi industri masa depan.",
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
    name: "Layanan Kunjungan Pabrik",
    description:
      "Kami menawarkan kunjungan pabrik 3 kali dalam setahun untuk memastikan kinerja optimal conveyor chain dan melakukan evaluasi  menyeluruh  terhadap  kualitas operasional",
  },
  {
    icon: Trophy,
    name: "Laporan Berkala",
    description:
      "Setiap kunjungan dilengkapi dengan laporan mendetail yang mencakup analisis performa, pemeliharaan, dan saran peningkatan, guna memastikan  conveyor  chain  Anda  tetap bekerja secara efisien",
  },
  {
    icon: Sparkles,
    name: "Garansi Produk",
    description:
      "Kami  memberikan  garansi  produk  hingga 10.000 jam (2 tahun), yang menjamin kualitas dan daya tahan conveyor chain dalam jangka waktu panjang",
  },
];

function NilaiKami() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-16 py-24 pb-32"
    >
      <h3 className="text-center text-2xl font-bold md:text-3xl">
        Servis Kami
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
  "Presisi Mikron: Verifikasi dimensi digital untuk memenuhi standar toleransi internasional.",
  "Uji Kekerasan: Memastikan ketahanan aus maksimal melalui heat treatment yang terverifikasi.",
  "Beban Tarik: Pengujian kekuatan putus untuk menjamin keamanan operasional puncak.",
  "Perakitan Ahli: Proses sistematis untuk menjamin konsistensi dan keandalan produk.",
  "Logistik Aman: Pengemasan standar ekspor dengan proteksi kayu untuk pengiriman laut.",
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
          Quality Control
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg">
        Standar manufaktur tinggi dengan kontrol kualitas berlapis guna menjamin performa ekstrem dan unit yang presisi.        </p>
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
    image: "/Galeri-Stok2.jpg",
    name: "Ketersediaan Stok Unit",
    description: "Gudang pusat dengan stok komponen lengkap yang siap dikirim untuk meminimalisir waktu henti (downtime) produksi.",
  },
  {
    id: 2,
    image: "/Galeri-Palmex2024.jpeg",
    name: "Event Palmex 2024",
    description: "Partisipasi Promis dalam pameran teknologi kelapa sawit terbesar.",
  },
  {
    id: 3,
    image: "/Galeri-Kemas.jpg",
    name: "Proses Pengemasan",
    description: "Standar pengemasan aman untuk memastikan produk sampai dalam kondisi prima.",
  },
  {
    id: 4,
    image: "/Galeri-Stok.jpg",
    name: "Ketersediaan Stok",
    description: "Gudang penyimpanan dengan stok rantai industri yang selalu siap kirim.",
  },
  {
    id: 5,
    image: "/Galeri-Produksi.jpg",
    name: "Lini Produksi",
    description: "Proses pembuatan rantai menggunakan teknologi perakitan terkini.",
  },
  {
    id: 6,
    image: "/Galeri-Palmex2025.jpg",
    name: "Palmex 2025 Highlights",
    description: "Menampilkan inovasi terbaru sprocket dan rantai transmisi di Palmex.",
  },
  {
    id: 7,
    image: "/Galeri-Palmex2025-2.jpg",
    name: "Konsultasi Teknis pada Palmex 2025",
    description: "Interaksi dengan mitra industri mengenai solusi kebutuhan pabrik.",
  },
  {
    id: 8,
    image: "/Galeri-Pabrik3.jpeg",
    name: "Standar Kontrol Kualitas",
    description: "Proses inspeksi teknis mandiri untuk memastikan setiap rantai memiliki ketahanan beban dan durabilitas maksimal.",
  },
  {
    id: 9,
    image: "/Galeri-Pabrik4.jpeg",
    name: "Kunjungan Pabrik",
    description: "Membuat laporan dan mengecek kondisi ketahan rantai kustomer kami untuk memastikan kepuasan pelanggan",
  },
  {
    id: 10,
    image: "/Galeri-Stok3.jpg",
    name: "Logistik Pengiriman",
    description: "Siap mendistribusikan kebutuhan sparepart ke seluruh pabrik sawit Indonesia.",
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
