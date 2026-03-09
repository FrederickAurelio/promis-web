import SectionContainer from "@/components/layout/section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Promis Conveyor Chain – telepon, WhatsApp, email, alamat kantor di Medan. Jam operasional dan FAQ.",
  openGraph: {
    title: "Kontak | Promis Conveyor Chain",
    description:
      "Kontak Promis – telepon, email, alamat. Tim siap membantu kebutuhan conveyor chain dan sprocket.",
  },
};
import {
  ADDRESS,
  EMAIL,
  MAILTO_LINK,
  MAPS_EMBED_URL,
  MAPS_QUERY_URL,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/constant";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: "Telepon / WhatsApp",
    value: PHONE_DISPLAY,
    href: WHATSAPP_LINK,
  },
  { icon: MailIcon, label: "Email", value: EMAIL, href: MAILTO_LINK },
  {
    icon: MapPinIcon,
    label: "Alamat Kantor",
    value: ADDRESS,
    href: MAPS_QUERY_URL,
  },
];

const OPERATIONAL_HOURS = [
  {
    day: "Senin - Jumat",
    hours: "08:30 - 17:00",
  },
  {
    day: "Sabtu",
    hours: "08:30 - 12:30",
  },
  {
    day: "Minggu",
    hours: "Tutup",
  },
];

function HubungiKami() {
  return (
    <SectionContainer className="flex flex-col gap-8 py-24 pb-32">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Hubungi Kami
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
          Tim kami siap membantu kebutuhan teknis dan penawaran harga untuk
          pabrik Anda.
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="bg-card border-border flex flex-col gap-3 rounded-xl border p-8 shadow-md">
            <h3 className="text-lg font-bold md:text-xl lg:text-2xl">
              Infomasi Kontak
            </h3>
            {CONTACT_INFO.map((info) => (
              <Link
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 lg:gap-4"
                key={info.label}
              >
                <div className="border-primary/20 text-primary bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/40 shrink-0 rounded-xl border p-3 transition-colors duration-200">
                  <info.icon className="size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-foreground text-sm font-semibold md:text-base">
                    {info.label}
                  </p>
                  <p className="text-muted-foreground group-hover:text-primary decoration-primary/30 text-base font-medium underline-offset-4 transition-colors group-hover:underline lg:text-lg">
                    {info.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-accent border-border flex flex-col gap-2 rounded-xl border p-8 shadow-md">
            <h3 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
              Jam Operasional
            </h3>
            {OPERATIONAL_HOURS.map((hour, idx) => (
              <React.Fragment key={hour.day}>
                <div className="flex items-center justify-between gap-2 text-base lg:text-lg">
                  <p className="text-muted-foreground">{hour.day}</p>
                  <p className="text-muted-foreground">{hour.hours}</p>
                </div>
                {idx !== OPERATIONAL_HOURS.length - 1 && (
                  <Separator className="text-muted-foreground bg-muted-foreground/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="border-border h-full min-h-[420px] w-full overflow-hidden rounded-xl border shadow-md">
          <iframe
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </SectionContainer>
  );
}

const FAQ_ITEMS = [
  {
    id: "min-order",
    question: "Apakah ada minimum order?",
    answer:
      "Kami melayani order kecil maupun besar. Untuk kebutuhan proyek atau pengadaan rutin, silakan hubungi tim penjualan kami untuk penawaran dan syarat minimum order.",
  },
  {
    id: "delivery",
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Waktu pengiriman tergantung lokasi dan ketersediaan stok. Untuk area Jawa umumnya 3–7 hari kerja. Wilayah luar Jawa dapat dikonfirmasi setelah pemesanan.",
  },
  {
    id: "payment",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima transfer bank, pembayaran via faktur (untuk pelanggan terdaftar), dan dapat mendiskusikan skema pembayaran sesuai kebutuhan proyek Anda.",
  },
  {
    id: "warranty",
    question: "Apakah produk memiliki garansi?",
    answer:
      "Produk kami dilengkapi jaminan kualitas. Detail garansi dan syarat berlaku dapat ditanyakan kepada tim kami saat pemesanan.",
  },
  {
    id: "catalog",
    question: "Bagaimana cara mendapatkan katalog atau daftar harga?",
    answer:
      "Anda dapat meminta katalog dan penawaran harga melalui telepon, WhatsApp, atau email. Tim kami akan mengirimkan dokumen sesuai kebutuhan Anda.",
  },
  {
    id: "custom",
    question: "Apakah bisa pesan produk sesuai spesifikasi custom?",
    answer:
      "Ya. Kami melayani pemesanan sesuai spesifikasi teknis Anda. Silakan hubungi tim teknis kami untuk konsultasi dan penawaran.",
  },
  {
    id: "support",
    question: "Apakah ada dukungan teknis setelah pembelian?",
    answer:
      "Kami menyediakan dukungan teknis untuk pemasangan, perawatan, dan troubleshooting. Hubungi kami kapan saja untuk bantuan.",
  },
  {
    id: "return",
    question: "Bagaimana kebijakan pengembalian atau komplain?",
    answer:
      "Untuk komplain kualitas atau kesalahan pengiriman, laporkan dalam waktu yang disepakati. Kami akan memeriksa dan menyelesaikan sesuai kebijakan perusahaan.",
  },
];

function FAQSection() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-8 py-24 pb-32 md:gap-12"
    >
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        Pertanyaan Umum (FAQ)
      </h2>
      <div className="w-full max-w-4xl md:mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:text-primary text-left text-base transition-colors hover:no-underline md:text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-primary/40 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HubungiKami />
      <FAQSection />
    </>
  );
}
