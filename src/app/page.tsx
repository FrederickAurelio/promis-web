import HeroTransition from "@/components/layout/hero-transition";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6 uppercase tracking-wider">
          Pemimpin Pasar Transmisi Daya
        </span>
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
