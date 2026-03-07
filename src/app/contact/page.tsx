import SectionContainer from "@/components/layout/section-container";
import { Separator } from "@/components/ui/separator";
import { ADDRESS, EMAIL, MAPS_EMBED_URL, PHONE_DISPLAY } from "@/constant";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const CONTACT_INFO = [
  { icon: PhoneIcon, label: "Telepon / WhatsApp", value: PHONE_DISPLAY },
  { icon: MailIcon, label: "Email", value: EMAIL },
  { icon: MapPinIcon, label: "Alamat Kantor", value: ADDRESS },
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
              <div
                className="flex items-center gap-3 lg:gap-4"
                key={info.label}
              >
                <div className="border-primary text-primary bg-primary/10 rounded-lg border p-2">
                  <info.icon className="size-5" size={28} />
                </div>

                <div className="flex flex-col">
                  <p className="text-foreground text-base lg:text-lg">
                    {info.label}
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg">
                    {info.value}
                  </p>
                </div>
              </div>
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

export default function ContactPage() {
  return (
    <>
      <HubungiKami />
    </>
  );
}
