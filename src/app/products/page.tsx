import SectionContainer from "@/components/layout/section-container";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    name: "Conveyor Chain (Rantai Konveyor)",
    image: "/photo_20_2024-02-01_08-37-17.jpg",
    specs: [
      { spesifikasi: "Material", detail: "Alloy Steel / Stainless Steel" },
      { spesifikasi: "Pitch Range", detail: "100mm - 300mm" },
      { spesifikasi: "Breaking Load", detail: "Up to 120,000 kgf" },
      {
        spesifikasi: "Aplikasi",
        detail: "Fruit Bunch, Scraper, Elevator",
      },
    ],
  },
  {
    name: "Sprocket (Sproket)",
    image: "/photo_20_2024-02-01_08-37-17.jpg",
    specs: [
      { spesifikasi: "Material", detail: "Alloy Steel / Stainless Steel" },
      { spesifikasi: "Pitch Range", detail: "100mm - 300mm" },
      { spesifikasi: "Breaking Load", detail: "Up to 120,000 kgf" },
      {
        spesifikasi: "Aplikasi",
        detail: "Fruit Bunch, Scraper, Elevator",
      },
    ],
  },
];

function Katalog() {
  return (
    <SectionContainer className="flex flex-col gap-12 py-20 pb-32">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Katalog Produk & Spesifikasi
        </h2>
        <p className="text-muted-foreground max-w-2xl text-center text-base lg:text-lg">
          Data teknis lengkap untuk memastikan kecocokan komponen dengan sistem
          konveyor Anda.
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-24 lg:gap-28">
        {products.map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-5 md:gap-12 lg:gap-16"
          >
            <div className="group bg-card border-border relative aspect-square overflow-hidden rounded-2xl border shadow-md md:col-span-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col gap-6 md:col-span-3 lg:gap-8">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                {product.name}
              </h2>

              {/* Container Tabel dengan Style lebih Solid */}
              <div className="flex flex-col gap-2">
                <div className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
                  <Table>
                    <TableHeader className="bg-accent">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-accent-foreground w-[180px] px-3 py-4 text-base font-bold md:px-5">
                          Spesifikasi
                        </TableHead>
                        <TableHead className="text-foreground px-3 py-4 text-base font-bold md:px-5">
                          Detail Teknikal
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.specs.map((row) => (
                        <TableRow
                          key={row.spesifikasi}
                          className="border-border/50 hover:bg-muted/50"
                        >
                          <TableCell className="px-3 py-3.5 text-base font-semibold md:px-5">
                            {row.spesifikasi}
                          </TableCell>
                          <TableCell className="text-foreground/80 px-3 py-3.5 text-base leading-relaxed md:px-5">
                            {row.detail}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Tambahkan CTA Kecil di bawah tabel */}
                <div className="text-muted-foreground ml-1 flex items-center gap-2 text-sm italic">
                  <InfoIcon className="size-4" />
                  <span>
                    Spesifikasi dapat disesuaikan dengan kebutuhan (Custom
                    Order).
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="default"
                className="w-full py-6 text-lg font-semibold md:text-xl"
                asChild
              >
                <Link href="/products">
                  <div className="flex w-full items-center justify-center gap-2">
                    Minta Penawaran Harga{" "}
                    <ArrowRight className="size-4 -translate-y-px" />
                  </div>
                </Link>
              </Button>
            </div>
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
    </>
  );
}
