import SectionContainer from "@/components/layout/section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  ADDRESS,
  EMAIL,
  MAILTO_LINK,
  MAPS_EMBED_URL,
  MAPS_QUERY_URL,
  PHONE_DISPLAY,
  LANDLINE_DISPLAY,
  WHATSAPP_LINK,
  LANDLINE_TEL_LINK,
} from "@/constant";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  JsonLd,
  jsonLdScript,
} from "@/lib/seo";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontak Promis Chain | Konsultasi Rantai Conveyor",
  description:
    "Hubungi Promis Chain di Medan untuk konsultasi dan penawaran conveyor chain pabrik kelapa sawit via telepon, WhatsApp, atau email.",
  path: "/contact",
  imageAlt: "Kontak Promis Chain supplier conveyor chain Medan",
});

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: "Telepon / WhatsApp",
    value: PHONE_DISPLAY,
    href: WHATSAPP_LINK,
  },
  {
    icon: PhoneIcon,
    label: "Telepon Kantor",
    value: LANDLINE_DISPLAY,
    href: LANDLINE_TEL_LINK,
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
    day: "Minggu/Libur Nasional",
    hours: "Tutup",
  },
];

function HubungiKami() {
  return (
    <SectionContainer className="flex flex-col gap-8 py-24 pb-32">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Hubungi Promis Chain
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
          Tim kami siap membantu kebutuhan teknis dan penawaran harga conveyor
          chain untuk pabrik kelapa sawit Anda. Lihat juga{" "}
          <Link href="/products" className="text-primary underline-offset-4 hover:underline">
            katalog produk
          </Link>
          .
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="bg-card border-border flex flex-col gap-3 rounded-xl border p-8 shadow-md">
            <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
              Informasi Kontak
            </h2>
            {CONTACT_INFO.map((info) => (
              <Link
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 lg:gap-4"
                key={info.label}
              >
                <div className="border-primary/20 text-primary bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/40 shrink-0 rounded-xl border p-3 transition-colors duration-200">
                  <info.icon className="size-5" aria-hidden />
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
            <h2 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
              Jam Operasional
            </h2>
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
            title="Lokasi kantor Promis Chain di Medan pada Google Maps"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

const FAQ_ITEMS = [
  {
    id: "min-order",
    question: "Apakah ada minimum pemesanan (MOQ)?",
    answer:
      "Kami melayani berbagai skala kebutuhan. Untuk detail MOQ dan ketersediaan stok, silakan hubungi tim sales kami agar penawaran disesuaikan dengan rencana produksi Anda.",
  },
  {
    id: "custom",
    question: "Apakah tersedia custom order untuk spesifikasi khusus?",
    answer:
      "Ya. Promis Chain dapat menyesuaikan spesifikasi conveyor chain, sprocket, dan connecting link sesuai kebutuhan teknis pabrik kelapa sawit Anda.",
  },
  {
    id: "delivery",
    question: "Bagaimana sistem pengiriman ke lokasi pabrik?",
    answer:
      "Pengiriman dilakukan ke seluruh Indonesia dengan proteksi kemasan profesional. Estimasi waktu dan biaya dikonfirmasi setelah spesifikasi dan destinasi dipastikan.",
  },
  {
    id: "support",
    question: "Apakah tersedia konsultasi teknis sebelum membeli?",
    answer:
      "Tersedia. Tim kami membantu pemilihan model (misalnya 117/717 atau RS Series) agar cocok dengan beban operasional palm oil mill Anda.",
  },
];

function FAQSection() {
  return (
    <SectionContainer
      rootClassName="bg-card"
      className="flex flex-col gap-8 py-20 pb-32"
    >
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        Pertanyaan Umum (FAQ)
      </h2>
      <div className="mx-auto w-full max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-base lg:text-lg">
                {item.question}
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
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Beranda", path: "/" },
          { name: "Kontak", path: "/contact" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqJsonLd),
        }}
      />
      <HubungiKami />
      <FAQSection />
    </>
  );
}
